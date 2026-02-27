import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import { useCursor } from '@react-three/drei';

export function HyperCube(props: any) {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useCursor(hovered);

  useFrame((state, delta) => {
    // Basic rotation
    if (meshRef.current) {
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;

        // Hover effect: scale up slightly
        const targetScale = hovered ? 1.2 : 1;

        // Breathing effect (pulsating scale)
        const time = state.clock.getElapsedTime();
        const breathingFactor = 1 + Math.sin(time * 2) * 0.05;

        // Combine effects
        const finalScale = targetScale * breathingFactor;
        meshRef.current.scale.lerp(new Vector3(finalScale, finalScale, finalScale), 0.1);
    }
  });

  return (
    <group {...props}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={hovered ? '#ff007f' : '#00ffff'}
          wireframe
          emissive={hovered ? '#ff007f' : '#00ffff'}
          emissiveIntensity={2}
          transparent
          opacity={0.8}
        />

        {/* Inner Glowing Core */}
        <mesh scale={[0.5, 0.5, 0.5]}>
          <dodecahedronGeometry args={[0.6, 0]} />
           <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={5}
            transparent
            opacity={0.9}
          />
        </mesh>
      </mesh>
    </group>
  );
}
