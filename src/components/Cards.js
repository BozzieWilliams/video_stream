import React, { useState, useEffect } from "react";
import "./Cards.css";
import axios from "../axios";
export default function Cards({ title, fetchUrl, isLarge = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchTheMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchTheMovies();
  }, [fetchUrl]);
  const tunStr = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;
  return (
    <div className='card'>
      <h2 className='title'>{title}</h2>
      <div className='card_posters'>
        {movies.map(
          (movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <>
                <img
                  key={movie.id}
                  className={`card_poster ${isLarge && "card_posterlarge"}`}
                  src={`${base_url}${
                    isLarge ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
                <p className='tit'>
                  {tunStr(
                    movie?.title || movie?.name || movie?.original_name,
                    4
                  )}
                </p>
              </>
            )
        )}
      </div>
    </div>
  );
}
