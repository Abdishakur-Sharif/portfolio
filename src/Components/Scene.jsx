import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three"; // Ensure THREE is imported

const PlasmaticBlossom = () => {
  const glbUrl = "/assets/models/quantum_cube.glb"; // Path to your 3D model
  const { scene } = useGLTF(glbUrl); // Load the GLTF model
  const modelRef = useRef();

  // Apply animation to rotate the model
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.rotation.y = elapsedTime * 0.2; // Rotates the model
      modelRef.current.rotation.x = elapsedTime * 0.2;
      modelRef.current.rotation.z = elapsedTime * 0.2;
    }
  });

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          // Ensure that original materials and textures are preserved
          child.material = child.material || new THREE.MeshStandardMaterial();
        }
      });
    }
  }, [scene]);

  return (
    <primitive ref={modelRef} object={scene} scale={2} position={[0, 0, 0]}
    
     />
  );
};

const Scene = () => {
  return (
    <Canvas
      className="w-full h-screen"
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      {/* Lights to help the 3D model be visible */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Render the Plasmatic Blossom Model */}
      <PlasmaticBlossom />

      {/* OrbitControls disabled for static animation */}
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
};

export default Scene;












