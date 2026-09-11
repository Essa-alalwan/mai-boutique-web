import Image from "next/image";
import { getPlaceholderImageUrl } from "@/lib/images";

// Curated stock photography (see lib/images.js), shown in full color — swap
// for real M.A.I product photography before launch.
export default function PlaceholderImage({
  photo,
  width,
  height,
  alt,
  className = "",
  sizes = "(min-width: 980px) 25vw, 50vw",
}) {
  const src = getPlaceholderImageUrl(photo, width, height);
  return (
    <span className={`photo-wrap ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        style={{ objectFit: "cover" }}
      />
    </span>
  );
}
