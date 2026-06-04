import { useEffect, useRef } from 'react';

export default function AuraFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (!gl) {
      console.warn('WebGL not supported');
      return;
    }

    const vsSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      varying vec2 vUv;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      // Stefan Gustavson's Simplex 3D Noise
      vec4 permute(vec4 x) {
        return mod(((x * 34.0) + 1.0) * x, 289.0);
      }
      vec4 taylorInvSqrt(vec4 r) {
        return 1.79284291400159 - 0.85373472095314 * r;
      }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

        // First corner
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - D.yyy;

        // Permutations
        i = mod(i, 289.0);
        vec4 p = permute(permute(permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        // Gradients
        float n_ = 0.142857142857; // 1.0/7.0
        vec3 ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0) * 2.0 + 1.0;
        vec4 s1 = floor(b1) * 2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);

        // Normalize gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
        // Adjust UV to center and keep aspect ratio correct
        vec2 aspect = vec2(max(u_resolution.x / u_resolution.y, 1.0), max(u_resolution.y / u_resolution.x, 1.0));
        vec2 uvCentered = (vUv - 0.5) * aspect;

        // Wave center shifts gently based on mouse position
        vec2 waveCenter = vec2(0.0) + u_mouse * 0.15;

        // Radial distance from wave center
        float dist = length(uvCentered - waveCenter);

        // Slow morphing noise to distort the radial wave shapes (makes them organic liquid-like)
        float tNoise = u_time * 0.15;
        float noiseValue = snoise(vec3(uvCentered * 1.8, tNoise));
        float distortedDist = dist + noiseValue * 0.07;

        // Create dark, pulsing radial waves moving outwards
        // We use cosine to generate multiple concentric rings
        float waveSpeed1 = u_time * 1.5;
        float waveSpeed2 = u_time * 2.2;
        
        // Ring 1 (low frequency, larger pulses)
        float ring1 = cos(distortedDist * 16.0 - waveSpeed1);
        ring1 = smoothstep(0.80, 1.0, ring1);

        // Ring 2 (medium frequency, tighter pulses)
        float ring2 = cos(distortedDist * 28.0 - waveSpeed2);
        ring2 = smoothstep(0.88, 1.0, ring2);

        // Slowly modulate the pulse amplitude over time
        float globalPulse = sin(u_time * 0.8) * 0.15 + 0.85;

        // Blend waves together and apply performance scaling / fading
        float waveIntensity = (ring1 * 0.65 + ring2 * 0.35) * globalPulse;

        // Fade out waves as they get far from the center
        waveIntensity *= smoothstep(0.8, 0.25, dist);
        
        // Also fade out slightly at the absolute center to look like an expanding ring
        waveIntensity *= smoothstep(0.02, 0.15, dist);

        // Color definitions (highly dark premium branding palette)
        vec3 c_bg = vec3(0.04, 0.04, 0.04);         // #0A0A0A (extremely dark charcoal background)
        vec3 c_ambient_glow = vec3(0.06, 0.05, 0.05); // Subtle dark-warm ambient fill
        vec3 c_wave_deep = vec3(0.18, 0.06, 0.02);    // #3C1103 (deep warm amber glow in valleys)
        vec3 c_wave_bright = vec3(0.98, 0.41, 0.16);  // #FA692A (bright brand orange pulse peak)
        vec3 c_wave_peach = vec3(1.0, 0.68, 0.48);    // #FFB080 (soft peach highlight at maximum pulse)

        // Generate slow-moving organic background gradient
        float bgNoise = snoise(vec3(uvCentered * 0.6, u_time * 0.04)) * 0.5 + 0.5;
        vec3 finalCol = mix(c_bg, c_ambient_glow, bgNoise);

        // Apply pulsing wave color overlay
        vec3 pulseCol = mix(c_wave_deep, c_wave_bright, waveIntensity);
        pulseCol = mix(pulseCol, c_wave_peach, smoothstep(0.7, 1.0, waveIntensity) * 0.5);

        // Add the glowing wave to the dark background (scaling it to keep it dark and premium)
        finalCol += pulseCol * waveIntensity * 0.45;

        // Add soft screen vignette
        vec2 vignetteUv = vUv - 0.5;
        float vignette = 1.0 - dot(vignetteUv, vignetteUv) * 1.3;
        vignette = clamp(vignette, 0.0, 1.0);
        finalCol *= vignette;

        gl_FragColor = vec4(finalCol, 1.0);
      }
    `;

    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const vertices = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0
    ]);

    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posAttr = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uResLoc = gl.getUniformLocation(program, 'u_resolution');
    const uMouseLoc = gl.getUniformLocation(program, 'u_mouse');

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        targetMouseY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    let width = 0;
    let height = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let animationFrameId: number;
    const startTime = performance.now();

    const render = () => {
      if (isVisible) {
        const time = (performance.now() - startTime) * 0.001;

        mouseX += (targetMouseX - mouseX) * 0.04;
        mouseY += (targetMouseY - mouseY) * 0.04;

        gl.clearColor(0.04, 0.04, 0.04, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(program);

        gl.uniform1f(uTimeLoc, time);
        gl.uniform2f(uResLoc, canvas.width, canvas.height);
        gl.uniform2f(uMouseLoc, mouseX, mouseY);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', resize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      
      gl.deleteBuffer(vertexBuffer);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block pointer-events-none select-none opacity-80"
      style={{ mixBlendMode: 'normal' }}
    />
  );
}
