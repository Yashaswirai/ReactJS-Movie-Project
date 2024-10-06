import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
function NavBar() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-4">
      <div className="w-full gap-2 flex items-center">
        <img src="/LOGO.svg" alt="Movie Collection" className="w-10 h-10" />
        <h1 className="text-2xl font-bold leading-none tracking-wider text-[#FF6500]">
          SCSDB.
        </h1>
      </div>
      <nav className="w-full flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-center text-[#FF6500] border-b-2 border-[#FF6500] pb-2 mb-2 hover:text-[#FF6500]">Explore</h1>
        <div className="w-full flex flex-col gap-2">
          <Nav title="Trending" icon="ri-fire-line" navigateto="/trending" />
          <Nav title="Movies" icon="ri-movie-2-line" navigateto="/movies" />
          <Nav title="TV Shows" icon="ri-radar-fill" navigateto="/tv-shows" />
          <Nav title="People" icon="ri-team-fill" navigateto="/people" />
          <Nav title="Books" icon="ri-book-line" navigateto="/books" />
        </div>
      </nav>
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-center text-[#FF6500] border-t-2 border-[#FF6500] pt-2 mt-2 hover:text-[#FF6500]">Website Information</h1>
        <div className="flex flex-col gap-2 items-start">
          <Nav title="Contact Us" icon="ri-phone-fill" />
          <Nav title="About Us" icon="ri-information-line" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
