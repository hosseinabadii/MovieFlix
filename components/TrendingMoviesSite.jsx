import TrendingMoviesList from "./TrendingMoviesList";
import { getTrendingMoviesSite } from "@/services/moviesAPI";

export default async function TrendingMoviesSite() {
  const movies = await getTrendingMoviesSite();

  return <TrendingMoviesList movies={movies} />;
}
