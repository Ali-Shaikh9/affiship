"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { MessageSquareText } from "lucide-react";
import { User2Icon } from "lucide-react";
import { HeartIcon } from "lucide-react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="md:flex justify-between items-center border-b border-gray-100 py-4 px-24 hidden shadow-xl z-20">
        <Link href={"/"}><h1 className="text-3xl font-bold text-gray-800">
          Affi<span className="text-yellow-400">Ship</span>
        </h1></Link>
        <div className="search-bar flex bg-gray-100 relative items-center">
          <input
            type="text"
            placeholder="I am searching for..."
            size={48}
            className="py-2 px-8 rounded-md outline-none"
          />
          <div className="p-2 bg-yellow-400 absolute right-0 top-0">
            <Search className=" cursor-pointer" />
          </div>
        </div>
        <div className="welcome-message">
          <p className="font-semibold text-xl text-gray-800">Welcome, Ali</p>
        </div>
        <div className="elements flex items-center justify-around">
          <ul className="flex items-center gap-16 ">
            <li>
              <MessageSquareText className="text-3xl text-gray-800 cursor-pointer hover:bg-gray-100" />
            </li>
            <li>
              <HeartIcon className="text-3xl text-gray-800 cursor-pointer hover:bg-gray-100" />
            </li>
            <li>
              <Link href={"/profile"}><User2Icon className="text-3xl text-gray-800 cursor-pointer hover:bg-gray-100" /></Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}

      <nav className="md:hidden flex justify-between items-center border-b border-gray-100 py-4 px-24">
        <h1 className="text-3xl font-bold text-gray-800">
          Affi<span className="text-yellow-400">Ship</span>
        </h1>
        <div className="hamburger">
          <MenuIcon onClick={() => setOpen(!open)} />
        </div>
      </nav>
      {open && (
        <div className="flex flex-col w-1/2 py-32 items-center bg-black/10 backdrop-blur-3xl z-20 absolute p-2 min-h-screen top-0 left-0 gap-8 ">
          <h1 className="text-3xl font-bold text-gray-800">
            Affi<span className="text-white">Ship</span>
          </h1>
          <div className="search-bar flex bg-gray-100 relative items-center">
            <input
              type="text"
              placeholder="I am searching for..."
              size={48}
              className="py-2 px-8 rounded-md outline-none w-1/3"
            />
            <div className="p-2 bg-yellow-400 absolute right-0 top-0">
              <Search className=" cursor-pointer" />
            </div>
          </div>
          <div className="welcome-message">
            <p className="font-semibold text-xl text-gray-800">Welcome, Ali</p>
          </div>
          <div className="elements flex flex-col items-center justify-around">
            <ul className="flex flex-col items-center gap-16 ">
              <li>
                <MessageSquareText className="text-3xl text-gray-800 cursor-pointer" />
              </li>
              <li>
                <HeartIcon className="text-3xl text-gray-800 cursor-pointer" />
              </li>
              <li>
                <Link href={"/profile"}><User2Icon className="text-3xl text-gray-800 cursor-pointer"/></Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
