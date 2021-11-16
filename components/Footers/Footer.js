import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative pt-8 pb-6 bg-blueGray-200">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20 overflow-hidden pointer-events-none"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-current text-blueGray-200"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="mt-0 mb-2 text-lg text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 mb-6 lg:mb-0">
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-400 align-center focus:outline-none"
                  type="button"
                  href="https://twitter.com/tinker_labs_"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-600 align-center focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-blueGray-800 align-center focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full px-4 ml-auto lg:w-4/12">
                  <span className="block mb-2 text-sm font-semibold uppercase text-blueGray-500">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    {/* <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="https://www.creative-tim.com/presentation?ref=nnjs-footer"
                      >
                        About Us
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="https://blog.creative-tim.com?ref=nnjs-footer"
                      >
                        Blog
                      </a>
                    </li> */}
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="https://github.com/always-tinkering"
                      >
                        Github
                      </a>
                    </li>
                   
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="block mb-2 text-sm font-semibold uppercase text-blueGray-500">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="https://github.com/always-tinkering/tinkerlabsl3c/blob/main/LICENSE.md"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href=""
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href=""
                      >
                        Privacy Policy
                      </a>
                    </li>
                    {/* <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="https://creative-tim.com/contact-us?ref=nnjs-footer"
                      >
                        Contact Us
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-blueGray-500">
                Copyright © {new Date().getFullYear()} {" "}
                
                  Tinker Labs L3C
                
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
