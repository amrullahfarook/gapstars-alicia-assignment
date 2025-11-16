import { lastfm } from "@/api/lastfm";
import { useQuery } from "@tanstack/react-query";

export const useSearch = (query: string) =>
  useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      if (!query) return { tracks: [], albums: [] };

      const [trackRes, albumRes] = await Promise.all([
        lastfm.get("/?method=track.search", { params: { track: query } }),
        lastfm.get("/?method=album.search", { params: { album: query } }),
      ]);

      console.log(albumRes.data.results.albummatches.album[0].artist);

      return {
        tracks: trackRes.data.results.trackmatches.track || [],
        albums: albumRes.data.results.albummatches.album || [],
      };
    },
    enabled: !!query,
  });
