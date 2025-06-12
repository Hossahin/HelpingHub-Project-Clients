import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="my-12 flex justify-center px-4">
      <label className="relative w-full max-w-2xl">
        <svg
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>

        <input
          type="search"
          placeholder="Search"
          className="w-full pl-16 pr-6 py-4 text-xl rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-4 focus:ring-blue-500 focus:outline-none shadow-lg transition-all duration-300"
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBar;
