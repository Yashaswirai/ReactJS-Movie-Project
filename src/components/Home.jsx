import React from "react";
import { NavBar, TopNavBar, Header, Cards } from "./Index";
function Home() {
  document.title = "SCSDB | Home";
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/5 h-full">
        <NavBar />
      </div>
      <div className="w-4/5 h-full">
        <div className="w-full relative">
          <TopNavBar />
        </div>
        <Header />
        <Cards />
      </div>
    </div>
  );
}

export default Home;
