import React from "react";
import { AlbumImage } from "../AlbumImage/AlbumImage";
import { Card } from "@chakra-ui/react";

interface AlbumCardProps {
  images?: Array<{ "#text": string; size: string }>;
  alt: string;
  name: string;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ images, alt, name }) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <AlbumImage images={images} alt={alt} />
      <Card.Body gap="2">
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};
