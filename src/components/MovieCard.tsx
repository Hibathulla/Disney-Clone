import React from "react";
import { Movie } from "../../typings";
import Image from "next/image";
import { getMoviePath } from "@/lib/getMoviePath";

const MovieCard = ({ movie }: { movie: Movie }) => {
  console.log(movie.backdrop_path, "path");

  return (
    <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
      <p className="absolute z-20 bottom-5 left-5">{movie.title}</p>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10"></div>
      <Image
        className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
        src={getMoviePath(movie.backdrop_path || movie.poster_path)}
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
      />
    </div>
  );
};

export default MovieCard;
