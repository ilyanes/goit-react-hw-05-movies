import { Link } from "react-router-dom";
import { useLocation } from "react-router";
const imgUrl = "https://image.tmdb.org/t/p/w500/";

export default function MoviesList({ movies }) {
  const location = useLocation();
  console.log(location);

  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from:
                    location.pathname === "/"
                      ? "/"
                      : "/movies" + location.search,
                },
              }}
            >
              <img src={imgUrl + movie.poster_path} alt="" width={300} />
              <h3>{movie.original_title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
