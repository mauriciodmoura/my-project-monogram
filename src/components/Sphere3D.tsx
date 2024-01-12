import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, '../assets/img/circle.png');

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
      sphereRef.current.rotation.x += 0;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Sphere3D = () => {
  return (
    <Canvas>
      <ambientLight intensity={3} />
      <pointLight position={[10, 10, 10]} />
      <RotatingSphere />
    </Canvas>
  );
};

export default Sphere3D;
