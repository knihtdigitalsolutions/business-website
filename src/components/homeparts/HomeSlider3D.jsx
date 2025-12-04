import React, { useEffect, useRef, useState } from "react";

// This module avoids static imports of heavy 3D libraries so the app won't break
// if those packages are not installed. It dynamically loads them at runtime
// and renders an interactive 3D scene with textured shapes that have eyes.

export default function HomeSlider3D({
  width = "100%",
  height = 480,
  activeIndex = 0,
}) {
  const [mods, setMods] = useState(null);
  const [error, setError] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const [r3f, drei, three] = await Promise.all([
          import("@react-three/fiber"),
          import("@react-three/drei"),
          import("three"),
        ]);

        if (!mounted) return;

        setMods({ ...r3f, ...drei, THREE: three });
      } catch (e) {
        // If imports fail (missing packages), we set an error so parent can fallback
        console.error("3D libs failed to load:", e);
        setError(e);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  if (error) return null; // parent will show fallback UI
  if (!mods) return null; // don't render anything until libs are ready

  const { Canvas, useFrame } = mods;
  const { OrbitControls, Environment } = mods;
  const THREE = mods.THREE;

  // Shape component: textured body + two eyes that track pointer
  function Creature({
    position = [0, 0.3, 0],
    scale = 1,
    clickTrigger = 0,
    seed = 0,
  }) {
    const meshRef = useRef();
    const leftEye = useRef();
    const rightEye = useRef();
    const pointer = useRef({ x: 0, y: 0 });
    const blinkRef = useRef({ next: 0, closing: 0 });
    const pulseRef = useRef({ t: 0 });

    // no external texture by default — keep materials simple to avoid loader errors
    const colorMap = null;

    useEffect(() => {
      // pointer is updated by parent via window pointer move handlers on the canvas
      // nothing to do here, just keep refs
    }, []);

    useFrame((state, delta) => {
      const t = state.clock.getElapsedTime();
      // gentle bobbing and breathing
      if (meshRef.current) {
        meshRef.current.rotation.y = Math.sin(t * 0.6 + seed) * 0.12;
        const breathe = 1 + Math.sin(t * 0.9 + seed) * 0.03;
        meshRef.current.scale.setScalar(
          scale * breathe * (1 + pulseRef.current.t * 0.15)
        );
      }

      // handle pulse trigger (short lived animation)
      if (pulseRef.current.t > 0) {
        pulseRef.current.t = Math.max(0, pulseRef.current.t - delta * 2);
      }

      // eyes follow pointer (pointer coordinates are normalized -1..1)
      const p = state.pointer || { x: 0, y: 0 }; // r3f provides normalized pointer
      if (leftEye.current && rightEye.current) {
        const rx = THREE.MathUtils.clamp(p.x * 0.9, -0.6, 0.6);
        const ry = THREE.MathUtils.clamp(p.y * 0.9, -0.5, 0.5);
        leftEye.current.position.x = -0.12 + rx * 0.07;
        leftEye.current.position.y = 0.06 + ry * 0.04;
        rightEye.current.position.x = 0.12 + rx * 0.07;
        rightEye.current.position.y = 0.06 + ry * 0.04;
      }

      // blinking logic (randomized)
      if (!blinkRef.current.next)
        blinkRef.current.next = t + 2 + Math.random() * 4 + seed;
      if (t > blinkRef.current.next && blinkRef.current.closing === 0) {
        blinkRef.current.closing = 1; // start closing
        blinkRef.current.next = t + 2 + Math.random() * 5 + seed;
      }
      // animate closing/ opening over 0.12s
      if (blinkRef.current.closing > 0) {
        blinkRef.current.closing += delta * 6; // progress
        const prog = Math.min(1, blinkRef.current.closing);
        const eyelidScale = 1 - prog; // 1 -> 0
        // apply subtle scale to eye whites to simulate blink
        if (leftEye.current && rightEye.current) {
          leftEye.current.scale.y = eyelidScale;
          rightEye.current.scale.y = eyelidScale;
        }
        if (prog >= 1) blinkRef.current.closing = 0; // reset
      }
    });

    return (
      <group position={position} scale={scale}>
        <mesh ref={meshRef} castShadow receiveShadow>
          <sphereGeometry args={[0.9, 64, 64]} />
          <meshStandardMaterial
            color={seed % 2 ? "#60a5fa" : "#5eead4"}
            metalness={0.25}
            roughness={0.35}
            emissive={seed % 2 ? "#052f5f" : "#042a24"}
            emissiveIntensity={0.02}
          />
        </mesh>

        {/* left eye (white) */}
        <mesh ref={leftEye} position={[-0.12, 0.06, 0.78]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.05}
            roughness={0.6}
          />
          {/* pupil */}
          <mesh position={[0, 0, 0.12]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial color="#0b1220" />
          </mesh>
        </mesh>

        {/* right eye (white) */}
        <mesh ref={rightEye} position={[0.12, 0.06, 0.78]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.05}
            roughness={0.6}
          />
          <mesh position={[0, 0, 0.12]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial color="#0b1220" />
          </mesh>
        </mesh>
      </group>
    );
  }

  function Scene({ clickTrigger, activeIndex }) {
    const positions = [
      [-1.2, -0.15, 0],
      [0, -0.2, 0],
      [1.2, -0.1, 0],
    ];
    return (
      <>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <pointLight position={[-10, -10, -10]} intensity={0.35} />
        {positions.map((pos, i) => (
          <Creature
            key={i}
            position={pos}
            scale={i === 1 ? 0.95 : 0.8}
            seed={i}
            clickTrigger={clickTrigger}
          />
        ))}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.0, 0]}
          receiveShadow
        >
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial
            color="#071022"
            metalness={0.05}
            roughness={0.95}
          />
        </mesh>
        <Environment preset="studio" />
      </>
    );
  }

  // Error boundary to prevent breaking host app
  class CanvasErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
      return { hasError: true };
    }
    componentDidCatch(err) {
      console.error("3D Canvas error:", err);
    }
    render() {
      if (this.state.hasError) return null;
      return this.props.children;
    }
  }

  return (
    <div
      style={{ width, height }}
      className="rounded-lg overflow-hidden relative"
    >
      <CanvasErrorBoundary>
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{ width: "100%", height: "100%" }}
          onPointerDown={() => setClickCount((c) => c + 1)}
        >
          <React.Suspense fallback={null}>
            <Scene clickTrigger={clickCount} activeIndex={activeIndex} />
          </React.Suspense>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
