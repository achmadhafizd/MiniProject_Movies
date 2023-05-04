import React from "react";

function Cards({ Title, src }) {
  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="!#">
          <img className="p-8 rounded-t-lg" src={src} alt={Title} />
        </a>
        <div className="px-5 pb-5">
          <a href="!#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {Title}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
