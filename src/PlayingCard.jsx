import { useMemo, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { RoundedCardGeometry } from "./RoundedCardGeometry";

const PlayingCard = ({
  front = "/1px.png",
  back = "/1px.png",
  color = "white",
  // Default to MTG card dimensions
  size = [0.063, 0.088, 0.0003],
  cornerRadius = 0.0025,
  ...props
}) => {
  const [width, height, thickness] = size;
  const textures = useLoader(TextureLoader, [front, back]);

  const geometry = useMemo(() => {
    const segments = 8;
    return new RoundedCardGeometry(
      width,
      height,
      thickness,
      cornerRadius,
      segments,
    );
  }, [width, height, thickness, cornerRadius]);

  useEffect(
    () => () => {
      textures.forEach((texture) => {
        if (texture && texture.dispose) {
          texture.dispose();
        }
      });
    },
    [textures],
  );

  return (
    <mesh geometry={geometry} {...props}>
      <meshStandardMaterial
        attach="material-0"
        map={textures[0]}
        color={color}
      />
      <meshStandardMaterial
        attach="material-1"
        map={textures[1]}
        color={color}
      />
      <meshStandardMaterial attach="material-2" color={color} />
    </mesh>
  );
};

export default PlayingCard;
