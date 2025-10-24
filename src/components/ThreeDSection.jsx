import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';

// Simple 3D floating object (can be replaced with a custom model)
function FloatingSphere() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#00fff7" roughness={0.2} metalness={0.7} emissive="#00fff7" emissiveIntensity={0.2} />
      </mesh>
    </Float>
  );
}

const ThreeDSection = () => (
  <div className="w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-black/80 my-12">
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <FloatingSphere />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
    </Canvas>
  </div>
);

export default ThreeDSection;
