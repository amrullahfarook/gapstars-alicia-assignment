import React from "react";
import styles from "./AlbumTracksList.module.css";
import type { Track } from "@/api/lastfm/types";
import { FavouriteButtonWrapper } from "@/components/FavouriteButtonWrapper/FavouriteButtonWrapper";

interface AlbumTracksListProps {
  tracks: Track[];
}

export const AlbumTracksList: React.FC<AlbumTracksListProps> = ({ tracks }) => {
  if (!tracks || tracks.length === 0) {
    return <p className={styles.empty}>No tracks available for this album.</p>;
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Tracks</h2>

      <ul className={styles.list}>
        {tracks.map((track, index) => {
          const trackId = `${track.artist.name}_${track.name}`;

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

                <FavouriteButtonWrapper trackId={trackId} />
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
