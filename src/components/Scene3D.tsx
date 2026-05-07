import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function InteractiveBall({ position, color, distort }: { position: [number, number, number], color: string, distort: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(t / 4) / 4;
      meshRef.current.rotation.y = Math.sin(t / 4) / 4;
      // Follow mouse slightly
      const targetX = (state.mouse.x * 2);
      const targetY = (state.mouse.y * 2);
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, position[0] + targetX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, position[1] + targetY, 0.05);
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={1}>
      <Sphere 
        ref={meshRef} 
        args={[1, 100, 100]} 
        scale={hovered ? 1.2 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={color}
          speed={hovered ? 10 : 3}
          distort={distort}
          radius={1}
          metalness={0.8}
          roughness={0.1}
        />
      </Sphere>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-auto">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#FA692A" intensity={3} />
        
        <InteractiveBall position={[3, 2, 0]} color="#FA692A" distort={0.4} />
        <InteractiveBall position={[-4, -2, -2]} color="#212121" distort={0.6} />
        <InteractiveBall position={[5, -3, -1]} color="#FA692A" distort={0.3} />
      </Canvas>
    </div>
  );
}
