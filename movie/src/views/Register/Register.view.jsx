import { Label } from "flowbite-react";
import React from "react";
import RegisterViewModel from "./Register.viewModel";

function RegisterView() {
  const viewModel = RegisterViewModel();
  return (
    <div className="flex justify-center items-center py-20 bg-lime-100 dark:bg-indigo-950">
      <div className="w-full max-w-sm p-4 bg-emerald-600 border border-lime-100 rounded-lg shadow sm:p-6 md:p-8 dark:bg-indigo-900 dark:border-indigo-700">
        <div className="flex justify-between items-center">
          <h5 className="text-xl font-medium text-lime-100 dark:text-white">
            Register to our platform
          </h5>
          <button
            className="inline-block text-lime-100 dark:text-pink-400 hover:bg-gray-800 dark:hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
            onClick={() => viewModel.navigate("/")}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <form
          className="flex flex-col gap-4 "
          onSubmit={viewModel.formik.handleSubmit}
        >
          <div>
            <div className="mb-2 block pt-6">
              <Label
                htmlFor="email2"
                value="Your email"
                className="text-sm font-medium text-lime-100 dark:text-white"
              />
            </div>
            <input
              className="bg-lime-50 border border-gray-200 text-green-700 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-indigo-800 dark:border-pink-500 dark:placeholder-pink-300 dark:placeholder-opacity-60 dark:text-pink-400 dark:focus:ring-pink-400 dark:focus:border-pink-400"
              id="email2"
              type="email"
              placeholder="JohnCena@gmail.com"
              name="emailSignUp"
              onChange={viewModel.formik.handleChange}
              value={viewModel.formik.values.emailSignUp}
            />
            <p style={{ color: "red" }}>
              {viewModel.formik.errors.emailSignUp}
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="name"
                value="Full name"
                className="text-sm font-medium text-lime-100 dark:text-white"
              />
            </div>
            <input
              className="bg-lime-50 border border-gray-200 text-green-700 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-indigo-800 dark:border-pink-500 dark:placeholder-pink-300 dark:placeholder-opacity-60 dark:text-pink-400 dark:focus:ring-pink-400 dark:focus:border-pink-400"
              id="name"
              type="text"
              placeholder="John"
              name="fullName"
              onChange={viewModel.formik.handleChange}
              value={viewModel.formik.values.fullName}
            />
            <p style={{ color: "red" }}>{viewModel.formik.errors.fullName}</p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password2"
                value="Your password"
                className="text-sm font-medium text-lime-100 dark:text-white"
              />
            </div>
            <input
              className="bg-lime-50 border border-gray-200 text-green-700 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-indigo-800 dark:border-pink-500 dark:placeholder-pink-300 dark:placeholder-opacity-60 dark:text-pink-400 dark:focus:ring-pink-400 dark:focus:border-pink-400"
              id="password2"
              type="password"
              name="passwordSignUp"
              placeholder="••••••••"
              onChange={viewModel.formik.handleChange}
              value={viewModel.formik.values.passwordSignUp}
            />
            <p style={{ color: "red" }}>
              {viewModel.formik.errors.passwordSignUp}
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="repeat-password"
                value="Repeat password"
                className="text-sm font-medium text-lime-100 dark:text-white"
              />
            </div>
            <input
              id="repeat-password"
              type="password"
              placeholder="••••••••"
              className="bg-lime-50 border border-gray-200 text-green-700 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-indigo-800 dark:border-pink-500 dark:placeholder-pink-300 dark:placeholder-opacity-60 dark:text-pink-400 dark:focus:ring-pink-400 dark:focus:border-pink-400"
              name="repeatPasswordSignUp"
              onChange={viewModel.formik.handleChange}
              value={viewModel.formik.values.repeatPasswordSignUp}
            />
            <p style={{ color: "red" }}>
              {viewModel.formik.errors.repeatPasswordSignUp}
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 mt-4 text-green-700 bg-lime-100 hover:bg-lime-300 focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-pink-400 dark:text-pink-200"
          >
            Register new account
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterView;
