import Image from "next/image";
import { getMovieDetails } from "@/services/moviesAPI";
import LikeButton from "@/components/LikeButton";
import CustomImage from "@/components/CustomImage";

export default async function MovieDetailsPage({ params }) {
  const { movieId } = await params;
  const movie = await getMovieDetails(movieId);

  return (
    <div className="max-w-7xl mx-auto mt-8 p-4 md:p-8 bg-dark-100 shadow-inner shadow-light-100/10">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">{movie.title}</h1>
        <p className="text-lg text-light-200 mt-2 italic">
          Released: {movie.release_date}
        </p>
      </div>

      {/* Movie Info Section */}
      <div className="flex flex-col md:flex-row md:space-x-8 bg-primary rounded-2xl shadow-md p-6">
        {/* Poster Image */}
        <div className="w-full md:w-1/2 lg:w-1/3 text-center mb-4 lg:mb-0">
          <div className="movie-card">
            <div className="movie-poster">
              <CustomImage
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={450}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <LikeButton movie={movie} />
            </div>
          </div>
        </div>

        {/* Movie Overview and Details */}
        <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
            <p className="text-lg text-light-200 leading-relaxed">
              {movie.overview}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Details</h2>
            <ul className="space-y-2 text-light-200">
              <li>
                <span className="font-bold text-light-100">Runtime:</span>{" "}
                {movie.runtime} minutes
              </li>
              <li>
                <span className="font-bold text-light-100">Budget:</span> $
                {movie.budget.toLocaleString()}
              </li>
              <li>
                <span className="font-bold text-light-100">Revenue:</span> $
                {movie.revenue.toLocaleString()}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="mt-8 space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-8">
          {/* Ratings Section */}
          <div className="w-full md:w-1/3 bg-dark-100 shadow-inner shadow-light-100/10 p-6">
            <h2 className="text-3xl font-bold text-white mb-4">Ratings</h2>
            <ul className="space-y-2 text-light-200">
              <li>
                <span className="font-bold text-light-100">Vote Average:</span>{" "}
                {movie.vote_average}
              </li>
              <li>
                <span className="font-bold text-light-100">Vote Count:</span>{" "}
                {movie.vote_count.toLocaleString()}
              </li>
            </ul>
          </div>

          {/* Genres Section */}
          <div className="w-full md:w-1/3 bg-dark-100 shadow-inner shadow-light-100/10 p-6">
            <h2 className="text-3xl font-bold text-white mb-4">Genres</h2>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-light-100/10 text-light-200 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          {/* Production Countries Section */}
          <div className="w-full md:w-1/3 bg-dark-100 shadow-inner shadow-light-100/10 p-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              Production Countries
            </h2>
            <ul className="space-y-2 text-light-200">
              {movie.production_countries.map((country) => (
                <li key={country.iso_3166_1}>{country.name}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Production Companies Section */}
        <div className="bg-dark-100 shadow-inner shadow-light-100/10 p-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Production Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movie.production_companies.map((company) => (
              <div
                key={company.id}
                className="bg-primary border border-light-100/10 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  {company.logo_path && (
                    <Image
                      src={`https://image.tmdb.org/t/p/w45${company.logo_path}`}
                      alt={company.name}
                      width={45} // Set the width
                      height={45} // Set the height
                      className="object-contain rounded-md shadow-sm hover:scale-110 transition-transform"
                    />
                  )}
                  <div>
                    <p className="font-bold text-light-100">{company.name}</p>
                    <p className="text-sm text-light-200">
                      {company.origin_country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
