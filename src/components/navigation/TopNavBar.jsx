import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/Axios";
import NoImage from "/Noimage.jpg";
function TopNavBar() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
// Search for movies
  const searchMovies = async () => {
    try {
      const response = await axios.get(`/search/multi?query=${search}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchMovies();
  }, [search]);
  return (
    <div className="w-full h-[7vh] flex items-center justify-center relative pt-2">
      <i className="ri-search-line text-xl"></i>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search by title..."
        className="w-1/2 border-none outline-none bg-transparent px-2 py-1 text-white rounded-md text-lg"
      />
      {search && (
        <i
          onClick={() => setSearch("")} 
          className="absolute right-[22%] ri-close-line text-3xl text-[#FF6500] cursor-pointer"
        ></i>
      )}
      <div className="absolute top-[100%] w-1/2 max-h-[50vh] bg-zinc-900 overflow-y-auto z-20">
        {search && searchResults.map((result) => (
        <Link
          key={result.id}
          to="/"
          className="h-14 flex items-center gap-2 border-b-2 border-zinc-500 hover:text-[#FF6500]"
        >
          <img className="w-10 h-10 rounded-md object-cover" src={result.backdrop_path|| result.profile_path ? `https://image.tmdb.org/t/p/w500${result.backdrop_path || result.profile_path}` : NoImage} alt="" />
          <span className="text-white text-lg hover:text-[#FF6500]">
            {result.title || result.name || result.original_title}
          </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopNavBar;
