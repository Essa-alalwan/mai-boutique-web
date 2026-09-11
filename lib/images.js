// Curated real (but non-M.A.I) stock photography from Unsplash, hand-picked per
// product/category so images actually look like clothing or perfume — swap for
// real M.A.I product photography before launch.
export function getPlaceholderImageUrl(photo, width, height) {
  return `https://images.unsplash.com/photo-${photo}?w=${width}&h=${height}&fit=crop&q=80&auto=format`;
}
