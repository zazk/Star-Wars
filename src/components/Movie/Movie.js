import React from "react";
const Movie = ({ location }) => {
  const movie = location.state.movie;
  const [charse] = movie.characters;
  console.log("CHAR  s", charse, "Movie", movie);
  console.log("Movie", movie);
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
      <p>Producer: {movie.producer}</p>
      <p>Episode: {movie.episode_id}</p>
      <p>{movie.opening_crawl}</p>
      <p>Characters</p>
      {charse &&
        charse.name &&
        movie.characters.map((c, index) => <div key={index}>{c.name}</div>)}
    </div>
  );
};
export default Movie;
