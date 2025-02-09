import { Suspense } from "react";
import TrendingMoviesSite from "@/components/TrendingMoviesSite";
import TrendingMoviesTMDB from "@/components/TrendingMoviesTMDB";
import AllMovies from "@/components/AllMovies";
import Search from "@/components/Search";
import SiteHeader from "@/components/Header";
import TrendingSkeleton from "@/components/TrendingSkeleton";
import AllMoviesSkeleton from "@/components/AllMoviesSkeleton";

export default async function Home(props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <SiteHeader />

      <section className="trending">
        <h2>Trending Movies on TMDB</h2>
        <Suspense fallback={<TrendingSkeleton />}>
          <TrendingMoviesTMDB />;
        </Suspense>
      </section>

      <section className="trending">
        <h2>Trending Movies on Our Site</h2>
        <Suspense fallback={<TrendingSkeleton />}>
          <TrendingMoviesSite />
        </Suspense>
      </section>

      <Search />

      <Suspense
        key={`${query}+${currentPage}+movies`}
        fallback={<AllMoviesSkeleton />}
      >
        <AllMovies query={query} currentPage={currentPage} />
      </Suspense>
    </>
  );
}
