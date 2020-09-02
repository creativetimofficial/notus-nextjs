import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

export default function Auth({ children }) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png") + ")",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
