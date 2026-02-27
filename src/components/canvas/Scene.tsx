import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing';
import { Stars } from './Stars';
import { Nebula } from './Nebula';
import { HyperCube } from './HyperCube';

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true, alpha: false }}
    >
      <color attach="background" args={['#000000']} />

      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <Stars />
        <Nebula />
        <HyperCube position={[0, 0, 0]} />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />

        <EffectComposer>
          <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={1.5} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
          <Noise opacity={0.02} />
        </EffectComposer>

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
