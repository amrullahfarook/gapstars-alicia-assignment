import { lastfm, type LastfmResponse } from "./index";
import type { Artist } from "./types";

export const getArtist = async (artist: string): Promise<Artist> => {
  const response: LastfmResponse<{ artist: Artist }> = await lastfm.get("", {
    params: { method: "artist.getinfo", artist },
  });
  console.log(response.data.artist.image[3]);
  return response.data.artist;
};
