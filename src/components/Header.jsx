import React, { useState, useEffect } from "react";
import axios from "../utils/Axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";
function Header() {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const banner = async () => {
    const res = await axios.get(`trending/all/day`);
    setTrendingMovie(res.data.results);
  };

  useEffect(() => {
    banner();
  }, []);

  const left = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(trendingMovie.length - 1);
    }
  };

  const right = () => {
    if (currentIndex < trendingMovie.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="w-full h-[50vh] mt-3 relative flex overflow-x-hidden rounded-md">
      <i
        onClick={left}
        className="ri-arrow-left-circle-fill absolute top-1/2 left-0 transform -translate-y-1/2 text-5xl cursor-pointer z-10 mix-blend-difference"
      ></i>
      {trendingMovie.length > 0 ? (
        <>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover object-top transition-all ease-linear duration-500"
              src={`https://image.tmdb.org/t/p/original${trendingMovie[currentIndex].backdrop_path}`}
              alt=""
            />
          </div>
          <div className="absolute bottom-36 left-16 w-full h-10 ">
            <h1 className="text-white text-4xl font-bold">
              {trendingMovie[currentIndex].original_title || trendingMovie[currentIndex].original_name || trendingMovie[currentIndex].title}
            </h1>
            <p className="text-white text-sm w-1/2 my-2">
              {trendingMovie[currentIndex].overview.slice(0, 150)}...
              <Link className="text-blue-700" to="/">
                Read More
              </Link>
            </p>
            <div className="flex gap-3 mt-2 items-center">
              <i className="ri-calendar-line text-yellow-500 text-sm"></i>
              <p className="text-white text-sm">
                {trendingMovie[currentIndex].release_date}
              </p>
              <i className="ri-star-s-fill text-yellow-500 text-sm"></i>
              <p className="text-white text-sm">
                {trendingMovie[currentIndex].vote_average}
              </p>
              <i className="ri-movie-2-line text-yellow-500 text-sm"></i>
              <p className="text-white text-sm">
                {trendingMovie[currentIndex].media_type}
              </p>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md inline-block mt-2">
              Watch Trailer
            </button>
          </div>
        </>
      ) : (
        <Loader />
      )}
      <i
        onClick={right}
        className="ri-arrow-right-circle-fill absolute top-1/2 right-0 transform -translate-y-1/2 text-5xl cursor-pointer z-10 mix-blend-difference"
      ></i>
    </div>
  );
}

export default Header;
