import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PlayingCard from "./PlayingCard";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 0.5], near: 0.001, far: 10 }}>
      <color attach="background" args={["#202020"]} />
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <PlayingCard position={[-0.1, 0, 0]} textures={['/front.png', '/back.png']} />
      <PlayingCard position={[0, 0, 0]} textures={['/front2.jpg', '/back.png']} />
      <PlayingCard position={[0.1, 0, 0]} textures={['/front2.jpg', '/back.png']} width={0.089} height={0.0635} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
