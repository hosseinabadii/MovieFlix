"use client";

import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination({ currentPage, totalPages }) {
  const [page, setPage] = useState(currentPage);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    replace(`${pathname}?${params.toString()}#search`);
  };

  const getPageNumbers = () => {
    let pages = [];
    const range = 5;
    let start = Math.max(1, page - Math.floor(range / 2));
    let end = Math.min(totalPages, start + range - 1);

    if (end - start < range - 1) {
      start = Math.max(1, end - range + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (start > 1) pages.unshift("...");
    if (end < totalPages) pages.push("...");

    return pages;
  };

  return (
    <div className="flex items-center justify-center border-t border-gray-700 bg-dark-100 px-2 py-3 sm:px-6 mt-16">
      <button
        onClick={() => handlePageChange(1)}
        disabled={page === 1}
        className="relative inline-flex items-center rounded-md px-2 sm:px-4 py-2 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        First
      </button>

      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="relative inline-flex items-center rounded-md px-2 py-2 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaChevronLeft />
      </button>

      <nav className="flex space-x-2 mx-4">
        {getPageNumbers().map((num, index) =>
          num === "..." ? (
            <span
              key={index}
              className="hidden sm:block px-2 sm:px-4 py-2 text-gray-500"
            >
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => handlePageChange(num)}
              className={`px-2 sm:px-4 py-2 text-sm font-semibold rounded-md transition ${
                num === page
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              {num}
            </button>
          )
        )}
      </nav>

      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        className="relative inline-flex items-center rounded-md px-2 py-2 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaChevronRight />
      </button>

      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={page === totalPages}
        className="relative inline-flex items-center rounded-md px-2 sm:px-4 py-2 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Last
      </button>
    </div>
  );
}
