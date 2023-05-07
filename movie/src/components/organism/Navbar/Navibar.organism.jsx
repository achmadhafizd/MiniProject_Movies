import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar, Button, DarkThemeToggle, Flowbite } from "flowbite-react";
import { SearchInput } from "../../molecules";
import NavibarOrganismModel from "./Navibar.organismModel";
import LibraLogo from "../../../assets/LibraLogo.png";
import "./Navibar.organims.css";

function Navibar() {
  const organismModel = NavibarOrganismModel();
  return (
    <div className="item-center">
      <nav className="bg-emerald-700 border-gray-200 dark:bg-indigo-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center gap-3">
            <img src={LibraLogo} className="h-12" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-lime-100 hover:text-lime-300 dark:text-white dark:hover:text-pink-400">
              MovieLibra
            </span>
          </a>
          <div className="flex md:order-2 gap-8 justify-center items-center mt-4">
            <SearchInput
              onChange={({ target }) => organismModel.search(target.value)}
            />
            <button
              type="button"
              className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-lime-300 dark:focus:ring-pink-500"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              {organismModel.isLogin ? (
                <Avatar rounded size="md" />
              ) : (
                <div className="flex flex-wrap gap-3">
                  <Link to="/login">
                    <Button className="bg-lime-100 hover:bg-lime-300 dark:bg-pink-400 dark:hover:bg-pink-500">
                      <span className="text-green-700 dark:text-white font-semibold">
                        {" "}
                        Login{" "}
                      </span>
                    </Button>
                  </Link>

                  <Link to="/register">
                    <Button className="bg-lime-100 hover:bg-lime-300 dark:bg-pink-400 dark:hover:bg-pink-500">
                      <span className="text-green-700 dark:text-white font-semibold">
                        Register
                      </span>
                    </Button>
                  </Link>
                </div>
              )}
            </button>

            <Flowbite className="justify-end items-end ">
              <DarkThemeToggle className="light text-lime-300 hover:bg-gray-800 focus:ring-lime-200 dark:text-pink-400 dark:focus:ring-pink-300 dark:hover:text-orange-400 dark:hover:bg-blue-200" />
            </Flowbite>

            <div
              className="z-50 hidden my-4 text-base list-none bg-lime-100 divide-y divide-lime-400 rounded-lg shadow dark:bg-indigo-300 dark:divide-indigo-300"
              id="user-dropdown"
            >
              <ul className="py-2" aria-labelledby="user-menu-button">
                {organismModel.isLogin ? (
                  <div>
                    <li>
                      <p>
                        <button
                          type="button"
                          className="block px-4 py-2 text-sm text-green-700 font-medium hover:bg-lime-300 dark:text-pink-500  dark:font-medium dark:hover:bg-indigo-400  dark:hover:text-pink-700"
                          onClick={organismModel.handleLogout}
                        >
                          Log out
                        </button>
                      </p>
                    </li>
                  </div>
                ) : null}
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
                <NavLink
                  to="/"
                  className="nav-link block py-2 pl-3 pr-4 text-white bg-lime-100 rounded md:bg-transparent hover:text-lime-300 md:p-0 md:dark:text-pink-400"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <button
                  type="button"
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="nav-link flex items-center justify-between  py-2 pl-3 pr-4 text-white bg-lime-100 rounded md:bg-transparent hover:text-lime-300 md:p-0 md:dark:text-pink-400"
                >
                  Genre
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className="z-50 hidden my-4 text-base list-none bg-lime-100 divide-y divide-lime-400 rounded-lg shadow dark:bg-indigo-300 dark:divide-indigo-300"
                >
                  <ul
                    className="grid grid-cols-3 place-items-center py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <NavLink
                        to={`/genre/${28}`}
                        className="block px-4 py-2 text-sm text-green-700 font-medium hover:bg-lime-300 dark:text-pink-500  dark:font-medium dark:hover:bg-indigo-400  dark:hover:text-pink-700"
                      >
                        Action
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to={`/genre/${12}`}
                        className="block px-4 py-2 text-sm text-green-700 font-medium hover:bg-lime-300 dark:text-pink-500  dark:font-medium dark:hover:bg-indigo-400  dark:hover:text-pink-700"
                      >
                        Adventure
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to={`/genre/${16}`}
                        className="block px-4 py-2 text-sm text-green-700 font-medium hover:bg-lime-300 dark:text-pink-500  dark:font-medium dark:hover:bg-indigo-400  dark:hover:text-pink-700"
                      >
                        Animation
                      </NavLink>
                    </li>

                    <NavLink
                      to={`/genre/${35}`}
                      className="block px-4 py-2 text-sm text-green-700 font-medium hover:bg-lime-300 dark:text-pink-500  dark:font-medium dark:hover:bg-indigo-400  dark:hover:text-pink-700"
                    >
                      Comedy
                    </NavLink>

                    <NavLink
                      to={`/genre/${80}`}
                      className="block px-4 py-2 text-sm text-green-700 font-medium hover:bg-lime-300 dark:text-pink-500  dark:font-medium dark:hover:bg-indigo-400  dark:hover:text-pink-700"
                    >
                      Crime
                    </NavLink>

                    <NavLink
                      to={`/genre/${99}`}
                      className="block px-4 py-2 text-sm text-green-700 font-medium hover:bg-lime-300 dark:text-pink-500  dark:font-medium dark:hover:bg-indigo-400  dark:hover:text-pink-700"
                    >
                      Documentary
                    </NavLink>
                    <NavLink
                      to={`/genre/${18}`}
                      className="block px-4 py-2 text-sm text-green-700 font-medium hover:bg-lime-300 dark:text-pink-500  dark:font-medium dark:hover:bg-indigo-400  dark:hover:text-pink-700"
                    >
                      Drama
                    </NavLink>

                    <NavLink
                      to={`/genre/${878}`}
                      className="block px-4 py-2 text-sm text-green-700 font-medium hover:bg-lime-300 dark:text-pink-500  dark:font-medium dark:hover:bg-indigo-400  dark:hover:text-pink-700"
                    >
                      Science Fiction
                    </NavLink>

                    <NavLink
                      to={`/genre/${27}`}
                      className="block px-4 py-2 text-sm text-green-700 font-medium hover:bg-lime-300 dark:text-pink-500  dark:font-medium dark:hover:bg-indigo-400  dark:hover:text-pink-700"
                    >
                      Horror
                    </NavLink>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink
                  to="/upcoming"
                  className="nav-link block py-2 pl-3 pr-4 text-white bg-lime-100 rounded md:bg-transparent hover:text-lime-300 md:p-0 md:dark:text-pink-400"
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navibar;
