import React from "react";
import Link from "next/link";
// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 navbar-expand-lg">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="inline-block py-2 mr-4 text-lg font-bold leading-relaxed text-white uppercase whitespace-nowrap"
                
              >
                TL
              </a>
            </Link>
            <button
              className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="flex items-center">
                <PagesDropdown />
              </li>
              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 lg:py-2"
                  href="https://www.linkedin.com/company/tinker-labs-l3c/"
                  target="_blank"
                >
                  <i className="text-lg lg:text-blueGray-200 text-blueGray-400 fab fa-linkedin leading-lg " />
                  <span className="inline-block ml-2 lg:hidden">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 lg:py-2"
                  href="https://twitter.com/tinker_labs_"
                  target="_blank"
                >
                  <i className="text-lg lg:text-blueGray-200 text-blueGray-400 fab fa-twitter leading-lg " />
                  <span className="inline-block ml-2 lg:hidden">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 lg:py-2"
                  href="https://github.com/always-tinkering"
                  target="_blank"
                >
                  <i className="text-lg lg:text-blueGray-200 text-blueGray-400 fab fa-github leading-lg " />
                  <span className="inline-block ml-2 lg:hidden">Star</span>
                </a>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
