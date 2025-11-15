import { lastfm, type LastfmResponse } from "./index";
import type { Album } from "./types";

export const getAlbumInfo = async (
  artistName: string,
  albumName: string
): Promise<Album> => {
  const response: LastfmResponse<{ album: Album }> = await lastfm.get("", {
    params: { method: "album.getinfo", artist: artistName, album: albumName },
  });
  return response.data.album;
};
