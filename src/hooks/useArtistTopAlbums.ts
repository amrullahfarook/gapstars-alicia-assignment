import { useQuery } from "@tanstack/react-query";
import type { Album } from "../api/lastfm/types";
import { getArtistTopAlbums } from "@/api/lastfm/artistTopAlbums";

export const useArtistTopAlbums = (artist: string) => {
  return useQuery<Album[], Error>({
    queryKey: ["artist-top-albums", artist],
    queryFn: () => getArtistTopAlbums(artist),
    enabled: !!artist,
  });
};
