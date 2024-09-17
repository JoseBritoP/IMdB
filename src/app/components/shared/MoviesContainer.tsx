import { Movie } from "@/app/interfaces/MoviesInterface";
import React from "react";
import MovieCard from "./MovieCard";

interface MoviesProps {
  movies: Movie[];
}

export default function Movies({ movies }: MoviesProps) {
  return (
    <section className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto py-4">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </section>
  );
}
