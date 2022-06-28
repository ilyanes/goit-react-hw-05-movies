import { useEffect, useState } from "react";
import { getMovieById } from "../../services/fetchApi";
import {
  useParams,
  useLocation,
  NavLink,
  useNavigate,
  Outlet,
} from "react-router-dom";
// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";

const imgUrl = "https://image.tmdb.org/t/p/w500/";

export default function MovieDetailsPage() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  console.log(movie);
  console.log("params", params);

  useEffect(() => {
    getMovieById(params.movieId).then(setMovie);
  }, [params.movieId]);

  if (movie === null) {
    return <></>;
  }
  return (
    <div>
      <button
        onClick={() => navigate(location?.state?.from ?? "/")}
        type="button"
      >
        GoBack
      </button>
      <h1>
        {movie.title} ({movie.release_date.slice(0, 4)})
      </h1>
      <h4>{movie.tagline}</h4>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movie.genres.map((genre) => genre.name)}</p>
      <img src={imgUrl + movie.poster_path} alt="" />
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to={{ pathname: `/movies/${params.movieId}/cast` }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/movies/${params.movieId}/reviews` }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
