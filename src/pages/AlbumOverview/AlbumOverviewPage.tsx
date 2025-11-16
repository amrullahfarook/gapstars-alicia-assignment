import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import styles from "./AlbumOverviewPage.module.css";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import { AlbumOverviewHeader } from "./components/AlbumOverviewHeader";
import { ArtistAlbumList } from "./components/ArtistAlbumList";
import { useArtistTopAlbums } from "@/hooks/useArtistTopAlbums";
import { useArtist } from "@/hooks/useArtist";
import { Loader } from "@/components/Loader/Loader";

export const AlbumOverviewPage = () => {
  const { artist } = useParams<{ artist: string }>();
  const { data, isLoading, error } = useArtistTopAlbums(artist!);
  const { data: artistData } = useArtist(artist!);

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedAlbums = useMemo(() => {
    if (!data) return [];

    return [...data].sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });
  }, [data, sortOrder]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message="Unable to load artist albums" />;

  return (
    <div className={styles.wrapper}>
      {artistData && <AlbumOverviewHeader artist={artistData} />}

      <ArtistAlbumList
        albums={sortedAlbums}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />
    </div>
  );
};
