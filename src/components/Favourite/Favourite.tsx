import React from "react";
import { IconButton } from "@chakra-ui/react";
import { Star } from "lucide-react";

interface FavouriteButtonProps {
  isFav: boolean;
  onToggle: () => void;
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
  className?: string;
}

export const Favourite: React.FC<FavouriteButtonProps> = ({
  isFav,
  onToggle,
  size = "sm",
  ariaLabel = "Favorite",
  className,
}) => {
  const starFill = isFav ? "#fb8b24" : "none";
  const starStroke = isFav ? "#fb8b24" : "black";

  return (
    <IconButton
      aria-label={ariaLabel}
      onClick={onToggle}
      variant={isFav ? "solid" : "outline"}
      colorPalette={isFav ? "yellow" : "white"}
      size={size}
      className={className}
    >
      <Star size={28} fill={starFill} stroke={starStroke} />
    </IconButton>
  );
};
