/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Dokter() {
    return (
        <>
            <IndexNavbar fixed/>
                            <div className="container mx-auto">
                    <div className="flex flex-wrap items-center pt-20">
                        <div className="w-full md:w-12/12 lg:w-12/12 px-12 items-center">
                        <div
                                className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i className="fas fa-user-md text-xl"></i>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                Bekerja Sama dengan 4 Dokter Profesional
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                MD Dental Care telah beroperasi selama lebih dari 11 tahun dengan bekerja sama dengan 4
                                Dokter Gigi Profesional.
                            </p>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                4 Dokter tersebut adalah sebagai berikut:
                            </p>
                            <div className="block pb-6">
                <span
                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                  Drg. Mita Derayanti
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                  Drg. M Ihsan Pramadya
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                  Drg. Ikrimah
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                  Drg. Elia Roza
                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="justify-center flex flex-wrap items-center pt-20 pb-20">
                    
                <div className="my-4 w-full lg:w-4/12 px-4">
                                        <div className="bg-white shadow-lg rounded-full-bot text-center p-4">
                                            <button>
                                            <img
                                                alt="..."
                                                className="rounded-full w-full mx-auto p-1 bg-white"
                                                src="/img/assets/img_dummy.png"
                                            />
                                            <p className="text-lg text-purple-main mt-2 mb-4 font-semibold">
                                                Drg. Mita Derayanti
                                            </p>
                                            </button>
                                        </div>
                                        <div className="bg-white shadow-lg rounded-full-top text-center p-4 mt-8">
                                            <button>
                                            <img
                                                alt="..."
                                                className="rounded-full w-full mx-auto p-1 bg-white"
                                                src="/img/assets/img_dummy.png"
                                            />
                                            <p className="text-lg text-purple-main mt-2 mb-4 font-semibold">
                                                Drg. Ikrimah
                                            </p>
                                            </button>
                                        </div>
                                </div>

                                <div className="my-4 w-full lg:w-4/12 px-4 lg:mt-16">
                                        <div className="bg-white shadow-lg rounded-full-bot text-center p-4 mt-8">
                                            <button>
                                            <img
                                                alt="..."
                                                className="rounded-full w-full mx-auto p-1 bg-white"
                                                src="/img/assets/img_dummy.png"
                                            />
                                            <p className="text-lg text-purple-main mt-2 mb-4 font-semibold">
                                                Drg. M Ihsan Pramadya
                                            </p>
                                            </button>
                                        </div>
                                        <div className="bg-white shadow-lg rounded-full-top text-center p-4 mt-8">
                                            <button>
                                            <img
                                                alt="..."
                                                className="rounded-full w-full mx-auto p-1 bg-white"
                                                src="/img/assets/img_dummy.png"
                                            />
                                            <p className="text-lg text-purple-main mt-2 mb-4 font-semibold">
                                                Drg. Elia Roza
                                            </p>
                                            </button>
                                        </div>
                                </div>
                            
                </div>
            <Footer/>
        </>
    );
}
