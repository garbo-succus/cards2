import { useMemo, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { RoundedCardGeometry } from "./RoundedCardGeometry";

const PlayingCard = ({
  position = [0, 0, 0],
  front = "",
  back = "",
  color = "white",
  width = 0.0635,
  height = 0.089,
  thickness = 0.0003,
  cornerRadius = 0.003,
  segments = 8,
  ...props
}) => {
  // Load textures if provided
  const textureUrls = [front, back].filter((url) => url !== "");
  const loadedTextures = useLoader(TextureLoader, textureUrls);

  const geometry = useMemo(() => {
    return new RoundedCardGeometry(
      width,
      height,
      thickness,
      cornerRadius,
      segments,
    );
  }, [width, height, thickness, cornerRadius, segments]);

  // Dispose textures when component unmounts or textures change
  useEffect(() => {
    return () => {
      if (Array.isArray(loadedTextures)) {
        loadedTextures.forEach((texture) => {
          if (texture && texture.dispose) {
            texture.dispose();
          }
        });
      } else if (loadedTextures && loadedTextures.dispose) {
        loadedTextures.dispose();
      }
    };
  }, [loadedTextures]);

  return (
    <mesh position={position} geometry={geometry} {...props}>
      <meshStandardMaterial
        attach="material-0"
        map={loadedTextures[0]}
        color={color}
      />
      <meshStandardMaterial
        attach="material-1"
        map={loadedTextures[1]}
        color={color}
      />
      <meshStandardMaterial attach="material-2" color={color} />
    </mesh>
  );
};

export default PlayingCard;
