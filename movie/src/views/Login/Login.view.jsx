import { gql, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import authSlice from "../../config/redux/Auth/authSlice";
import { useLoginInvalid } from "../../config/Toastify/Toastify";

function LoginView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RETRIEVE_SIGNUP = gql`
    query RETRIEVE_SIGNUP {
      Users {
        id
        emailSignUp
        passwordSignUp
      }
    }
  `;

  const { data: RetrieveDataSignUp } = useQuery(RETRIEVE_SIGNUP);

  const ValSignIn = Yup.object().shape({
    emailLogin: Yup.string()
      .email()
      .required("Email is required")
      .label("Email"),
    passwordLogin: Yup.string()
      .required("Password is required")
      .label("Password"),
  });

  const formik = useFormik({
    initialValues: {
      emailLogin: "",
      passwordLogin: "",
    },
    validationSchema: ValSignIn,
    onSubmit: (values) => {
      const validationLogin = RetrieveDataSignUp?.Users.find(
        (user) =>
          user.emailSignUp === values.emailLogin &&
          user.passwordSignUp === values.passwordLogin
      );

      if (validationLogin) {
        dispatch(authSlice.actions.loginUser(validationLogin));
        dispatch(authSlice.actions.setSignIn(true));
        navigate("/");
      } else {
        useLoginInvalid();
      }
      formik.resetForm();
    },
  });

  return (
    <div className="flex justify-center items-center py-24 bg-lime-100 dark:bg-indigo-950">
      <div className="w-full max-w-sm p-4 bg-emerald-600 border border-lime-100 rounded-lg shadow sm:p-6 md:p-8 dark:bg-indigo-900 dark:border-indigo-700">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div className="flex justify-between items-center">
            <h5 className="text-xl font-medium text-lime-100 dark:text-white">
              Sign in to our platform
            </h5>
            <button
              className="inline-block text-lime-100 dark:text-pink-400 hover:bg-gray-800 dark:hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
              onClick={() => navigate("/")}
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

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-lime-100 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="emailLogin"
              id="email"
              className="bg-lime-50 border border-gray-200 text-green-700 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-indigo-800 dark:border-pink-500 dark:placeholder-pink-300 dark:placeholder-opacity-60 dark:text-pink-400 dark:focus:ring-pink-400 dark:focus:border-pink-400"
              placeholder="JohnCena@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.emailLogin}
            />
            <p style={{ color: "red" }}>{formik.errors.emailLogin}</p>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-lime-100 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="passwordLogin"
              id="password"
              placeholder="••••••••"
              className="bg-lime-50 border border-gray-200 text-green-700 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-indigo-800 dark:border-pink-500 dark:placeholder-pink-300 dark:placeholder-opacity-60 dark:text-pink-400 dark:focus:ring-pink-400 dark:focus:border-pink-400"
              onChange={formik.handleChange}
              value={formik.values.passwordLogin}
            />
            <p style={{ color: "red" }}>{formik.errors.passwordLogin}</p>
          </div>

          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-lime-100 rounded bg-lime-50 focus:ring-3 focus:ring-green-300 dark:bg-indigo-500 dark:border-pink-400 dark:focus:ring-pink-400"
                />
              </div>

              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-lime-100 dark:text-white"
              >
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-green-700 bg-lime-100 hover:bg-lime-300 focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-pink-400 dark:text-pink-200"
          >
            Login to your account
          </button>

          <div className="text-sm font-medium text-lime-100 dark:text-white">
            Not registered?{" "}
            <a
              href="/register"
              className="text-lime-300 hover:underline dark:text-pink-400"
            >
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginView;
