import React, { useEffect, useState } from "react";
import "./Grid.css";

const Grid = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://swapi.co/api/films/")
      .then(response => response.json())
      .then(obj => setItems(obj.results));
  }, []);
  console.log("RESULTS", items);
  return (
    <div className="grid">
      {items.map((item, index) => (
        <div key={item.episode_id}>
          <img
            width={100}
            src={`http://w.areminds.com/f/starwars/${index + 1}.jpg`}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
};
export default Grid;
