"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

export default function ThreeBackground() {
  

  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 2]} intensity={0.6} />
        <SphereComponent />
      </Canvas>
    </div>
  );
}

const SphereComponent = () => {
  const sphereRef = useRef(null);
  useFrame(() => {
    if (sphereRef.current) (sphereRef.current as any).rotation.y += 0.002;
  });
  return (
    <Sphere ref={sphereRef} args={[1.8, 100, 100]} scale={2.4}>
      <MeshDistortMaterial color="#60a5fa" distort={0.5} speed={1.2} roughness={0.2} />
    </Sphere>
  );
};
