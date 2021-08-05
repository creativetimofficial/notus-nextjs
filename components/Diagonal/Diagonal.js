import React from "react";

export default function Diagonal({ color }) {
    return (
        <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
                    className={`${color} fill-current`}
                    points="2560 0 2560 100 0 100"
                ></polygon>
            </svg>
        </div>
    );
}