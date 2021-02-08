import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import "./HomeScreen.css";
import Nav from "./Nav";
import requests from "../Requests";
export default function HomeScreen() {
  return (
    <div className='homeScreen'>
      {/* {navbar}
        {banner}
        {cards} */}
      <Nav />
      <Banner />
      <Cards
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Cards title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Cards title='Top Rated' fetchUrl={requests.fetchTopRated} />
      {/* <Cards title='Action Movies' fetchUrl={requests.fetchActionMovies} /> */}
      <Cards title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Cards title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Cards title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Cards title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
