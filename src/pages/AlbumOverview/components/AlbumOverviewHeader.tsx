import React from "react";
import styles from "./AlbumOverviewHeader.module.css";
import type { Artist } from "@/api/lastfm/types";
import { ArtistImage } from "@/components/ArtistImage/ArtistImage";

interface AlbumOverviewHeaderProps {
  artist: Artist;
}

export const AlbumOverviewHeader: React.FC<AlbumOverviewHeaderProps> = ({
  artist,
}) => {
  return (
    <header className={styles.header}>
      <ArtistImage images={artist?.image} alt={""} />
      <h1 className={styles.artistName}>{artist.name}</h1>
    </header>
  );
};
