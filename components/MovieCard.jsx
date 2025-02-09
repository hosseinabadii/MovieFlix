import Link from "next/link";
import Image from "next/image";
import LikeButton from "./LikeButton";
import CustomImage from "./CustomImage";

export default function MovieCard({ movie }) {
  const {
    id,
    title,
    poster_path,
    release_date,
    original_language,
    vote_average,
  } = movie;

  return (
    <div className="movie-card">
      <Link href={`/movie/${id}`}>
        <div className="movie-poster">
          <CustomImage
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "/no-movie.png"
            }
            alt={title}
            width="200"
            height="300"
            className="text-white"
          />
          <LikeButton movie={movie} />
        </div>
        <div className="mt-4">
          <h3>{title}</h3>
          <div className="content">
            <div className="rating">
              <Image
                src="/star.svg"
                alt="Star Icon"
                width="16"
                height="16"
                className="size-4"
              />
              <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
              <span>•</span>
              <p className="lang">{original_language}</p>
              <span>•</span>
              <p className="year">
                {release_date ? release_date.split("-")[0] : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
