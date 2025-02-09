"use client";

import { toast } from "react-toastify";
import { useMovieContext } from "@/context/movieContext";
import { useUser } from "@clerk/nextjs";

export default function LikeButton({ movie }) {
  const { user } = useUser();
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie?.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("You have to login for adding movies to your favorites.");
      return;
    }

    if (favorite) {
      removeFromFavorites(movie.id);
      toast.info("Removed from your favorites.");
    } else {
      addToFavorites(movie);
      toast.success("Added to your favorites.");
    }
  };

  return (
    <div className="movie-overlay">
      <button
        className={`favorite-btn ${favorite && user && "active"}`}
        onClick={onFavoriteClick}
      >
        ♥
      </button>
    </div>
  );
}
