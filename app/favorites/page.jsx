"use client";

import MovieCard from "@/components/MovieCard";
import AllMoviesSkeleton from "@/components/AllMoviesSkeleton";
import { useMovieContext } from "@/context/movieContext";

export default function FavoritesPage() {
  const { favorites, loading } = useMovieContext();

  if (loading)
    return (
      <section className="all-movies">
        <h2 className="text-center text-3xl mb-20">Your Favorites</h2>
        <AllMoviesSkeleton numItems={4} />
      </section>
    );

  return (
    <section className="all-movies">
      {favorites && favorites.length > 0 ? (
        <>
          <h2 className="text-center text-3xl mb-20">Your Favorites</h2>
          <ul>
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
        </>
      ) : (
        <div className="h-[400px] flex flex-col gap-6 text-2xl items-center justify-center">
          <p className="text-red-500">No Favorite Movies Yet</p>
          <p className="text-gray-100">
            Add some movies to your favorites and they will apear here.
          </p>
        </div>
      )}
    </section>
  );
}
