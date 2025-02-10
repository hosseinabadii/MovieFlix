import { getFilteredMovies } from "@/services/moviesAPI";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";

export default async function AllMovies({ query, currentPage }) {
  const response = await getFilteredMovies(query, currentPage);
  const movies = response?.movies;
  const totalPages = response?.totalPages || 5;

  return (
    <section id="all-movies" className="all-movies">
      <h2 className="px-4 sm:px-0">
        {query ? `Results found for "${query}"` : "All Movies"}
      </h2>
      {movies ? (
        <>
          {movies.length > 0 ? (
            <ul>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          ) : (
            <div className="no-movies-container">
              <p className="warning">No movies found.</p>
            </div>
          )}
        </>
      ) : (
        <div className="no-movies-container">
          <p className="error">Failed to fetch movies.</p>
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
