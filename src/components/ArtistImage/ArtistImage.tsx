import React from "react";
import styles from "./ArtistImage.module.css";
import placeholder from "@/assets/album-placeholder.svg";

interface ArtistImageProps {
  images?: Array<{ "#text": string; size: string }>;
  alt: string;
}

export const ArtistImage: React.FC<ArtistImageProps> = ({ images, alt }) => {
  const url = images?.find((img) => img.size === "large")?.["#text"];

  const src = url && url.trim() !== "" ? url : placeholder;

  return <img src={src} alt={alt} className={styles.image} />;
};
