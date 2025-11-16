import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FavouritesState {
  favouriteTracks: string[];
  addTrack: (trackId: string) => void;
  removeTrack: (trackId: string) => void;
  toggleTrack: (trackId: string) => void;
  isTrackFavourite: (trackId: string) => boolean;
}

export const useFavouritesStore = create<FavouritesState>()(
  persist(
    (set, get) => ({
      favouriteTracks: [],

      addTrack: (trackId: string) =>
        set((state) => ({
          favouriteTracks: Array.from(
            new Set([...state.favouriteTracks, trackId])
          ),
        })),

      removeTrack: (trackId: string) =>
        set((state) => ({
          favouriteTracks: state.favouriteTracks.filter((id) => id !== trackId),
        })),

      toggleTrack: (trackId: string) => {
        const isFav = get().favouriteTracks.includes(trackId);
        if (isFav) get().removeTrack(trackId);
        else get().addTrack(trackId);
      },

      isTrackFavourite: (trackId: string) =>
        get().favouriteTracks.includes(trackId),
    }),

    {
      name: "favourites-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
