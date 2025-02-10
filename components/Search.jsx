"use client";

import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}#search`);
  }, 1000);

  return (
    <div className="text-white text-sm sm:text-lg px-4">
      <div id="search" className="search">
        <div>
          <Image src="/search.svg" alt="Search Icon" width="24" height="24" />
          <input
            type="text"
            placeholder="Search through thousands of movies"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
            className="text-sm sm:text-lg"
          />
        </div>
      </div>
    </div>
  );
}
