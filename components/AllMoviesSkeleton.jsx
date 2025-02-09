export default function AllMoviesSkeleton({ numItems = 20 }) {
  return (
    <section className="all-movies">
      <h2>All Movies</h2>
      <ul>
        {[...Array(numItems)].map((_, index) => (
          <div className="movie-card animate-pulse" key={index}>
            <div className="w-full h-[300px] bg-gray-700 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer"></div>
            </div>

            <div className="mt-4">
              <div className="h-5 bg-gray-700 rounded w-3/4 mb-2"></div>

              <div className="content">
                <div className="rating flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-8"></div>
                  <span className="text-gray-700">•</span>
                  <div className="h-4 bg-gray-700 rounded w-10"></div>
                  <span className="text-gray-700">•</span>
                  <div className="h-4 bg-gray-700 rounded w-10"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}
