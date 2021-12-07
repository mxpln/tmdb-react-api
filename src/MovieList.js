import { useState, useEffect } from "react";
import { getTrendingMovies, getMovieById } from "./api";

function MovieList({ props }) {
  console.log(props);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies()
      .then(({ data }) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {props}
      {movies && (
        <>
          {" "}
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default MovieList;
