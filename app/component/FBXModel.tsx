import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX, useTexture } from "@react-three/drei";

function FBXModel({ modelPath, texturePath }: any) {
  const fbx = useFBX(modelPath);
  const texture = useTexture(texturePath);

  fbx.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture;
      child.material.needsUpdate = true;
    }
  });

  fbx.scale.set(0.04, 0.04, 0.04);
  return <primitive object={fbx} />;
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <FBXModel
        modelPath="3dboat/boat.FBX"
        texturePath="3dboat/3dpeinture.jpg"
      />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default Scene;
