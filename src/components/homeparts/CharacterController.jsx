import React, { useRef, useState, useEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Box } from "@react-three/drei";
import * as THREE from "three";

// --- 3D Character Controller Component ---

/**
 * Renders and animates the 3D character.
 * It uses the targetRef to determine the screen position of the Cube wrapper.
 */
/**
 * Renders and animates the 3D character with built-in debugging.
 * @param {object} props - Component props.
 * @param {React.MutableRefObject} props.targetRef - Ref to the 2D Swiper container.
 * @param {string} props.modelPath - Path to the GLB model (e.g., "./friendly-robot.glb").
 */
export const CharacterController = ({ targetRef, modelPath }) => {
  const groupRef = useRef();
  const { camera, size } = useThree();

  // Load the model
  const { scene } = useGLTF(modelPath);

  // === DEBUGGING LOGIC ===
  useEffect(() => {
    console.log("CharacterControllerLogic: Running. Model Path:", modelPath);
    if (scene) {
      console.log("CharacterControllerLogic: GLTF Scene loaded successfully.");
      console.log(
        "Model initial scale:",
        scene.scale.x,
        scene.scale.y,
        scene.scale.z
      );
    } else {
      console.error(
        "CharacterControllerLogic: GLTF Scene is null. Check file path and loading."
      );
    }
  }, [scene, modelPath]);
  // =======================

  const [isPeeking, setIsPeeking] = useState(true);
  const targetPosition = useMemo(() => new THREE.Vector3(), []);
  const scaleValue = 0.5; // Base scale

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPeeking((prev) => !prev);
    }, Math.random() * 5000 + 5000);
    return () => clearTimeout(timer);
  }, [isPeeking]);

  useFrame(() => {
    if (!targetRef.current || !groupRef.current) return;

    // 1. Get the bounding box of the 2D element
    const rect = targetRef.current.getBoundingClientRect();

    // 2. Convert 2D screen coordinates to 3D world coordinates
    const normalizedX = (rect.right / size.width) * 2 - 1;
    const normalizedY = -(rect.top / size.height) * 2 + 1;

    targetPosition.set(normalizedX, normalizedY, 0);
    targetPosition.unproject(camera);

    // 3. Calculate Z offset for Hiding vs. Peeking
    const peekOffset = isPeeking ? 1.0 : -0.5;

    // 4. Set the character's final target position
    const finalTargetX = targetPosition.x - 0.2;
    const cubeHeightInWorld = (rect.height / size.height) * camera.position.z;
    const finalTargetY = targetPosition.y - cubeHeightInWorld / 2;
    const finalTargetZ = targetPosition.z + peekOffset;

    // 5. Smoothly move (Lerp) the character toward the calculated final position
    groupRef.current.position.x +=
      (finalTargetX - groupRef.current.position.x) * 0.08;
    groupRef.current.position.y +=
      (finalTargetY - groupRef.current.position.y) * 0.08;
    groupRef.current.position.z +=
      (finalTargetZ - groupRef.current.position.z) * 0.08;

    // 6. Rotate the character
    groupRef.current.rotation.y = isPeeking
      ? Math.sin(Date.now() * 0.002) * 0.1
      : 0;
  });

  return (
    <group ref={groupRef}>
      {/* DEBUG: Red Wireframe Box */}
      <Box args={[0.2, 0.5, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="red"
          wireframe={true}
          transparent={true}
          opacity={1}
        />
      </Box>

      {/* Actual Model */}
      <primitive
        object={scene.clone()}
        scale={[scaleValue, scaleValue, scaleValue]}
      />
    </group>
  );
};
