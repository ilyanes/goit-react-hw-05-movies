import { useEffect, useState } from "react";
import { getMovieCredits } from "../../services/fetchApi";
import { useParams } from "react-router-dom";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  console.log(cast);

  useEffect(() => {
    getMovieCredits(movieId)
      .then((movie) => movie.cast)
      .then(setCast)
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <div>
      {cast && cast.length !== 0 ? (
        <ul>
          {cast.map(({ id, character, name, profile_path }) => {
            return (
              <li key={id}>
                {profile_path && (
                  <img
                    src={
                      // author_details.avatar_path.slice(1) ||
                      `https://image.tmdb.org/t/p/original/${profile_path}`
                    }
                    alt={name}
                    // style={{ width: '80px' }}
                  />
                )}
                <h4>Actor: {name.toUpperCase()}</h4>
                <p> Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h4>Nothing Found</h4>
      )}
    </div>
  );
}
