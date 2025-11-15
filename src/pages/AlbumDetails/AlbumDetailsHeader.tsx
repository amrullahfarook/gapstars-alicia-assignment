import React from "react";
import styles from "./AlbumDetailsHeader.module.css";
import type { Album } from "@/api/lastfm/types";

interface AlbumDetailsHeaderProps {
  album: Album;
}

export const AlbumDetailsHeader: React.FC<AlbumDetailsHeaderProps> = ({
  album,
}) => {
  const { name, artist, image, playcount } = album;

  const albumCover = image?.[3]?.["#text"] || image?.[2]?.["#text"] || "";

  return (
    <header className={styles.header}>
      <img src={albumCover} alt={name} className={styles.cover} />

      <div className={styles.info}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.artist}>{artist}</p>

        <div className={styles.stats}>
          <span className={styles.statItem}>
            <strong>Playcount:</strong> {playcount ?? "N/A"}
          </span>
        </div>
      </div>
    </header>
  );
};
