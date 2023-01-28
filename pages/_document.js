import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/img/brand/favicon.ico" />
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/img/brand/md-dental-icon.png"
          />
          <link rel="icon" href="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945659/MD%20Dental%20Care/assets/logo_md_dental_purple_exyzsx.png" />
        </Head>
        <body className="text-blueGray-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
