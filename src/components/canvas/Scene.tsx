// src/components/canvas/Scene.tsx
import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing';
import { Stars } from './Stars';
import { Nebula } from './Nebula';
import { CoreSystem } from '../../systems/CoreSystem';
import { HyperCube } from './HyperCube';

// Helper to detect WebGL support
const isWebGLAvailable = () => {
    try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext &&
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
        return false;
    }
};

const Scene = () => {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    setIsSupported(isWebGLAvailable());
  }, []);

  if (!isSupported) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center text-white">
        <h2 className="text-xl font-bold mb-2">WebGL Not Supported</h2>
        <p className="text-sm text-gray-400">Please enable hardware acceleration or try a modern browser.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-black">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]} // Dynamic pixel ratio
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
            gl.setClearColor('#000000');
        }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#050505']} />

          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
          <pointLight position={[-10, -5, -10]} intensity={0.8} color="#ff00ff" />

          <Stars />
          <Nebula />

          {/* Intelligent Particle Core */}
          <CoreSystem position={[0, 0, 0]} />

          {/* Background Cube for depth */}
          <group position={[0, 0, -5]} scale={2} rotation={[0, Math.PI / 4, 0]}>
             <HyperCube visible={false} />
          </group>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />

          <EffectComposer enableNormalPass={false}>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              height={300}
              intensity={1.5}
            />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            <Noise opacity={0.05} />
          </EffectComposer>

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
