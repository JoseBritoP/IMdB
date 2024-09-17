import Movies from "@/app/components/shared/MoviesContainer";
import NoMovies from "@/app/components/shared/NoMovies";

export default async function SearchPage({
  params,
}: {
  params: { searchTerm: string };
}) {
  const seachTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  console.log(results)
  return (
    <div>
      {results.length === 0 && (
        <NoMovies title="No results found"/>
      )}
      {results && <Movies movies={results} />}
    </div>
  );
}
