import React from "react";
import EditDeleteButton from "../EditDeleteButton/EditDeleteButton.molecule";

function comments({ isiKomen, fullName }) {
  return (
    <div>
      <div className="mx-auto max-w-5xl px-4 py-8">
        <section className="rounded-lg bg-emerald-700 dark:bg-indigo-600 p-4">
          <blockquote>
            <div className="flex justify-between items-center">
              <p className="font-medium text-lime-100 dark:text-white">
                {isiKomen}
              </p>
              <EditDeleteButton />
            </div>

            <cite className="inline-flex items-center not-italic">
              <span className="hidden h-px w-6 bg-emerald-300 dark:bg-pink-400 sm:inline-block" />
              <p className="text-sm font-medium uppercase text-lime-100 dark:text-pink-300 sm:ms-3">
                <strong>{fullName}</strong>.
              </p>
            </cite>
          </blockquote>
        </section>
      </div>
    </div>
  );
}

export default comments;
