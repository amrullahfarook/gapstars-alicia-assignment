import React from "react";
import { useParams } from "react-router-dom";
import { useAlbum } from "@/hooks/useAlbum";
import { Spinner } from "@chakra-ui/react";

import styles from "./AlbumDetailsPage.module.css";
import { AlbumDetailsHeader } from "./AlbumDetailsHeader";
import { AlbumTracksList } from "./AlbumTracksList";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
export const AlbumDetailsPage: React.FC = () => {
  const { artist, album } = useParams<{ artist: string; album: string }>();

  const { data: albumData, isLoading, error } = useAlbum(artist!, album!);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message="Failed to load album info" />;

  return (
    <div className={styles.container}>
      {albumData && <AlbumDetailsHeader album={albumData} />}
      <AlbumTracksList
        tracks={albumData?.tracks ? albumData.tracks.track : []}
      />
    </div>
  );
};
