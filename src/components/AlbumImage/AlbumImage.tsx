import React from "react";
import placeholder from "@/assets/album-placeholder.svg";
import { Image } from "@chakra-ui/react";

interface AlbumImageProps {
  images?: Array<{ "#text": string; size: string }>;
  alt: string;
}

export const AlbumImage: React.FC<AlbumImageProps> = ({ images, alt }) => {
  const url = images?.find((img) => img.size === "large")?.["#text"];

  const src = url && url.trim() !== "" ? url : placeholder;

  return <Image src={src} alt={alt} />;
};
