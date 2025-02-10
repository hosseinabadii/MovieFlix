import Image from "next/image";

export default function SiteHeader() {
  return (
    <header>
      <Image
        src="/hero.png"
        alt="Hero Banner"
        width="800"
        height="400"
        priority
      />
      <h1>
        Find <span className="text-gradient">Movies</span> and Enjoy
      </h1>
      <p className="text-gray-300 text-center mt-2">
        Login and add the movies to your favorites.
      </p>
    </header>
  );
}
