"use client";

import React from "react";

const Loader = ({ size = 56 }) => {
  return (
    <div className="flex items-center justify-center">
      <div
      className={`border-4 border-t-yellow-400 border-b-blue-400 border-r-blue-400 border-l-yellow-400 rounded-full animate-spin h-12 w-12`}
      ></div>
    </div>
  );
};

export default Loader;
