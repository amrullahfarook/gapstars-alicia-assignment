import React from "react";
import styles from "./ArtistAlbumList.module.css";
import type { Album } from "@/api/lastfm/types";
import { createListCollection, Portal, Select } from "@chakra-ui/react";
import { AlbumCard } from "@/components/AlbumCard/AlbumCard";

interface ArtistAlbumListProps {
  albums: Album[];
  sortOrder: string;
  onSortChange: (sort: "asc" | "desc") => void;
}

export const ArtistAlbumList: React.FC<ArtistAlbumListProps> = ({
  albums,
  sortOrder,
  onSortChange,
}) => {
  const sortBy = createListCollection({
    items: [
      { label: "Name (A → Z)", value: "asc" },
      { label: "Name (Z → A)", value: "desc" },
    ],
  });

  return (
    <section className={styles.section}>
      <div className={styles.sortBar}>
        <Select.Root
          value={[sortOrder]}
          multiple={false}
          collection={sortBy}
          size="sm"
          width="150px"
          onValueChange={(details) =>
            onSortChange(details.value[0] as "asc" | "desc")
          }
        >
          <Select.HiddenSelect />
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Choose sorting method" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {sortBy.items.map((sort) => (
                  <Select.Item item={sort} key={sort.value}>
                    {sort.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
      </div>

      <div className={styles.grid}>
        {albums.map((album) => (
          <AlbumCard images={album.image} alt={album.name} name={album.name} />
        ))}
      </div>
    </section>
  );
};
