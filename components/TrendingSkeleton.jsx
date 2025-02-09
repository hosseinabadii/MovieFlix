export default function TrendingSkeleton() {
  return (
    <ul className="flex flex-row overflow-y-auto gap-5 -mt-10 w-full hide-scrollbar">
      {[...Array(5)].map((_, index) => (
        <li key={index} className="min-w-[230px] flex flex-row items-center">
          <p className="fancy-text mt-[22px] text-nowrap animate-pulse">
            {index + 1}
          </p>

          <div className="w-[127px] h-[163px] bg-gray-700 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer"></div>
          </div>
        </li>
      ))}
    </ul>
  );
}
