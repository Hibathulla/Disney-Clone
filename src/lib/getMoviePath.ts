export function getMoviePath(imagePath?: string, fullSize?: boolean) {
  const path = imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}${imagePath}`
    : "https://links.papareact.com/o8z";
  return path;
}
