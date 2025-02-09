import { getTrendingMovies } from "@/app/appwrite";

export async function GET() {
  const trendingMovies = await getTrendingMovies();

  return Response.json(trendingMovies, {
    headers: {
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
