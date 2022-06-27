import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { lazy } from "react";

import "./App.css";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movieDetails-page" */
  )
);
const Cast = lazy(() =>
  import("./pages/Cast/Cast" /* webpackChunkName: "cast-page" */)
);
const Reviews = lazy(() =>
  import("./pages/Reviews/Reviews" /* webpackChunkName: "reviews-page" */)
);
const NotFound = lazy(() =>
  import("./pages/NotFound/NotFound" /* webpackChunkName: "notFound-page" */)
);

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
