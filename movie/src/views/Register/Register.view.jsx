import { Label } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { useRegisterSuccess } from "../../config/Toastify/Toastify";

function RegisterView() {
  const navigate = useNavigate();

  const INSERT_USER = gql`
    mutation INSERT_SIGNUP(
      $emailSignUp: String!
      $fullName: String!
      $passwordSignUp: String!
      $repeatPasswordSignUp: String!
    ) {
      insert_Users_one(
        object: {
          emailSignUp: $emailSignUp
          fullName: $fullName
          passwordSignUp: $passwordSignUp
          repeatPasswordSignUp: $repeatPasswordSignUp
        }
      ) {
        id
      }
    }
  `;

  const [insertUsers] = useMutation(INSERT_USER);

  const ValSignUp = Yup.object().shape({
    emailSignUp: Yup.string()
      .email("Invalid email address")
      .required("E-mail is required"),
    fullName: Yup.string()
      .min(3)
      .max(40)
      .required("Full name is required")
      .label("Full Name"),
    passwordSignUp: Yup.string()
      .required("Password is required")
      .label("Password"),
    repeatPasswordSignUp: Yup.string()
      .oneOf([Yup.ref("passwordSignUp"), null], "Password must match")
      .required("Repeat Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      emailSignUp: "",
      fullName: "",
      passwordSignUp: "",
      repeatPasswordSignUp: "",
    },
    validationSchema: ValSignUp,

    onSubmit: (values) => {
      insertUsers({
        variables: {
          emailSignUp: values.emailSignUp,
          fullName: values.fullName,
          passwordSignUp: values.passwordSignUp,
          repeatPasswordSignUp: values.repeatPasswordSignUp,
        },
      });
      useRegisterSuccess();
      formik.resetForm();
    },
  });

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

        <form className="flex flex-col gap-4 " onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
              value={formik.values.emailSignUp}
            />
            <p style={{ color: "red" }}>{formik.errors.emailSignUp}</p>
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
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            <p style={{ color: "red" }}>{formik.errors.fullName}</p>
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
              onChange={formik.handleChange}
              value={formik.values.passwordSignUp}
            />
            <p style={{ color: "red" }}>{formik.errors.passwordSignUp}</p>
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
              onChange={formik.handleChange}
              value={formik.values.repeatPasswordSignUp}
            />
            <p style={{ color: "red" }}>{formik.errors.repeatPasswordSignUp}</p>
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
