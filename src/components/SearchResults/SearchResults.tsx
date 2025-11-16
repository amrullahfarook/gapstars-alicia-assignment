import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import type { Track, Album } from "@/api/lastfm/types";
import { SearchResultItem } from "../SearchResultItem/SearchResultItem";

interface SearchResultsProps {
  tracks?: Track[];
  albums?: Album[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  tracks = [],
  albums = [],
}) => {
  return (
    <>
      {tracks.length > 0 && (
        <SimpleGrid columns={[1, 2, 3]} gap={4}>
          {tracks.map((track) => (
            <SearchResultItem
              key={`${track.name}-${track.artist}`}
              item={track}
              type="track"
            />
          ))}
        </SimpleGrid>
      )}

      {albums.length > 0 && (
        <SimpleGrid columns={[1, 2, 3]} gap={4} mt={6}>
          {albums.map((album) => (
            <SearchResultItem
              key={`${album.name}-${album.artist}`}
              item={album}
              type="album"
            />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};
