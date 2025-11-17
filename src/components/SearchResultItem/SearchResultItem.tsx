import React from "react";
import { Box, Text } from "@chakra-ui/react";
import type { Track, Album } from "@/api/lastfm/types";
import { AlbumImage } from "@/components/AlbumImage/AlbumImage";
import styles from "./SearchResultItem.module.css";
import { FavouriteButtonWrapper } from "../FavouriteButtonWrapper/FavouriteButtonWrapper";

interface SearchResultItemProps {
  item: Track | Album;
  type: "track" | "album";
}

export const SearchResultItem: React.FC<SearchResultItemProps> = ({
  item,
  type,
}) => {
  const id = type === "track" ? `${item.artist}_${item.name}` : item.name;

  console.log(id);
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={2}
      position="relative"
      className={styles.card}
    >
      <AlbumImage images={(item as Album).image} alt={item.name} />

      <div className={styles.infoRow}>
        <div className={styles.text}>
          <Text fontWeight="bold">{item.name}</Text>
          <Text fontSize="sm">{(item as Album).artist}</Text>
        </div>
        {type === "track" && <FavouriteButtonWrapper trackId={id} />}
      </div>
    </Box>
  );
};
