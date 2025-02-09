import TrendingMoviesList from "./TrendingMoviesList";

import { getTrendingMoviesTMDB } from "@/services/moviesAPI";

export default async function TrendingMoviesTMDB() {
  const movies = await getTrendingMoviesTMDB();

  return <TrendingMoviesList movies={movies} />;
}
