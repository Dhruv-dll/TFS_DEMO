import { Canvas } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Card3D({
  position,
  text,
  color,
}: {
  position: [number, number, number];
  text: string;
  color: string;
}) {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} position={position}>
        {/* Card background */}
        <mesh>
          <boxGeometry args={[2.5, 1.5, 0.1]} />
          <meshStandardMaterial
            color={color}
            metalness={0.6}
            roughness={0.4}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Card border glow */}
        <mesh>
          <boxGeometry args={[2.6, 1.6, 0.05]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.2}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Text */}
        <Center>
          <Text3D
            font="/fonts/inter.json"
            size={0.2}
            height={0.05}
            position={[0, 0, 0.1]}
          >
            {text}
            <meshStandardMaterial
              color="#ffffff"
              metalness={0.1}
              roughness={0.1}
              emissive="#ffffff"
              emissiveIntensity={0.1}
            />
          </Text3D>
        </Center>
      </group>
    </Float>
  );
}

export default function FloatingCards() {
  const cards = [
    {
      text: "AI Trading",
      position: [-3, 1, 0] as [number, number, number],
      color: "#9375ff",
    },
    {
      text: "Portfolio",
      position: [3, -1, 0] as [number, number, number],
      color: "#CE49BF",
    },
    {
      text: "Analytics",
      position: [0, 2, -1] as [number, number, number],
      color: "#46244C",
    },
    {
      text: "Security",
      position: [-2, -2, 1] as [number, number, number],
      color: "#e649ff",
    },
  ];

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#9375ff" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#CE49BF" />
      <directionalLight position={[0, 0, 5]} intensity={0.8} />

      {cards.map((card, index) => (
        <Card3D
          key={index}
          position={card.position}
          text={card.text}
          color={card.color}
        />
      ))}
    </Canvas>
  );
}
