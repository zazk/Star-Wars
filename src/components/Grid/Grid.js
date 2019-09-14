import React, { useEffect, useState } from "react";
import "./Grid.css";

const Grid = () => {
  const orders = ["episode_id", "created"];
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState(orders[0]);
  useEffect(() => {
    fetch("https://swapi.co/api/films/")
      .then(response => response.json())
      .then(obj => setItems(obj.results));
  }, []);

  if (order === orders[0]) {
    items.sort((a, b) => a.episode_id - b.episode_id);
  } else if (order === orders[1]) {
    items.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
  }
  return (
    <div>
      <div>
        <div>Order by</div>
        <button onClick={() => setOrder(orders[0])}>Episode Number</button>
        <button onClick={() => setOrder(orders[1])}>Release Date</button>
      </div>
      <div className="grid">
        {items.map((item, index) => (
          <div key={item.episode_id}>
            <img
              width={100}
              src={`http://w.areminds.com/f/starwars/${item.episode_id}.jpg`}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Grid;
