import React from "react";

// components

import MapExample from "components/Maps/MapExample.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Maps() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <MapExample
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
              loadingElement={<div className="h-full" />}
              containerElement={
                <div
                  style={{ height: "600px" }}
                  className="relative w-full rounded"
                />
              }
              mapElement={
                <div className="rounded" className="h-full" />
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

Maps.layout = Admin;
