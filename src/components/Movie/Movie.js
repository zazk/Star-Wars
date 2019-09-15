import React from "react";
import { Redirect } from "react-router-dom";
const Movie = ({ location }) => {
  if (!location.state) {
    return <Redirect to="/" />;
  }
  const movie = location.state.movie;
  const [charse] = movie.characters;

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
