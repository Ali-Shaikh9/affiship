import React from "react";
import { Search } from "lucide-react";
import { MessageSquareText } from "lucide-react";
import { User2Icon } from "lucide-react";
import { HeartIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center border-b border-gray-100 py-4 px-24">
      <h1 className="text-3xl font-bold text-gray-800">
        Affi<span className="text-orange-400">Ship</span>
      </h1>
      <div className="search-bar flex bg-gray-100 relative items-center">
        <input
          type="text"
          placeholder="I am searching for..."
          size={48}
          className="py-2 px-8 rounded-md outline-none"
        />
        <Search className="absolute right-3 cursor-pointer" />
      </div>
      <div className="welcome-message">
                  <p className="font-semibold text-2xl text-gray-800">Welcome, Ali</p>
      </div>
      <div className="elements flex items-center justify-around">
        <ul className="flex items-center gap-16 ">
          <li><MessageSquareText className="text-gray-600 cursor-pointer hover:bg-gray-100 text-xl" /></li>
          <li><HeartIcon className="text-gray-600 cursor-pointer hover:bg-gray-100 text-xl" /></li>
          <li><User2Icon className="text-gray-600 cursor-pointer hover:bg-gray-100 text-xl" /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
