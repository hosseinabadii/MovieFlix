"use client";

import { useState } from "react";
import Image from "next/image";
import defaultImage from "@/public/no-movie.png";

export default function CustomImage({ src, alt, ...props }) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      onError={() => setImageSrc(defaultImage)}
      {...props}
    />
  );
}
