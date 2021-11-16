import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-blueGray-800"
            : "relative") + " pb-6"
        }
      >
        <div className="container px-4 mx-auto">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 md:w-4/12">
              <div className="py-1 text-sm font-semibold text-center text-blueGray-500 md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer-small"
                  className="py-1 text-sm font-semibold text-white hover:text-blueGray-300"
                >
                  Tinker Labs
                </a>
              </div>
            </div>
            <div className="w-full px-4 md:w-8/12">
              <ul className="flex flex-wrap justify-center list-none md:justify-end">
                <li>
                  <a
                    href=""
                    className="block px-3 py-1 text-sm font-semibold text-white hover:text-blueGray-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block px-3 py-1 text-sm font-semibold text-white hover:text-blueGray-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/always-tinkering/tinkerlabsl3c/blob/main/LICENSE.md"
                    className="block px-3 py-1 text-sm font-semibold text-white hover:text-blueGray-300"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
