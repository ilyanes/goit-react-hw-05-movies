import MoviesList from "../../components/MoviesList/MoviesList";
import getTrendingMovies from "../../services/fetchApi";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
}
