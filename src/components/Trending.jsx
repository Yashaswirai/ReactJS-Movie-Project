import React, { useState, useEffect } from "react";
import { Card, Dropdown, TopNavBar, Loader } from "./Index";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
const Trending = () => {
  document.title = "SCSDB - Trending";
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [time, setTime] = useState("day");
  const [trendingShows, setTrendingShows] = useState([]);
  const Trending = async () => {
    const res = await axios.get(`trending/${category}/${time}`);
    setTrendingShows(res.data.results);
  };
  const handleCategory = (e) => {
    setCategory(e);
  };
  const handleTime = (e) => {
    setTime(e);
  };
  useEffect(() => {
    Trending();
  }, [category, time]);
  return (
    <div className="w-screen h-screen overflow-auto p-4">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-wider">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line hover:cursor-pointer hover:text-[#FF6500]"
          ></i>
          Trending
        </h1>
        <TopNavBar />
        <div className="flex gap-2 h-10">
          <Dropdown
            title="Category"
            handleChange={handleCategory}
            options={["all", "movie", "tv"]}
          />
          <Dropdown
            title="Time"
            handleChange={handleTime}
            options={["day", "week"]}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-6 py-2">
        {trendingShows.length > 0 ? (
          trendingShows.map((show) => <Card key={show.id} Shows={show} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Trending;
