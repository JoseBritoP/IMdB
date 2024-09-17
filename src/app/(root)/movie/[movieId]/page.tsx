import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/app/interfaces/MoviesInterface";

export default async function MovieDetailPage({
  params,
}: {
  params: { movieId: string };
}) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.API_KEY}`
  );

  const movie = await res.json() as Movie;
  if (!res.ok)
    return (
      <section className="flex flex-col items-center justify-center mx-auto max-w-2xl pt-20 gap-5">
        <p className="text-2xl font-semibold">Movie not found</p>
        <Link
          className="p-3 hover:bg-amber-700 text-xl font-semibold bg-amber-600 w-24 text-center rounded-lg transition-colors duration-300 ease-in-out"
          href={"/"}
        >
          Home
        </Link>
      </section>
    );
  return (
    <section className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="Movie image"
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-xl mb-3 font-bold dark:text-sky-300">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </section>
  );
}
