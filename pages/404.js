import React, { Component } from "react";
import Router from "next/router";

export default class Error404 extends Component {
  componentDidMount = () => {
    Router.push(
      (process.env.NODE_ENV === "production" ? "/tailwind-webapp-nextjs" : "") +
        "/admin/dashboard"
    );
  };

  render() {
    return <div />;
  }
}
