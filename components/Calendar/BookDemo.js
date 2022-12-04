import React from "react";
import { PopupWidget } from "react-calendly";

export default function BookDemo({ fullName, email }) {
  return (
      <PopupWidget 
          url="https://calendly.com/qualifiedl/intro-meeting"
          rootElement={document.getElementById("__next")}
          text="Book a meeting"
          prefill={{
            email: email,
            name: fullName
          }}
      />
  );
};

