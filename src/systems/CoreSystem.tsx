// src/systems/CoreSystem.tsx
import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3, Color, Object3D, InstancedMesh } from 'three';

export function CoreSystem(props: any) {
  const meshRef = useRef<InstancedMesh>(null!);
  const { mouse, viewport } = useThree();

  // Intelligent Particle System configuration
  const count = 300;
  const tempObject = useMemo(() => new Object3D(), []);
  const tempColor = useMemo(() => new Color(), []);

  // Initialize particles with randomized properties
  const particles = useMemo(() => {
    return new Array(count).fill(0).map(() => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2 + Math.random();

      return {
        initialPos: new Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ),
        speed: Math.random() * 0.5 + 0.2,
        phase: Math.random() * Math.PI * 2,
        scale: Math.random() * 0.5 + 0.5,
      };
    });
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Mouse interaction with smoothing
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;
    const mouseVector = new Vector3(mouseX, mouseY, 0);

    particles.forEach((particle, i) => {
      const { initialPos, speed, phase, scale } = particle;

      // Organic orbital movement
      const t = time * speed + phase;

      tempObject.position.copy(initialPos);
      tempObject.position.applyAxisAngle(new Vector3(0, 1, 0), t * 0.5);
      tempObject.position.y += Math.sin(t) * 0.5;

      // Intelligent Repulsion Logic
      const dist = tempObject.position.distanceTo(mouseVector);
      const repelRadius = 3;
      const repelForce = Math.max(0, repelRadius - dist);

      if (repelForce > 0) {
        const repelDir = tempObject.position.clone().sub(mouseVector).normalize();
        tempObject.position.add(repelDir.multiplyScalar(repelForce * 1.5));
      }

      // Dynamic Rotation
      tempObject.rotation.set(t, t * 0.5, 0);

      // Dynamic Scale (Life/Breathing effect)
      const pulse = 1 + Math.sin(time * 3 + phase) * 0.3 + repelForce;
      tempObject.scale.setScalar(scale * pulse);

      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);

      // Smart Coloring: Shift hue based on position and interaction
      const hue = (0.5 + Math.sin(time * 0.2 + initialPos.x * 0.1) * 0.1) % 1;
      const lightness = 0.5 + repelForce * 0.2;
      tempColor.setHSL(hue, 0.8, lightness);
      meshRef.current.setColorAt(i, tempColor);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} {...props}>
      <icosahedronGeometry args={[0.15, 1]} />
      <meshStandardMaterial
        roughness={0.2}
        metalness={0.8}
        emissive="#00ffff"
        emissiveIntensity={0.8}
        toneMapped={false}
      />
    </instancedMesh>
  );
}
