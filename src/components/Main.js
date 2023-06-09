import React, { useEffect, useState } from "react";
import requests from "../config/REquest";
import axios from "axios";
import MainShimmer from "./MainShimmer";
import Selector from "./Selector";



const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

//   console.log(movie);
const truncateString=(string,num)=>{
    if(string?.length>num){
        return string.slice(0,num)+'...'
    }else{
        return string
    }
}

  if( !movie ) return <MainShimmer/>

  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          ></img>
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
              </button>
              <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                WatchLater
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Released : {movie?.release_date}
            </p>
            <p className="text-gray-200 w-full md:w-[70%] lg:w-[50%] xl:w-[35%]">
              {" "}
              {truncateString(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
      <Selector/>
    </>
  );
};

export default Main;
