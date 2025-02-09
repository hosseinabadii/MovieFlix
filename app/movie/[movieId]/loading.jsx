export default function Loading() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-8 p-4 md:p-8 bg-dark-100 shadow-inner shadow-light-100/10 animate-pulse">
      {/* Title Section */}
      <div className="text-center mb-8">
        <div className="h-16 w-64 bg-light-100/20 mx-auto rounded"></div>
        <div className="h-10 w-40 bg-light-100/10 mx-auto mt-4 rounded"></div>
      </div>

      {/* Movie Info Section */}
      <div className="flex flex-col md:flex-row md:space-x-8 bg-primary rounded-2xl shadow-md p-6">
        {/* Poster Image */}
        <div className="w-full md:w-1/2 lg:w-1/3 text-center mb-4 lg:mb-0">
          <div className="w-full max-w-md h-80 bg-light-100/20 mx-auto rounded-lg"></div>
        </div>

        {/* Movie Overview and Details */}
        <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col gap-8">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="space-y-4">
              <div className="h-8 w-48 bg-light-100/20 rounded"></div>
              <div className="h-5 w-full bg-light-100/10 rounded"></div>
              <div className="h-5 w-4/5 bg-light-100/10 rounded"></div>
              <div className="h-5 w-3/5 bg-light-100/10 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Details */}
      <div className="mt-8 space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 bg-dark-100 shadow-inner shadow-light-100/10 p-6 space-y-4"
            >
              <div className="h-8 w-48 bg-light-100/20 rounded"></div>
              <div className="h-5 w-full bg-light-100/10 rounded"></div>
              <div className="h-5 w-4/5 bg-light-100/10 rounded"></div>
              <div className="h-5 w-3/5 bg-light-100/10 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark-100 shadow-inner shadow-light-100/10 p-6 mt-8 space-y-4">
        <div className="h-8 w-48 bg-light-100/20 rounded"></div>
        <div className="h-5 w-full bg-light-100/10 rounded"></div>
        <div className="h-5 w-4/5 bg-light-100/10 rounded"></div>
        <div className="h-5 w-3/5 bg-light-100/10 rounded"></div>
      </div>
    </div>
  );
}
