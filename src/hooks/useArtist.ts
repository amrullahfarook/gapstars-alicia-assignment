import { useQuery } from "@tanstack/react-query";
import type { Artist } from "../api/lastfm/types";
import { getArtist } from "@/api/lastfm/artist";

export const useArtist = (artist: string) => {
  return useQuery<Artist, Error>({
    queryKey: ["artist", artist],
    queryFn: () => getArtist(artist),
    enabled: !!artist,
  });
};
