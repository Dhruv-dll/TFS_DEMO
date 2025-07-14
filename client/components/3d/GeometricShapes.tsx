import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { Color, Vector3 } from "three";
import * as THREE from "three";

function FloatingCube({
  position,
  color,
  scale = 1,
}: {
  position: Vector3;
  color: string;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere({
  position,
  color,
  scale = 1,
}: {
  position: Vector3;
  color: string;
  scale?: number;
}) {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.05}
        />
      </mesh>
    </Float>
  );
}

function Torus({
  position,
  color,
  scale = 1,
}: {
  position: Vector3;
  color: string;
  scale?: number;
}) {
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.4}>
      <mesh position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.3}
          emissive={color}
          emissiveIntensity={0.08}
        />
      </mesh>
    </Float>
  );
}

export default function GeometricShapes() {
  const shapes = useMemo(
    () => [
      {
        Component: FloatingCube,
        position: new Vector3(-3, 2, -2),
        color: "#9375ff",
        scale: 0.8,
      },
      {
        Component: FloatingSphere,
        position: new Vector3(3, -1, -1),
        color: "#CE49BF",
        scale: 0.6,
      },
      {
        Component: Torus,
        position: new Vector3(-2, -2, 1),
        color: "#46244C",
        scale: 0.5,
      },
      {
        Component: FloatingCube,
        position: new Vector3(2, 2, 0),
        color: "#e649ff",
        scale: 0.4,
      },
      {
        Component: FloatingSphere,
        position: new Vector3(0, -3, -3),
        color: "#9375ff",
        scale: 0.3,
      },
    ],
    [],
  );

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#9375ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#CE49BF" />
      <directionalLight position={[0, 5, 5]} intensity={0.8} color="#ffffff" />

      {shapes.map((shape, index) => (
        <shape.Component
          key={index}
          position={shape.position}
          color={shape.color}
          scale={shape.scale}
        />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
