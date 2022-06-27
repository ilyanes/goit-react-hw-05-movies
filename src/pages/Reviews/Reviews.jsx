import { useEffect, useState } from "react";
// import {
//   useParams,
//   useLocation,
//   useHistory,
//   NavLink,
//   Route,
// } from 'react-router';
import { getMovieReviews } from "../../services/fetchApi";
import { useParams } from "react-router-dom";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReview] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId)
      .then((movie) => movie.results)
      .then(setReview)
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <div>
      {reviews && reviews.length !== 0 ? (
        <ul>
          {reviews.map(
            ({
              id,
              author,
              author_details: { avatar_path },
              created_at,
              content,
            }) => {
              return (
                <li key={id}>
                  {avatar_path && (
                    <img
                      src={
                        // author_details.avatar_path.slice(1) ||
                        `https://image.tmdb.org/t/p/original/${avatar_path}`
                      }
                      alt={author}
                      style={{ width: "80px" }}
                    />
                  )}
                  <h4>Author: {author.toUpperCase()}</h4>
                  <p>
                    <b>Created:</b> {created_at.split("T")[0]}
                  </p>

                  <p>{content}</p>
                </li>
              );
            }
          )}
        </ul>
      ) : (
        <h4>Nothing Found</h4>
      )}
    </div>
  );
}
