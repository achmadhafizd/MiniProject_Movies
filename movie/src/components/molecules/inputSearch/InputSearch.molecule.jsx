import React from "react";

function SearchInput({ onChange }) {
  return (
    <div>
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-green-700 dark:text-pink-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-lime-100 font-medium placeholder-green-700 placeholder-opacity-50 border border-lime-100 text-green-700 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 p-2.5  dark:bg-indigo-300 dark:border-pink-600 dark:placeholder-pink-500 dark:placeholder-opacity-50 dark:text-pink-500 dark:font-medium dark:focus:ring-pink-500 dark:focus:border-pink-500"
            placeholder="Search movie..."
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
