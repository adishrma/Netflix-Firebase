import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './Requests';



function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length -1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
 
  function truncate(string, n){
  return string?.length > n ? string.substr(0, n-1) + '...' : string;
  }

  return (
    <header className='banner' style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
    }}>

   <div className='banner__contents'>
    <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>

    <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>

    <div className="banner__button">
        <button className='play'>
      <span className="material-icons">play_arrow</span>
      <span>Play</span>
        </button>
        <button className='more'>
        <i className="material-icons">error_outline</i>
        <span>Info</span>
        </button>
        </div>
    </div>   
    <div className='banner__fadeBottom' />
    </header>
  )
};

export default Banner;
