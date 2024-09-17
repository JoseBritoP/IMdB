import Link from "next/link";
import React from "react";

interface NoMoviesProps {
  title:string
}

export default function NoMovies({title}:NoMoviesProps) {
  return (
    <section className="flex flex-col items-center justify-center mx-auto max-w-2xl pt-20 gap-5">
      <p className="text- xl font-semibold">{title}</p>
      <Link
        className="px-1 py-2 hover:bg-amber-700 text-lg font-semibold bg-amber-600 w-24 text-center rounded-lg transition-colors duration-300 ease-in-out"
        href={"/"}
      >
        Home
      </Link>
    </section>
  );
}
