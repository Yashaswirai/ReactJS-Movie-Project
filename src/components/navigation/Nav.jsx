import React from "react";
import { Link } from "react-router-dom";
function Nav({ title, icon, navigateto }) {
  return (
    <div className="flex items-center">
      <Link
        to={navigateto}
        className="text-lg w-full font-medium p-2 tracking-wider hover:bg-[#0B192C] hover:text-[#FF6500] rounded-md"
      >
        <i className={`${icon} text-xl mr-2`}></i>
        {title}
      </Link>
    </div>
  );
}

export default Nav;
