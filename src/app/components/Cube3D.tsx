import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

type Cube = {
  position: THREE.Vector3;
  scale: number;
  rotationSpeed: { x: number; y: number };
  velocity: THREE.Vector3;
  color: string;
};

function MovingCube({ cube }: { cube: Cube }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += cube.rotationSpeed.x;
    meshRef.current.rotation.y += cube.rotationSpeed.y;

    cube.position.add(cube.velocity);

    const bounds = 15;
    (['x', 'y', 'z'] as const).forEach((axis) => {
      if (cube.position[axis] > bounds || cube.position[axis] < -bounds) {
        cube.velocity[axis] *= -1;
      }
    });

    meshRef.current.position.copy(cube.position);
  });

  return (
    <mesh ref={meshRef} scale={cube.scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#2563eb"
        metalness={0.7}
        roughness={0.3}
        emissive="#1e40af"
        emissiveIntensity={0.15}
      />
      <Edges color="#93c5fd" linewidth={0.8} />
    </mesh>
  );
}

export default function Cube3D() {

  const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;

  const cubes: Cube[] = [];
  const spacing = 4;

  while (cubes.length < 12) {
    const position = new THREE.Vector3(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20
    );
    const scale = 1 + Math.random() * 3;
    const rotationSpeed = { x: 0.001 + Math.random() * 0.005, y: 0.002 + Math.random() * 0.005 };
    const velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.05,
      (Math.random() - 0.5) * 0.05,
      (Math.random() - 0.5) * 0.05
    );
    const color = randomColor();

    const tooClose = cubes.some((c) => c.position.distanceTo(position) < spacing);
    if (!tooClose) {
      cubes.push({ position, scale, rotationSpeed, velocity, color });
    }
  }

  return (
    <div className="absolute inset-0 -z-10 opacity-[0.25]">
      <Canvas camera={{ position: [0, 0, 25] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />
        {cubes.map((cube, idx) => (
          <MovingCube key={idx} cube={cube} />
        ))}
      </Canvas>
    </div>
  );
}
