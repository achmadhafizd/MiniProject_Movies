import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, DarkThemeToggle, Flowbite } from "flowbite-react";
import { SearchInput } from "../../molecules";
import { SearchMovie } from "../../../config/redux/movies/moviesThunk";
import movieSlice from "../../../config/redux/movies/moviesSlice";
import authSlice from "../../../config/redux/Auth/authSlice";
import { useSignInSelector } from "../../../config/redux/Auth/authSelector";

function Navibar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSignInSelector();

  const handleLogout = () => {
    dispatch(authSlice.actions.setSignIn(false));
  };

  const search = async (q) => {
    if (q.length > 2) {
      const query = await dispatch(SearchMovie(q));
      dispatch(movieSlice.actions.setSearchData(query.payload.results));
      navigate("/searchData");
    } else if (q.length === 0) {
      navigate("/");
    }
  };

  return (
    <div className="item-center">
      <nav className="bg-emerald-700 border-gray-200 dark:bg-indigo-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-lime-100 hover:text-lime-300 dark:text-white dark:hover:text-pink-400">
              MovieLibra
            </span>
          </a>
          <div className="flex md:order-2 gap-8 justify-center items-center mt-4">
            <SearchInput onChange={({ target }) => search(target.value)} />
            <button
              type="button"
              className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-lime-300 dark:focus:ring-pink-500"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <Avatar rounded size="md" />
            </button>

            <Flowbite className="justify-end items-end ">
              <DarkThemeToggle className="light text-lime-300 hover:bg-gray-800 focus:ring-lime-200 dark:text-pink-400 dark:focus:ring-pink-300 dark:hover:text-orange-400 dark:hover:bg-blue-200" />
            </Flowbite>

            <div
              className="z-50 hidden my-4 text-base list-none bg-lime-100 divide-y divide-lime-400 rounded-lg shadow dark:bg-indigo-300 dark:divide-indigo-300"
              id="user-dropdown"
            >
              <ul className="py-2" aria-labelledby="user-menu-button">
                {isLogin ? (
                  <div>
                    <li>
                      <p>
                        <button
                          type="button"
                          className="block px-4 py-2 text-sm text-green-700 font-medium hover:bg-lime-300 dark:text-pink-500  dark:font-medium dark:hover:bg-indigo-400  dark:hover:text-pink-700"
                          onClick={handleLogout}
                        >
                          Log out
                        </button>
                      </p>
                    </li>
                  </div>
                ) : (
                  <div>
                    <li>
                      <Link to="/login">
                        <button
                          type="button"
                          className="block px-6 py-2 text-sm text-green-700 font-medium hover:bg-lime-300 dark:text-pink-500 dark:font-medium dark:hover:bg-indigo-400 dark:hover:text-pink-700"
                        >
                          Login
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/register">
                        <button
                          type="button"
                          className="block px-4 py-2 text-sm text-green-700 font-medium hover:bg-lime-300 dark:text-pink-500  dark:font-medium dark:hover:bg-indigo-400  dark:hover:text-pink-700"
                        >
                          Register
                        </button>
                      </Link>
                    </li>
                  </div>
                )}
              </ul>
            </div>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-lime-100 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-emerald-700 rounded-lg bg-emerald-700 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-emerald-700 dark:bg-indigo-800 md:dark:bg-indigo-800 dark:border-indigo-800">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-lime-100 rounded md:bg-transparent md:text-lime-300 md:p-0 md:dark:text-pink-400"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-lime-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-300 md:p-0 dark:text-white md:dark:hover:text-pink-400 dark:hover:bg-pink-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-pink-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-lime-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-300 md:p-0 dark:text-white md:dark:hover:text-pink-400 dark:hover:bg-pink-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-pink-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-lime-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-300 md:p-0 dark:text-white md:dark:hover:text-pink-400 dark:hover:bg-pink-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-lime-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-300 md:p-0 dark:text-white md:dark:hover:text-pink-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navibar;
