import { Favourite } from "@/components/Favourite/Favourite";
import { useFavouritesStore } from "@/stores/favouriteStore";

export const FavouriteButtonWrapper = ({ trackId }: { trackId: string }) => {
  const isFav = useFavouritesStore((s) => s.favouriteTracks.includes(trackId));
  const toggleFav = useFavouritesStore((s) => s.toggleTrack);

  return (
    <Favourite
      isFav={isFav}
      onToggle={() => toggleFav(trackId)}
      ariaLabel="Toggle favourite"
      size="sm"
    />
  );
};
