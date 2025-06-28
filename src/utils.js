export const getImageUrl = (path) => {
  if (!path) return "/assets/fallback.png";
  return `/assets/${path.replace(/^\/+/, '')}`; // removes leading slashes
};
