import { useState } from "react";
import { getMoviesByQuery } from "../../services/fetchApi";
import MoviesList from "../../components/MoviesList/MoviesList";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    getMoviesByQuery(query).then(setMovies);
  }

  return (
    <div>
      <h1>MoviesPage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />

        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
}
