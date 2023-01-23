import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="relative bg-white pt-8 pb-6">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style={{transform: "translateZ(0)"}}
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
                            className="text-white fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold">Hubungi kami di Media Sosial!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Dapatkan informasi potongan harga, serta promo lainnya pada beberapa media sosial kami
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button
                                    className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <a href="https://www.instagram.com/md_dental_care/?hl=id" target="_blank"
                                       className="fab fa-instagram"></a>
                                </button>
                                <button
                                    className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <a href="https://wa.me/6285774085380" target="_blank"
                                       className="fab fa-whatsapp"></a>
                                </button>
                                <button
                                    className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <a href="https://goo.gl/maps/PjfLscoJpjk4eUKp7" target="_blank"
                                       className="fas fa-map-marker-alt"></a>
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Halaman Website
                  </span>
                                    <ul className="list-unstyled">
                                        <li>
                                        <Link href="/layanan">
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            >
                                                Layanan
                                            </a>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link href="/dokter">
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            >
                                                Dokter
                                            </a>
                                            </Link>
                                        </li>
                                        <li>
                                        <Link href="/testimonial">
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://www.github.com/creativetimofficial?ref=nnjs-footer"
                                            >
                                                Testimonial
                                            </a>
                                            </Link>
                                        </li>
                                        <li>
                                        <Link href="/tentang-kami">
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://www.creative-tim.com/bootstrap-themes/free?ref=nnjs-footer"
                                            >
                                                Tentang Kami
                                            </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300"/>
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Developed in 2023
                                {/*<a*/}
                                {/*    href="https://www.creative-tim.com?ref=nnjs-footer"*/}
                                {/*    className="text-blueGray-500 hover:text-blueGray-800"*/}
                                {/*>*/}
                                {/*    Creative Tim*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
