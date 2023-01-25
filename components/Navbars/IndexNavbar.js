import React from "react";
import Link from "next/link";
import {konsultasiMain} from "../../pages/whatsapp.pages";
// components

export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav
                className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <div className="w-32 px-4">
                            <img src="/img/assets/logo_md_dental_purple.png" alt="..."
                                 className="leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"/>
                        </div>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen ? " block" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <li className="flex items-center">
                                <a
                                    className="hover:text-purple-main text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="https://www.instagram.com/md_dental_care/" target="_blank"
                                >
                                    <i className="text-blueGray-400 fab fa-instagram text-lg leading-lg mr-2"/>{" "}
                                    Instagram
                                </a>
                            </li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {/*Jangan dihapus dulu :)*/}
                            {/*<li className="flex items-center">*/}
                            {/*    <IndexDropdown/>*/}
                            {/*</li>*/}
                            {/*Beranda*/}
                            <li className="flex items-center">
                                <Link href="/">
                                    <a
                                        className="hover:text-purple-main text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    >
                                        <i className="text-blueGray-400 fas fa-home text-lg leading-lg mr-2"/>{" "}
                                        Beranda
                                    </a>
                                </Link>
                            </li>

                            {/*Servis*/}
                            <li className="flex items-center">
                                <Link href="/layanan">
                                    <a
                                        className="hover:text-purple-main text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    >
                                        <i className="text-blueGray-400 fas fa-teeth text-lg leading-lg mr-2"/>{" "}
                                        Layanan
                                    </a>
                                </Link>
                            </li>
                            {/*Dokter*/}
                            <li className="flex items-center">
                                <Link href="/dokter">
                                    <a
                                        className="hover:text-purple-main text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    >
                                        <i className="text-blueGray-400 fas fa-user-md text-lg leading-lg mr-2"/>{" "}
                                        Dokter
                                    </a>
                                </Link>
                            </li>
                            {/*Tertimonial*/}
                            <li className="flex items-center">
                                <Link href="/testimonial">
                                    <a
                                        className="hover:text-purple-main text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    >
                                        <i className="text-blueGray-400 fas fa-comment-medical text-lg leading-lg mr-2"/>{" "}
                                        Testimonial
                                    </a>
                                </Link>
                            </li>
                            {/*Tentang Kami*/}
                            <li className="flex items-center">
                                <Link href="/tentang-kami">
                                    <a
                                        className="hover:text-purple-main text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    >
                                        <i className="text-blueGray-400 fas fa-info-circle text-lg leading-lg mr-2"/>{" "}
                                        Tentang Kami
                                    </a>
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link href={konsultasiMain}>
                                    <button
                                        className="bg-purple-main text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"

                                        type="button"
                                    >
                                        <i
                                            className="fab fa-whatsapp"></i> Konsultasi
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
