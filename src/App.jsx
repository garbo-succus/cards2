import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PlayingCard from "./PlayingCard";

const card = {
  front: "./front.avif",
  back: "./back.avif",
  size: [0.0635, 0.089, 0.0003],
  cornerRadius: 0.003,
};

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 0.5], near: 0.001, far: 10 }}>
      <color attach="background" args={["#202020"]} />
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <PlayingCard position={[-0.1, 0, 0]} {...card} />
      <PlayingCard
        position={[0, 0, 0]}
        front="/front2.avif"
        back="/back.avif"
      />
      <PlayingCard
        position={[0.1, 0, 0]}
        front="/front2.avif"
        back="/back.avif"
      />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
