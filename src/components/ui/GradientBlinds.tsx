import React, { useEffect, useRef } from 'react';

export interface GradientBlindsProps {
  color1?: [number, number, number]; // RGB 0..1 (Signal Crimson Red [0.88, 0.12, 0.20])
  color2?: [number, number, number]; // RGB 0..1 (Deep Obsidian [0.07, 0.04, 0.08])
  color3?: [number, number, number]; // RGB 0..1 (Ruby Sheen [1.0, 0.38, 0.44])
  blindsCount?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VERTEX_SHADER = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
  #else
    precision mediump float;
  #endif

  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform vec3 u_color3;
  uniform float u_blindsCount;

  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    float aspect = u_resolution.x / max(u_resolution.y, 1.0);
    
    // Slanted blinds coordinate
    vec2 p = uv;
    p.x *= aspect;
    
    // 15-degree slant
    float slant = p.x * 0.95 - p.y * 0.25;
    
    // Repeated blind slats
    float scaled = slant * u_blindsCount;
    float blindIndex = floor(scaled);
    float blindUv = fract(scaled);
    
    // Wave oscillation across blinds
    float wave = sin(u_time * 0.8 + blindIndex * 0.18 + p.y * 2.2);
    
    // Shading per blind (facing angle catches specular highlight)
    float normal = sin(blindUv * 3.14159265);
    float edge = smoothstep(0.0, 0.08, blindUv) * smoothstep(1.0, 0.92, blindUv);
    
    // Light angle sweep
    float light = pow(max(0.0, normal * (0.6 + 0.4 * wave)), 1.8);
    float specular = pow(max(0.0, normal * (0.5 + 0.5 * sin(u_time * 1.2 + blindIndex * 0.25))), 4.0) * edge;
    
    // Color gradient across the banner
    float gradPos = clamp(uv.x * 0.7 + uv.y * 0.3 + wave * 0.15, 0.0, 1.0);
    vec3 baseColor = mix(u_color2, u_color1, gradPos * 0.75);
    
    // Composite blind reflection
    vec3 col = mix(baseColor * 0.92, baseColor * 1.15, light);
    col += u_color3 * (specular * 0.45);
    
    // Slats slit shadow
    col *= (0.82 + 0.18 * edge);

    gl_FragColor = vec4(col, 1.0);
  }
`;

export const GradientBlinds: React.FC<GradientBlindsProps> = ({
  color1 = [0.88, 0.12, 0.20], // Signal Crimson Red
  color2 = [0.07, 0.04, 0.08], // Deep Obsidian Black
  color3 = [1.0, 0.38, 0.44],  // Ruby specular sheen
  blindsCount = 22.0,
  speed = 0.6,
  className = '',
  style
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'high-performance'
    });

    if (!gl) return;

    const createShader = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        gl.deleteShader(s);
        return null;
      }
      return s;
    };

    const vert = createShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const frag = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vert || !frag) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }

    gl.useProgram(program);

    // Full screen triangle
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uResLoc = gl.getUniformLocation(program, 'u_resolution');
    const uColor1Loc = gl.getUniformLocation(program, 'u_color1');
    const uColor2Loc = gl.getUniformLocation(program, 'u_color2');
    const uColor3Loc = gl.getUniformLocation(program, 'u_color3');
    const uBlindsLoc = gl.getUniformLocation(program, 'u_blindsCount');

    let animationFrameId: number;
    let accumulatedTime = 0;
    let lastStamp = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (width === 0 || height === 0) return;

      const physicalW = Math.floor(width * dpr);
      const physicalH = Math.floor(height * dpr);

      if (canvas.width !== physicalW || canvas.height !== physicalH) {
        canvas.width = physicalW;
        canvas.height = physicalH;
        gl.viewport(0, 0, physicalW, physicalH);
      }
    };

    const render = (now: number) => {
      const dt = (now - lastStamp) / 1000;
      lastStamp = now;
      accumulatedTime += dt * speed;

      resize();

      gl.useProgram(program);
      gl.uniform1f(uTimeLoc, accumulatedTime);
      gl.uniform2f(uResLoc, canvas.width, canvas.height);
      gl.uniform3fv(uColor1Loc, color1);
      gl.uniform3fv(uColor2Loc, color2);
      gl.uniform3fv(uColor3Loc, color3);
      gl.uniform1f(uBlindsLoc, blindsCount);

      gl.drawArrays(gl.TRIANGLES, 0, 3);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (program) gl.deleteProgram(program);
      if (vert) gl.deleteShader(vert);
      if (frag) gl.deleteShader(frag);
      if (buf) gl.deleteBuffer(buf);
    };
  }, [color1, color2, color3, blindsCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block pointer-events-none select-none ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};
