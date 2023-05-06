import { Textarea } from "flowbite-react";
import React from "react";

function InputFormComment({ formik, isEdit }) {
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Textarea
          className="bg-lime-50 font-medium mt-2 placeholder-green-700 placeholder-opacity-50 text-green-700 focus:outline-none focus:ring-3 focus:ring-green-700 focus:border-green-500  dark:bg-indigo-200 dark:placeholder-pink-500 dark:placeholder-opacity-50 dark:text-blue-700 dark:border-pink-400 dark:focus:border-pink-400"
          id="komen"
          placeholder="Leave a comment..."
          name="IsiKomen"
          rows={2}
          value={formik.values.IsiKomen}
          onChange={formik.handleChange}
        />
        <p className="text-red-700">{formik.errors.IsiKomen}</p>
        <div className="mt-2 ms-12">
          <button
            type="submit"
            className="group relative inline-block text-sm font-medium text-green-600 dark:text-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
          >
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-200 dark:bg-pink-400 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="relative block border border-current bg-lime-50 dark:bg-pink-300 px-8 py-3">
              {isEdit ? "Edit Comment" : "Leave Comment"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputFormComment;
