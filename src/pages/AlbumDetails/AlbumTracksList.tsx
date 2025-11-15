import React, { useState } from "react";
import styles from "./AlbumTracksList.module.css";
import type { Track } from "@/api/lastfm/types";
import { IconButton } from "@chakra-ui/react";
import { Star } from "lucide-react";

interface AlbumTracksListProps {
  tracks: Track[];
}

export const AlbumTracksList: React.FC<AlbumTracksListProps> = ({ tracks }) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (trackName: string) => {
    setFavorites((prev) => ({
      ...prev,
      [trackName]: !prev[trackName],
    }));
  };

  if (!tracks || tracks.length === 0) {
    return <p className={styles.empty}>No tracks available for this album.</p>;
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Tracks</h2>

      <ul className={styles.list}>
        {tracks.map((track, index) => {
          const trackId = `${track.name}-${index}`;
          const isFav = favorites[trackId];

          return (
            <li key={trackId} className={styles.item}>
              <div className={styles.left}>
                <span className={styles.index}>{index + 1}.</span>
                <span className={styles.title}>{track.name}</span>
              </div>

              <div className={styles.right}>
                {track.duration ? (
                  <span className={styles.duration}>
                    {formatDuration(Number(track.duration))}
                  </span>
                ) : (
                  <span className={styles.duration}>—</span>
                )}

                <IconButton
                  aria-label="Favorite track"
                  variant={isFav ? "solid" : "outline"}
                  colorPalette={isFav ? "yellow" : "white"}
                  size="sm"
                  onClick={() => toggleFavorite(trackId)}
                  className={styles.favButton}
                >
                  <Star
                    size={28}
                    fill={isFav ? "#f9f06b" : "none"}
                    stroke={isFav ? "#f9f06b" : "black"}
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.2s ease, fill 0.2s ease",
                      transform: isFav ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                </IconButton>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function formatDuration(seconds: number): string {
  if (!seconds || isNaN(seconds)) return "—";
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;
  return `${minutes}:${remaining.toString().padStart(2, "0")}`;
}
