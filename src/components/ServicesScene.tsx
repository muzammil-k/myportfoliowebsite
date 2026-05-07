import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCrystals() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2} position={[Math.sin(i * 2) * 5, Math.cos(i * 2) * 3, -2]}>
          <Icosahedron args={[1, 0]} scale={0.5 + Math.random()}>
            <MeshDistortMaterial
              color={i % 2 === 0 ? "#FA692A" : "#212121"}
              speed={2}
              distort={0.3}
              metalness={0.9}
              roughness={0.1}
            />
          </Icosahedron>
        </Float>
      ))}
    </group>
  );
}

export default function ServicesScene() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#FA692A" intensity={2} />
        <FloatingCrystals />
      </Canvas>
    </div>
  );
}
