import { getFilteredMovies } from "@/services/moviesAPI";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";

export default async function AllMovies({ query, currentPage }) {
  const response = await getFilteredMovies(query, currentPage);
  const movies = response?.movies;
  const totalPages = response?.totalPages || 5;

  return (
    <section id="all-movies" className="all-movies">
      <h2>{query ? `Results found for "${query}"` : "All Movies"}</h2>
      {movies ? (
        <>
          {movies.length > 0 ? (
            <ul>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          ) : (
            <div className="flex items-center justify-center h-20">
              <p className="text-yellow-500 text-2xl">No movies found.</p>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center h-20">
          <p className="text-red-500 text-2xl">Failed to fetch movies.</p>
        </div>
      )}

      <Pagination
        query={query}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}
