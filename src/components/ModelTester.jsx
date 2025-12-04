import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Html,
  OrbitControls,
  Environment,
  Box,
} from "@react-three/drei";
import { Loader2 } from "lucide-react";
import * as THREE from "three";

/**
 * Isolated Component to test GLTF loading, scale, and lighting.
 * The model is centered and you can orbit the camera around it.
 */
const ModelTest = ({ modelPath, scale = 1.0 }) => {
  const { scene } = useGLTF(modelPath);
  const { camera } = useThree();

  useEffect(() => {
    // Center the camera on the model at a readable distance
    camera.position.set(0, 1, 3);
    camera.lookAt(0, 0, 0);

    // Optional: Log the model's bounding box/geometry size if the model is loaded.
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      console.log(
        `Model Dimensions (pre-scaling): ${size.x.toFixed(
          2
        )} x ${size.y.toFixed(2)} x ${size.z.toFixed(2)}`
      );
    }
  }, [scene, camera]);

  return (
    <group position={[0, 0, 0]}>
      {/* A ground plane to give visual context */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* The Actual Model */}
      <primitive object={scene.clone()} scale={[scale, scale, scale]} />

      {/* A simple reference box (1x1x1) for scale comparison */}
      <Box args={[1, 1, 1]} position={[2, 0, 0]}>
        <meshStandardMaterial color="cyan" wireframe />
      </Box>
    </group>
  );
};

const LoadingFallback = () => (
  <Html center>
    <div className="flex items-center space-x-2 text-white bg-gray-800 p-4 rounded-lg shadow-lg">
      <Loader2 className="animate-spin text-indigo-400 w-6 h-6" />
      <span className="text-sm font-medium">Loading Model for Test...</span>
    </div>
  </Html>
);

export default function DebugModelLoader() {
  const modelToLoad = "./friendly-robot.glb";

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-white text-xl mb-4 p-2 bg-indigo-700 rounded">
        Standalone Model Loader Test
      </h1>
      <div className="w-full h-[70vh]">
        <Canvas>
          <Environment preset="city" />
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 10, 5]} intensity={2} color="white" />
          <directionalLight
            position={[-5, -10, -5]}
            intensity={1}
            color="purple"
          />

          <Suspense fallback={<LoadingFallback />}>
            {/* Try a scale of 1.0 here for easier testing */}
            <ModelTest modelPath={modelToLoad} scale={1.0} />
          </Suspense>

          <OrbitControls />
        </Canvas>
      </div>
      <div className="mt-4 p-2 text-center text-white/80">
        <p>
          If the model does not appear here, it is: (1) not found, (2) too
          small, or (3) has invisible materials.
        </p>
        <p className="font-bold">
          Try changing the `scale` prop in ModelTest or verify the
          `friendly-robot.glb` file.
        </p>
      </div>
    </div>
  );
}
