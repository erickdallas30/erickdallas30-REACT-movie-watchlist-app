import React from "react";
import MovieCard from "./MovieCard";

function Watchlist({ watchList, removeMovie }) {
  const movieDisplay = watchList.map((movie, index) => {
    return <MovieCard movie={movie} removeMovie={removeMovie} watchList={watchList} />;
  });
  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default Watchlist;
