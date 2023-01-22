/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Testimonial() {
    return (
        <>
            <IndexNavbar fixed/>
                            <div className="justify-center flex flex-wrap items-center pt-20 pb-20 bg-blueGray-100">
                    <div className="bg-blueGray-100 justify-center flex flex-wrap items-center pt-20">
                        <div className="w-full md:w-8/12 lg:w-8/12 px-4 items-center">
                        <div className="md:pr-12">
                                <div
                                    className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-comment-medical text-xl"></i>
                                </div>
                                <h3 className="text-5xl mb-2 font-semibold leading-normal">
                                    Testimonial Pelayanan Terbaik
                                </h3>
                                <p className="text-2xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    MD Dental Care akan memberikan pelayanan terbaik dengan harga termurah, dengan
                                    serangaian fasilitas pendukung seperti ruangan ber-AC, Tempat parkir luas, dan masih
                                    banyak lagi.
                                </p>
                                <ul className="list-none mt-6">
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                        <span
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-money-check-alt"></i>
                        </span>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-light leading-relaxed text-blueGray-600">
                                                    Harga Termurah di Kelasnya
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                        <span
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-wind"></i>
                        </span>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-light leading-relaxed text-blueGray-600">
                                                    Seluruh Ruangan Ber-AC
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                        <span
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-parking"></i>
                        </span>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-light leading-relaxed text-blueGray-600">
                                                    Tempat Parkir Luas
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="justify-center flex flex-wrap items-center pb-20 bg-blueGray-100">
                <div className="w-full md:w-12/12">
                            <div className="justify-center flex flex-wrap relative -mt-12">
                            <img
                                alt="..."
                                className="max-w-full rounded-lg shadow-xl"
                                style={{
                                    transform:
                                        "scale(1) perspective(1040px)",
                                }}
                                src="/img/assets/pic_1.png"
                            />
                            </div>
                        </div>
                </div>
            <Footer/>
        </>
    );
}
