import React, { useEffect, useState, useCallback, useRef } from "react";
import { Route, Link } from "react-router-dom";
import Movie from "../Movie";
import Character from "../Character";
import "./Grid.css";

const Grid = () => {
  const orders = ["episode_id", "created"];
  const isParsed = useRef(false);
  const [items, setItems] = useState([]);
  const [people, setPeople] = useState([]);
  const [order, setOrder] = useState(orders[0]);

  const fetchPeople = useCallback(() => {
    const getPeople = (url, items) => {
      fetch(url)
        .then(response => response.json())
        .then(obj => {
          if (obj.next) {
            getPeople(obj.next, items.concat(obj.results));
          } else {
            setPeople(items.concat(obj.results));
          }
        });
    };
    getPeople("https://swapi.co/api/people/", []);
  }, []);

  useEffect(() => {
    fetch("https://swapi.co/api/films/")
      .then(response => response.json())
      .then(obj => setItems(obj.results));
    fetchPeople();
  }, [fetchPeople]);

  if (order === orders[0]) {
    items.sort((a, b) => a.episode_id - b.episode_id);
  } else if (order === orders[1]) {
    items.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
  }

  if (people.length > 0 && !isParsed.current) {
    items.map(item => {
      item.characters = item.characters
        .map(c => {
          const [, , , , , character] = c.split("/");
          return people[character - 1];
        })
        .filter(c => c);
      isParsed.current = true;
      return item;
    });
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
            <Link
              to={{
                pathname: `/movie/${item.episode_id}`,
                state: { movie: item }
              }}
            >
              <img
                width={100}
                src={`http://w.areminds.com/f/starwars/${item.episode_id}.jpg`}
                alt={item.title}
              />
            </Link>
          </div>
        ))}
      </div>
      <Route path="/movie/:id" component={Movie} />
      <Route path="/character/:id" component={Character} />
    </div>
  );
};
export default Grid;
