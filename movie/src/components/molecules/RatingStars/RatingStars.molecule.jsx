import { Rating } from "flowbite-react";
import React from "react";

const RatingStars = () => {
  return (
    <div>
      <Rating>
        <Rating.Star />
        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
          4.95
        </p>
        <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
        <a
          href="#"
          className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
        >
          73 reviews
        </a>
      </Rating>
    </div>
  );
};

export default RatingStars;
