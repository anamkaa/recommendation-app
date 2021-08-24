import React, { useState } from "react";
import "./styles.css";

var movieDatabase = {
  Horror: [
    { name: "The Exorsist", rating: "8/10" },
    { name: "The Conjuring", rating: "7.5/10" },
    { name: "Poltergiest", rating: "7.3/10" }
  ],

  Fiction: [
    { name: "Inseption", rating: "8.8/10" },
    { name: "Interstellar", rating: "8.6/10" },
    { name: "Tenet", rating: "7.4/10" }
  ],

  Thriller: [
    { name: "The Dark Knight", rating: "9/10" },
    { name: "The Departed", rating: "8.5/10" },
    { name: "Heat", rating: "8.2/10" }
  ],

  Romantic: [
    { name: "Forrest Gump", rating: "8.8/10" },
    { name: "Casablanca", rating: "8.5/10" },
    { name: "The Princess Bride", rating: "8/10" }
  ]
};

var movieList = Object.keys(movieDatabase);

export default function App() {
  var [inputChange, setInputChange] = useState("Horror");

  var movieChange = movieDatabase[inputChange];

  function onClickHandler(movie) {
    // var inputChange = movieDatabase[movie];
    setInputChange(movie);
  }
  return (
    <div className="App">
      <h1>🎥 Movie Recommendation</h1>
      Select Movie on the basis on genres below <br />
      {movieList.map(function (movie) {
        return (
          <button key={movie} onClick={() => onClickHandler(movie)}>
            {movie}
          </button>
        );
      })}
      <div>
        <ul>
          {" "}
          {movieChange.map((genre) => (
            <li key={genre.name}>
              <div> {genre.name}</div>
              <div> {genre.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
