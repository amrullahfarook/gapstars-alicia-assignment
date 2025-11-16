import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import type { Track, Album } from "@/api/lastfm/types";
import { AlbumImage } from "@/components/AlbumImage/AlbumImage";
import { Favourite } from "../Favourite/Favourite";
import styles from "./SearchResultItem.module.css";

interface SearchResultItemProps {
  item: Track | Album;
  type: "track" | "album";
}

export const SearchResultItem: React.FC<SearchResultItemProps> = ({
  item,
  type,
}) => {
  const [favourited, setFavourited] = useState(false);

  const toggleFavourite = () => {
    setFavourited((prev) => !prev);
  };

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
          <Text fontSize="sm">{(item as Track).artist}</Text>
        </div>
        <Favourite
          isFav={favourited}
          onToggle={toggleFavourite}
          ariaLabel={`Favorite ${type}`}
          size="sm"
        />
      </div>
    </Box>
  );
};
