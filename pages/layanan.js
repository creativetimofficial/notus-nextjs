/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Layanan() {
    return (
        <>
            <IndexNavbar fixed/>
                            {/*section 2*/}
                            <div className="justify-center flex flex-wrap items-center pt-20 pb-20 bg-blueGray-100">
                    <div className="bg-blueGray-100 justify-center flex flex-wrap items-center pt-20">
                        <div className="w-full md:w-8/12 lg:w-8/12 px-4 items-center">
                            <div
                                className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i className="fas fa-teeth text-xl"></i>
                            </div>
                            <h3 className="text-5xl mb-2 font-semibold leading-normal">
                                Lebih dari 9 Layanan Pemeriksaan Gigi
                            </h3>
                            <p className="text-2xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                MD Dental Care menyediakan lebih dari 9 layanan konsultasi gigi, mulai dari konsultasi
                                gigi,
                                perawatan ortodontik (kawat gigi), hingga pemeriksaan rontgen gigi.
                            </p>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                9 Layanan tersebut adalah sebagai berikut:
                            </p>
                            <div className="block pb-6">
                <span
                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                  Konsultasi Gigi
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                  Perawatan Jaringan Lunak
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                  Perawatan Penyakit Mulut
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                  Perawatan Gigi Anak
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                  Perawatan Bedah Mulut
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                  Perawatan Ortodontik
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                  Perawatan Gigi Tiruan
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                  Perawatan Konservasi
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                  Pemeriksaan Rontgen Gigi
                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="justify-center flex flex-wrap items-center pb-20 bg-blueGray-100">
                <div className="w-full md:w-8/12 px-4">
                            <div className="justify-center flex flex-wrap relative">
                                <div className="my-4 w-full lg:w-4/12 px-4">
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4">
                                            <button>
                                            <img
                                                alt="..."
                                                className="rounded-lg w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/konsultasi-Gigi.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Konsultasi Gigi
                                            </p>
                                            </button>
                                        </div>
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                                            <button>
                                            <img
                                                alt="..."
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-jaringan-lunak.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Jaringan Lunak
                                            </p>
                                            </button>
                                        </div>
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                                            <button>
                                            <img
                                                alt="..."
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-penyakit-mulut.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Penyakit Mulut
                                            </p>
                                            </button>
                                        </div>
                                </div>

                                <div className="my-4 w-full lg:w-4/12 px-4 lg:mt-16">
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4">
                                            <button>
                                            <img
                                                alt="..."
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-gigi-anak.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Gigi Anak
                                            </p>
                                            </button>
                                        </div>
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                                            <button>
                                            <img
                                                alt="..."
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-bedah-mulut.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Bedah Mulut
                                            </p>
                                            </button>
                                        </div>
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                                            <button>
                                            <img
                                                alt="..."
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-ortodontik.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Ortodontik
                                            </p>
                                            </button>
                                        </div>
                                </div>

                                <div className="my-4 w-full lg:w-4/12 px-4">
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4">
                                            <button>
                                            <img
                                                alt="..."
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-gigi-tiruan.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Gigi Tiruan
                                            </p>
                                            </button>
                                        </div>
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                                            <button>
                                            <img
                                                alt="..."
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-konservasi.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Konservasi
                                            </p>
                                            </button>
                                        </div>
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                                            <button>
                                            <img
                                                alt="..."
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/pemeriksaan-rontgen-gigi.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Pemeriksaan Rontgen Gigi
                                            </p>
                                            </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                </div>
            <Footer/>
        </>
    );
}
