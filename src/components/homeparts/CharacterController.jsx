import React, { useRef, useState, useEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Box } from "@react-three/drei";
import * as THREE from "three";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils";

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

  // We'll clone the loaded scene so we can safely animate bones on the instance
  const modelRef = useRef(null);
  const armBones = useRef([]);

  useEffect(() => {
    if (!scene) return;
    try {
      // Use SkeletonUtils.clone to properly clone skinned meshes + skeletons
      modelRef.current = SkeletonUtils.clone(scene);
      // Find candidate bones/objects for waving on the cloned model
      const found = [];
      modelRef.current.traverse((n) => {
        if (!n) return;
        const name = (n.name || "").toLowerCase();
        if (n.isBone || /arm|hand|shoulder|elbow/i.test(name)) {
          found.push(n);
        }
      });
      armBones.current = Array.from(new Set(found)).slice(0, 6);
      console.log(
        "CharacterController: detected arm bones:",
        armBones.current.map((b) => b.name)
      );
    } catch (err) {
      console.error("CharacterController: failed to clone model", err);
      modelRef.current = scene;
    }
    // Fallback: if no bones found on clone, try original scene
    if ((!armBones.current || armBones.current.length === 0) && scene) {
      const found2 = [];
      scene.traverse((n) => {
        if (!n) return;
        const name = (n.name || "").toLowerCase();
        if (n.isBone || /arm|hand|shoulder|elbow/i.test(name)) {
          found2.push(n);
        }
      });
      if (found2.length) {
        armBones.current = Array.from(new Set(found2)).slice(0, 6);
        console.log(
          "CharacterController: fallback detected arm bones on original scene:",
          armBones.current.map((b) => b.name)
        );
      }
    }
  }, [scene]);

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

  const targetPosition = useMemo(() => new THREE.Vector3(), []);
  const scaleValue = 0.1; // Base scale

  // Ensure group starts in a sensible place so it's visible before any interaction
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.set(0, -0.2, 1.2);
    }
  }, []);

  useFrame(() => {
    // If group isn't ready, nothing to do
    if (!groupRef.current) return;

    // If targetRef isn't available, keep a steady position near camera
    if (!targetRef?.current) {
      // gently drift around origin
      const t = performance.now() * 0.0005;
      groupRef.current.position.x += Math.sin(t) * 0.0006;
      groupRef.current.position.y += Math.cos(t * 0.8) * 0.0004;
      return;
    }

    // 1. Get the bounding box of the 2D element
    const rect = targetRef.current.getBoundingClientRect();

    // 2. Convert 2D screen coordinates to 3D world coordinates
    const normalizedX = (rect.right / size.width) * 2 - 1;
    const normalizedY = -(rect.top / size.height) * 2 + 1;

    targetPosition.set(normalizedX, normalizedY, 0);
    targetPosition.unproject(camera);

    // 3. Calculate Z offset (steady, no peeking)
    const zOffset = 0.5; // steady distance from slider

    // 4. Set the character's final target position
    const finalTargetX = targetPosition.x - 0.2;
    const cubeHeightInWorld = (rect.height / size.height) * camera.position.z;
    const finalTargetY = targetPosition.y - cubeHeightInWorld / 2;
    const finalTargetZ = targetPosition.z + zOffset;

    // 5. Smoothly move (Lerp) the character toward the calculated final position
    groupRef.current.position.x +=
      (finalTargetX - groupRef.current.position.x) * 0.08;
    groupRef.current.position.y +=
      (finalTargetY - groupRef.current.position.y) * 0.08;
    groupRef.current.position.z +=
      (finalTargetZ - groupRef.current.position.z) * 0.08;

    // 6. Keep robot facing forward (no yaw) so it always looks ahead
    groupRef.current.rotation.y = 0;

    // 7. Waving animation on cloned model bones
    const t = performance.now() * 0.001;
    const waveSpeed = 3.0;
    const waveAmp = 0.9;
    if (armBones.current?.length) {
      armBones.current.forEach((b, i) => {
        if (!b) return;
        const phase = i % 2 === 0 ? 0 : Math.PI * 0.5;
        // prefer waving around Z/X depending on bone orientation
        b.rotation.z = Math.sin(t * waveSpeed + phase) * (waveAmp * 0.5);
        b.rotation.x = Math.sin(t * waveSpeed * 0.7 + phase) * (waveAmp * 0.2);
      });
    }
  });
  // Don't attempt to render the model until it's loaded
  if (!modelRef.current) return null;

  return (
    <group ref={groupRef}>
      <primitive
        object={modelRef.current}
        scale={[scaleValue, scaleValue, scaleValue]}
      />
    </group>
  );
};
