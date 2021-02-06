import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../Requests";
export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  const tunStr = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;
  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url('https://www.reliancedigital.in/wp-content/uploads/2019/02/netflix_movies_cover.jpg')`,
      }}>
      <div className='banner__content'>
        <h1 className='banner__title'>Movie Title</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {tunStr(`The Movie Description Goes Here`, 80)}
        </h1>
      </div>
      <div className='banner--fadeButton' />
    </header>
  );
}
