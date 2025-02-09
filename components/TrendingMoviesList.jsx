import Link from "next/link";
import CustomImage from "./CustomImage";

export default async function TrendingMoviesList({ movies }) {
  return (
    <>
      {movies ? (
        <>
          {movies.length > 0 ? (
            <ul>
              {movies.map((movie, index) => (
                <li key={movie.id}>
                  <p>{index + 1}</p>
                  <Link href={`/movie/${movie.id}`}>
                    <CustomImage
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : "/no-movie.png"
                      }
                      alt={movie.title}
                      width="200"
                      height="300"
                      className="text-white"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="h-60 flex items-center justify-center">
              <p className="text-yellow-500 text-2xl">
                No trending movies found.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="h-60 flex items-center justify-center">
          <p className="text-red-500 text-2xl">
            Failed to fetch trending movies.
          </p>
        </div>
      )}
    </>
  );
}
