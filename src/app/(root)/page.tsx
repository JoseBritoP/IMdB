import React from "react";
import Movies from "../components/shared/MoviesContainer";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { genre: string };
}) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 480 } }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }

  const data = await res.json();

  return <main>{data.results.length && <Movies movies={data.results} />}</main>;
}
