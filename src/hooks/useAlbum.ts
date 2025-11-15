import { useQuery } from "@tanstack/react-query";
import { getAlbumInfo } from "../api/lastfm/album";
import type { Album } from "../api/lastfm/types";

export const useAlbum = (artistName: string, albumName: string) => {
  return useQuery<Album, Error>({
    queryKey: ["album", artistName, albumName],
    queryFn: () => getAlbumInfo(artistName, albumName),
    enabled: !!artistName && !!albumName,
  });
};
