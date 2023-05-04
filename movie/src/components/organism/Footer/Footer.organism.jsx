import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../../../styles/global.css";

function Footer() {
  return (
    <footer className="bg-emerald-700 dark:bg-indigo-800" id="footer">
      <div className="container">
        <div className="grid grid-cols-5 gap-4 pt-5 ps-16" id="socmed">
          <div
            className="col-span-1 justify-items-center font-medium text-lime-100 dark:text-white"
            id="brands"
          >
            <h1>MLB</h1>
          </div>

          <div
            className="col-span-1 text-lime-100 dark:text-white "
            id="navbar-footer"
          >
            <h4 className="font-bold mb-3 text-xl ">Section</h4>
            <a
              href="#home"
              className="inline font-semibold hover:text-lime-300 dark:hover:text-pink-400"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-semibold py-2 hover:text-lime-300 dark:hover:text-pink-400"
            >
              About
            </a>
            <a
              href="#projects"
              className="font-semibold hover:text-lime-300 dark:hover:text-pink-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="font-semibold py-2 hover:text-lime-300 dark:hover:text-pink-400"
            >
              Contact
            </a>
          </div>

          <div className="col-span-1 text-lime-100 dark:text-white">
            <h4 className="font-bold mb-3 text-xl">Address</h4>
            <p className="font-semibold">KS Tubun 3 18</p>
            <p className="font-semibold">Jakarta Barat, 11410</p>
            <p className="font-semibold">Indonesia</p>
          </div>

          <div className="col-span-2 text-lime-100 dark:text-white">
            <h4 className="font-bold mb-3 text-lg">
              Subscribe to our newsletter
            </h4>
            <p className="font-semibold pb-3">
              Monthly digest of whats new and exciting from us
            </p>

            <div className="flex">
              <div className="relative me-3">
                <div className="absolute pt-3 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-green-700 dark:text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-lime-100 font-medium border placeholder-opacity-50 border-lime-300 placeholder-green-700  text-green-700 text-sm pe-24 rounded-lg focus:ring-emerald-700 focus:border-emerald-700 block w-full pl-10 p-2.5  dark:bg-indigo-300 dark:border-pink-500 dark:placeholder-pink-700 dark:placeholder-opacity-50 dark:text-pink-500 dark:focus:ring-pink-500 dark:focus:border-pink-500 "
                  placeholder="youremail@email.com"
                />
              </div>
              <button
                type="button"
                className="text-lime-100 hover:text-lime-100 border border-lime-300 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-pink-500 dark:text-pink-200 dark:hover:text-white dark:hover:bg-pink-500 dark:focus:ring-rose-400"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-md-1" />
        </div>

        <hr />
      </div>
      <div className="flex justify-between px-5 py-3 text-lime-100 dark:text-white">
        <p>
          © Copyright <span className="font-bold">MovieLibra</span>. All Rights
          Reserved
        </p>
        <ul className="list-unstyled flex gap-3">
          <li>
            <button
              type="button"
              onClick="window.location.href='https://www.instagram.com/achmad.hfzd/'"
              className="icon-link hover:text-emerald-400 dark:hover:text-pink-400"
            >
              <FontAwesomeIcon icon={faInstagram} beatFade size="2x" />
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick="window.location.href='https://www.facebook.com/alterra.academy'"
              className="icon-link hover:text-emerald-400 dark:hover:text-pink-400"
            >
              <FontAwesomeIcon icon={faFacebook} beatFade size="2x" />
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick="window.location.href='https://twitter.com/KampusMerdeka'"
              className="icon-link hover:text-emerald-400 dark:hover:text-pink-400"
            >
              <FontAwesomeIcon icon={faTwitter} beatFade size="2x" />
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick="window.location.href='https://www.linkedin.com/school/alterraacademy/mycompany/'"
              className="icon-link hover:text-emerald-400 dark:hover:text-pink-400"
            >
              <FontAwesomeIcon icon={faLinkedin} beatFade size="2x" />
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick="window.location.href='https://github.com/achmadhafizd'"
              className="icon-link hover:text-emerald-400 dark:hover:text-pink-400"
            >
              <FontAwesomeIcon icon={faGithubAlt} beatFade size="2x" />
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
