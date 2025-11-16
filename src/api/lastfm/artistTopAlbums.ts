import { lastfm, type LastfmResponse } from "./index";
import type { Album } from "./types";

interface ArtistTopAlbums {
  album: Album[];
  "@attr": {
    artist: string;
    page: number;
    perPage: number;
    totalPages: number;
    total: number;
  };
}

export const getArtistTopAlbums = async (artist: string): Promise<Album[]> => {
  const response: LastfmResponse<{ topalbums: ArtistTopAlbums }> =
    await lastfm.get("", {
      params: { method: "artist.gettopalbums", artist },
    });
  return response.data.topalbums.album;
};
