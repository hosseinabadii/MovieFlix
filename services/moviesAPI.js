"use server";

import { updateSearchCount } from "@/app/appwrite";

const SITE_URL = process.env.SITE_URL;
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  cache: "force-cache",
};

export async function getTrendingMoviesTMDB() {
  try {
    const endpoint = `${API_BASE_URL}/trending/movie/week?language=en-US`;
    const response = await fetch(endpoint, {
      ...API_OPTIONS,
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error("Response is not ok");
    }

    const data = await response.json();
    return data?.results;
  } catch (error) {
    console.error(`Error fetching trending TMDB movies: ${error}`);
  }
}

export async function getTrendingMoviesSite() {
  try {
    const response = await fetch(`${SITE_URL}/api/trending-movies`, {
      next: { revalidate: 86400 },
    });
    if (!response.ok) {
      throw new Error("Response is not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
}

export async function getFilteredMovies(query = "", page = 1) {
  try {
    const endpoint = query
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(
          query
        )}&page=${page}`
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&page=${page}`;
    const response = await fetch(endpoint, API_OPTIONS);

    if (!response.ok) {
      throw new Error("Response is not ok");
    }

    const data = await response.json();

    if (query && data?.results?.length > 0 && page === 1) {
      await updateSearchCount(query, data.results[0]);
    }
    return { movies: data?.results, totalPages: data?.total_pages };
  } catch (error) {
    console.error(`Error fetching movies: ${error}`);
  }
}

export async function getMovieDetails(movieId) {
  try {
    const endpoint = `${API_BASE_URL}/movie/${movieId}`;
    const response = await fetch(endpoint, API_OPTIONS);

    if (!response.ok) {
      throw new Error("Response is not ok");
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching movie details: ${error}`);
  }
}
