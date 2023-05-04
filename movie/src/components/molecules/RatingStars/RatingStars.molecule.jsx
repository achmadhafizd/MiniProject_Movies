import { Rating } from "flowbite-react";
import React from "react";

function RatingStars({ vCount, vAverage }) {
  return (
    <div>
      <Rating>
        <Rating.Star />
        <p className="ml-2 text-sm font-bold text-lime-100 dark:text-white">
          {vAverage}
        </p>
        <span className="mx-1.5 h-1 w-1 rounded-full bg-lime-400 dark:bg-pink-400" />
        <p className="text-sm font-medium text-lime-100 underline hover:no-underline dark:text-white cursor-pointer">
          {vCount}
        </p>
      </Rating>
    </div>
  );
}

export default RatingStars;
