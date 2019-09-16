import React from "react";
import { Redirect } from "react-router-dom";
const Character = ({ location }) => {
  if (!location.state) {
    return <Redirect to="/" />;
  }

  const character = location.state.character;
  return (
    <div>
      <h3>{character.name}</h3>
      <div>Hair: {character.hair_color}</div>
      <div>Birth: {character.birth_year}</div>
      <div>Height: {character.height}</div>
    </div>
  );
};
export default Character;
