import { Movie } from "@/app/interfaces/MoviesInterface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

interface MovieCardProps {
  movie: Movie;
}
export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="Movie image"
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="p-2">
          <h2 className="text-lg font-bold truncate text-blue-200 dark:text-blue-300">
            {movie.title || movie.name}
          </h2>
          <p className="line-clamp-2 text-md">{movie.overview}</p>
          <div className="flex items-center">
            <p className="font-semibold text-gray-200">
              {movie.release_date || movie.first_air_date}
            </p>
            <span className="flex font-medium">
              <FiThumbsUp className="h-5 mr-1 ml-3 text-emerald-500" />
              {movie.vote_count}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
