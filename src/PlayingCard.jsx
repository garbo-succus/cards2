import { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { RoundedCardGeometry } from "./RoundedCardGeometry";

const PlayingCard = ({
  position = [0, 0, 0],
  textures = [],
  width = 0.0635,
  height = 0.089,
  thickness = 0.0003,
  cornerRadius = 0.003,
  segments = 8,
  ...props
}) => {
  // Load textures if provided
  const loadedTextures = useLoader(
    TextureLoader,
    textures.length > 0 ? textures : [],
  );

  const geometry = useMemo(() => {
    return new RoundedCardGeometry(
      width,
      height,
      thickness,
      cornerRadius,
      segments,
    );
  }, [width, height, thickness, cornerRadius, segments]);

  return (
    <mesh position={position} geometry={geometry} {...props}>
      {[
        <meshStandardMaterial key="0" attach="material-0" color="red" />, // front
        <meshStandardMaterial key="1" attach="material-1" color="green" />, // back
        <meshStandardMaterial key="2" attach="material-2" color="white" />, // sides
      ]}
    </mesh>
  );
};

export default PlayingCard;
