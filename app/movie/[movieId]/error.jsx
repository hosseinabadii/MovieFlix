"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-[400px] flex flex-col gap-6 items-center justify-center">
      <p className="text-red-500 text-2xl">Failed to load movie details.</p>
      <button
        className="text-gray-50 px-4 py-2 rounded-2xl bg-red-700 hover:bg-red-600"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
