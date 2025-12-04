import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Environment,
  ContactShadows,
  Sparkles,
} from "@react-three/drei";

// Group of floating shapes with varied geometry, color and scale
function FloatingGroup() {
  const group = useRef();
  // define a few items with positions, sizes and types
  const items = useMemo(
    () => [
      { type: "sphere", pos: [-1.2, 0.2, 0], color: "#00fff7", scale: 0.9 },
      { type: "torus", pos: [1.1, -0.1, 0.3], color: "#ff7ab6", scale: 0.7 },
      { type: "box", pos: [0.3, 0.8, -0.5], color: "#7aff9e", scale: 0.6 },
      { type: "icosa", pos: [-0.4, -0.9, -0.2], color: "#ffd36b", scale: 0.65 },
    ],
    []
  );

  // gentle rotation for the whole group
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <group ref={group} position={[0, -0.1, 0]}>
      {items.map((it, i) => (
        <Float
          key={i}
          speed={1 + i * 0.3}
          rotationIntensity={0.8}
          floatIntensity={1.2}
        >
          <mesh position={it.pos} castShadow receiveShadow scale={it.scale}>
            {it.type === "sphere" && <sphereGeometry args={[0.9, 64, 64]} />}
            {it.type === "torus" && <torusGeometry args={[0.6, 0.2, 32, 64]} />}
            {it.type === "box" && <boxGeometry args={[0.9, 0.9, 0.9]} />}
            {it.type === "icosa" && <icosahedronGeometry args={[0.6, 0]} />}
            <meshStandardMaterial
              color={it.color}
              roughness={0.15}
              metalness={0.8}
              emissive={it.color}
              emissiveIntensity={0.08}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Small point light that orbits to create dynamic highlights
function MovingLight() {
  const light = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (light.current) {
      light.current.position.x = Math.sin(t * 0.7) * 3.2;
      light.current.position.y = Math.cos(t * 0.5) * 1.2 + 1.0;
      light.current.position.z = Math.cos(t * 0.6) * 2.2;
    }
  });
  return (
    <>
      <pointLight
        ref={light}
        intensity={1.4}
        distance={8}
        decay={2}
        color="#ffd36b"
        castShadow
      />
      <mesh position={[0, 0, 0]}>
        {" "}
        {/* invisible helper removed - kept for potential visualization */}
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </>
  );
}

const ThreeDSection = () => (
  <div className="flex flex-col relative w-full h-[600px] bg-transparent my-6">
    <p className="inset-0 absolute z-20 text-center text-white font-semibold text-lg md:text-2xl px-4 top-8">
      3D Animated Background Section -
    </p>
    <p className="inset-0 absolute z-20 text-center text-white font-semibold text-lg md:text-2xl px-4 top-15">
      Enhances visual appeal with floating shapes and dynamic lighting.
    </p>
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} shadows dpr={[1, 1.75]}>
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <FloatingGroup />
        <Sparkles count={40} scale={6} size={6} speed={0.3} color="#bdefff" />
        <MovingLight />
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.6}
          scale={6}
          blur={2.8}
          far={2}
        />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.9}
      />
    </Canvas>
  </div>
);

export default ThreeDSection;
