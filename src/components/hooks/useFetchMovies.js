import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/fetchApi";

export const useFetch = () => {
  const [film, setFilm] = useState();
  const { filmId } = useParams();

  useEffect(() => {
    getMovieById(filmId).then(setFilm);
  }, [filmId]);

  return film;
};
