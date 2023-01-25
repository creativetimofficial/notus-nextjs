/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect} from "react";
import Link from "next/link";
import AOS from 'aos'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Head from "next/head";
import {
    konsultasiGigi,
    konsultasiMain,
    perawatanBedahMulut,
    perawatanKonservasi,
    perawatanOrtodontik,
    perawatanPedodonti,
    perawatanPenyakitMulut,
    perawatanPeridonti,
    perawatanProsthodonti
} from "./whatsapp";

export default function Index() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Head>
                <title>Beranda | MD Dental Care</title>
            </Head>
            <IndexNavbar fixed/>
            {/*section 0*/}
            <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-bold text-5xl text-purple-main">
                                MD Dental Care
                            </h2>
                            <h2 className="font-semibold text-4xl text-red-200">
                                Klinik Dokter Gigi Terbaik di Tangerang.
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-purple-400">
                                MD Dental Care adalah Klinik Dokter Gigi profesional di Tangerang yang sudah
                                berpengalaman lebih
                                dari{" "}
                                <a
                                    href="https://www.instagram.com/md_dental_care/"
                                    className="font-bold text-purple-main"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    11 Tahun,{" "}
                                </a>
                                Kepuasan pelanggan adalah tujuan kami.
                            </p>
                            <div className="mt-10">
                                <a
                                    href={konsultasiMain}
                                    target="_blank"
                                    className="ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-purple-main active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                                >
                                    Buat Konsultasi
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
                    src="/img/assets/grafik.png"
                    alt="..."
                />
            </section>

            {/*section 1*/}
            <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
                            className="text-blueGray-100 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-24">
                            <div
                                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white"
                                data-aos="fade-right">
                                <img
                                    alt="..."
                                    src="/img/assets/img_main.png"
                                    className="w-full align-middle rounded-t-lg"
                                />
                                <blockquote className="relative p-8 mb-4">
                                    <svg
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95"
                                        className="absolute left-0 w-full block h-95-px -top-94-px"
                                    >
                                        <polygon
                                            points="-30,95 583,95 583,65"
                                            className="text-white fill-current"
                                        ></polygon>
                                    </svg>
                                    <h4 className="text-2xl font-bold text-purple-main">
                                        Telah Berpengalaman Lebih dari 16 Tahun.
                                    </h4>
                                    <p className="text-md font-light mt-2">
                                        MD Dental Care adalah sebuah klinik Dokter Gigi terpercaya menyediakan lebih
                                        dari 9 layanan gigi, yang telah bekerjasama dengan 4 dokter profesional selama
                                        11 tahun terakhir.
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4 mb-24" data-aos="fade-left">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col">
                                        <div className="px-4 py-5 flex-auto">
                                            <div
                                                className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i className="fas fa-teeth"></i>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                9 Layanan Gigi
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                MD Dental Care menyediakan lebih dari 9 layanan konsultasi gigi.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div
                                                className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i className="fas fa-comment-medical"></i>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Pelayanan Terbaik
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                MD Dental Care akan memberikan pelayanan terbaik dan termurah
                                                dikelasnya.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div
                                                className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i className="fas fa-user-md"></i>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">4 Dokter Berpengalaman</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                MD Dental Care telah bekerja sama dengan 4 Dokter yang telah
                                                berpengalaman.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div
                                                className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i className="fab fa-whatsapp"></i>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Konsultasi WhatsApp
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                MD Dental Care menyediakan konsultasi online melalui WhatsApp.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*section 2*/}
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center pt-16">
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-12"
                             data-aos="fade-right">
                            <div
                                className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i className="fas fa-teeth text-xl"></i>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                Lebih dari 9 Layanan Pemeriksaan Gigi
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                MD Dental Care menyediakan lebih dari 9 layanan konsultasi gigi, mulai dari konsultasi
                                gigi,
                                perawatan Ortodontik (Kawat Gigi), hingga pemeriksaan rontgen gigi.
                            </p>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                9 Layanan tersebut adalah sebagai berikut:
                            </p>
                            <div className="block pb-6">
                <span
                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Konsultasi Gigi
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Perawatan Periodonti / Jaringan Lunak
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Perawatan Penyakit Mulut
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Perawatan Pedodonti / Gigi Anak
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Perawatan Bedah Mulut / Pencabutan
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Perawatan Ortodontik / Kawat Gigi
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Perawatan Prosthodonti / Gigi Tiruan
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Perawatan Konservasi / Penambalan dan Perawatan Syaraf Gigi
                </span>
                            </div>
                            <Link href="/layanan">
                                <a className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150">
                                    Lihat Lebih{" "}
                                    <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                                </a>
                            </Link>
                        </div>

                        <div className="w-full md:w-6/12 px-4" data-aos="fade-left">
                            <div className="justify-center flex flex-wrap relative">
                                <div className="my-4 w-full lg:w-4/12 px-4">
                                    <a
                                        href={konsultasiGigi}
                                        target="_blank"
                                    >
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4">
                                            <img
                                                alt='Konsultasi Gigi'
                                                className="rounded-lg w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/konsultasi-Gigi.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Konsultasi Gigi
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href={perawatanPeridonti}
                                        target="_blank"
                                    >
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                                            <img
                                                alt='Perawatan Periodonti / Jaringan Lunak'
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-jaringan-lunak.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Periodonti / Jaringan Lunak
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href={perawatanPenyakitMulut}
                                        target="_blank"
                                    >
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                                            <img
                                                alt='Perawatan Penyakit Mulut'
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-penyakit-mulut.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Penyakit Mulut
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="my-4 w-full lg:w-4/12 px-4">
                                    <a
                                        href={perawatanPedodonti}
                                        target="_blank"
                                    >
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4">
                                            <img
                                                alt='Perawatan Pedodonti / Gigi Anak'
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-gigi-anak.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Pedodonti / Gigi Anak
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href={perawatanBedahMulut}
                                        target="_blank"
                                    >
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                                            <img
                                                alt='Perawatan Bedah Mulut / Pencabutan'
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-bedah-mulut.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Bedah Mulut / Pencabutan
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href={perawatanOrtodontik}
                                        target="_blank"
                                    >
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                                            <img
                                                alt='Perawatan Ortodontik / Kawat Gigi'
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-ortodontik.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Ortodontik / Kawat Gigi
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="my-4 w-full lg:w-4/12 px-4">
                                    <a
                                        href={perawatanProsthodonti}
                                        target="_blank"
                                    >
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4">
                                            <img
                                                alt='Perawatan Prosthodonti / Gigi Tiruan'
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-gigi-tiruan.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Prosthodonti / Gigi Tiruan
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href={perawatanKonservasi}
                                        target="_blank"
                                    >
                                        <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                                            <img
                                                alt='Perawatan Konservasi / Penambalan dan Perawatan Syaraf Gigi'
                                                className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                                                src="/img/menus/perawatan-konservasi.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-4 font-semibold">
                                                Perawatan Konservasi / Penambalan dan Perawatan Syaraf Gigi
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*section 3*/}
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center pt-16">

                        <div className="w-full md:w-6/12 px-4" data-aos="fade-right">
                            <div className="justify-center flex flex-wrap relative">
                                <div className="my-4 w-full lg:w-4/12 px-4">
                                    <a
                                        href="/dokter"
                                        target="_blank"
                                    >
                                        <div className="bg-white shadow-lg rounded-full-bot text-center p-4">
                                            <img
                                                alt="..."
                                                className="rounded-full w-full mx-auto p-1 bg-white"
                                                src="/img/assets/drg_mita_derayanti.png"
                                            />
                                            <p className="text-lg text-purple-main mt-2 mb-4 font-semibold">
                                                Drg. Mita Derayanti
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href="/dokter"
                                        target="_blank"
                                    >
                                        <div className="bg-white shadow-lg rounded-full-top text-center p-4 mt-8">
                                            <img
                                                alt="..."
                                                className="rounded-full w-full mx-auto p-1 bg-white"
                                                src="/img/assets/drg_ikrimah.png"
                                            />
                                            <p className="text-lg text-purple-main mt-2 mb-4 font-semibold">
                                                Drg. Ikrimah
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="my-4 w-full lg:w-4/12 px-4 lg:mt-16">
                                    <a
                                        href="/dokter"
                                        target="_blank"
                                    >
                                        <div className="bg-white shadow-lg rounded-full-bot text-center p-4 mt-8">
                                            <img
                                                alt="..."
                                                className="rounded-full w-full mx-auto p-1 bg-white"
                                                src="/img/assets/drg_ihsan.jpg"
                                            />
                                            <p className="text-lg text-purple-main mt-2 mb-4 font-semibold">
                                                Drg. M Ihsan Pramadya
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href="/dokter"
                                        target="_blank"
                                    >
                                        <div className="bg-white shadow-lg rounded-full-top text-center p-4 mt-8">
                                            <img
                                                alt="..."
                                                className="rounded-full w-full mx-auto p-1 bg-white"
                                                src="/img/assets/drg_elia_roza.png"
                                            />
                                            <p className="text-lg text-purple-main mt-2 mb-4 font-semibold">
                                                Drg. Elia Roza
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto" data-aos="fade-left">
                            <div
                                className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i className="fas fa-user-md text-xl"></i>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                Bekerja Sama dengan 4 Dokter Profesional
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                MD Dental Care telah beroperasi selama Lebih dari 16 Tahun dengan bekerja sama dengan 4
                                Dokter Gigi Profesional.
                            </p>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                4 Dokter tersebut adalah sebagai berikut:
                            </p>
                            <div className="block pb-6">
                <span
                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Drg. Mita Derayanti
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Drg. M Ihsan Pramadya
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Drg. Ikrimah
                </span>
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Drg. Elia Roza
                </span>
                            </div>
                            <Link href="/dokter">
                                <a className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150">
                                    Lihat Lebih{" "}
                                    <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                {/*section 3*/}
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center pt-48">
                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0" data-aos="fade-right">
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

                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4" data-aos="fade-left">
                            <div className="md:pr-12">
                                <div
                                    className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-comment-medical text-xl"></i>
                                </div>
                                <h3 className="text-3xl font-semibold">
                                    Testimonial Pelayanan Terbaik
                                </h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    MD Dental Care memberikan pelayanan terbaik dengan harga termurah, dengan
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
                                                <h4 className="text-blueGray-500">
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
                                                <h4 className="text-blueGray-500">
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
                                                <h4 className="text-blueGray-500">
                                                    Tempat Parkir Luas
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <Link href="/testimonial">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150">
                                    Lihat Lebih{" "}
                                    <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                {/*section 4*/}
                <div className="justify-center text-center flex flex-wrap mt-48" data-aos="fade-up">
                    <div className="w-full md:w-6/12 px-12 md:px-4">
                        <h2 className="font-semibold text-4xl">Beberapa Foto dari MD Dental Care</h2>
                        <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                            Berikut Beberapa Foto dari MD Dental Care MD Dental Care yang terletak di Jl. Kav.
                            Perkebunan Raya No.174B, Bencongan Indah, Kec. Klp. Dua, Kabupaten Tangerang, Banten.
                        </p>
                    </div>
                </div>

                <section className="block relative z-1 mt-24" data-aos="fade-up">
                    <div className="container mx-auto">
                        <div className="justify-center flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4  -mt-24">
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-4/12 px-4">
                                        <h5 className="text-xl font-semibold pb-4 text-center">
                                            Pintu Masuk
                                        </h5>
                                        {/*<Link href="/auth/login">*/}
                                        <div
                                            className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src="/img/photos/pic_1.png"
                                            />
                                        </div>
                                        {/*</Link>*/}
                                    </div>

                                    <div className="w-full lg:w-4/12 px-4">
                                        <h5 className="text-xl font-semibold pb-4 text-center">
                                            Ruang Depan
                                        </h5>
                                        {/*<Link href="/profile">*/}
                                        <div
                                            className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src="/img/photos/pic_2.png"
                                            />
                                        </div>
                                        {/*</Link>*/}
                                    </div>

                                    <div className="w-full lg:w-4/12 px-4">
                                        <h5 className="text-xl font-semibold pb-4 text-center">
                                            Ruang Tunggu
                                        </h5>
                                        {/*<Link href="/landing">*/}
                                        <div
                                            className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src="/img/photos/pic_3.png"
                                            />
                                        </div>
                                        {/*</Link>*/}
                                    </div>
                                </div>

                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-4/12 px-4">
                                        <h5 className="text-xl font-semibold pb-4 text-center">
                                            Peralatan Praktik
                                        </h5>
                                        {/*<Link href="/auth/login">*/}
                                        <div
                                            className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src="/img/photos/pic_4.png"
                                            />
                                        </div>
                                        {/*</Link>*/}
                                    </div>

                                    <div className="w-full lg:w-4/12 px-4">
                                        <h5 className="text-xl font-semibold pb-4 text-center">
                                            Ruang Praktik
                                        </h5>
                                        {/*<Link href="/profile">*/}
                                        <div
                                            className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src="/img/photos/pic_5.png"
                                            />
                                        </div>
                                        {/*</Link>*/}
                                    </div>

                                    <div className="w-full lg:w-4/12 px-4">
                                        <h5 className="text-xl font-semibold pb-4 text-center">
                                            Rak Peralatan
                                        </h5>
                                        {/*<Link href="/landing">*/}
                                        <div
                                            className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src="/img/photos/pic_6.png"
                                            />
                                        </div>
                                        {/*</Link>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="overflow-hidden">
                    <div className=" container mx-auto pb-48">
                        <div className=" flex flex-wrap justify-center">
                            <div className=" w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-40">
                                <div
                                    className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-calendar-alt text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal text-blueGray-500">
                                    Jadwalkan Kunjungan
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-500">
                                    Kamu dapat membuat jadwal untuk kunjungan di{" "}
                                    <a
                                        href="https://tailwindcss.com/?ref=creative"
                                        className="text-blueGray-600"
                                        target="_blank"
                                    >
                                        MD Dental Care
                                    </a>{" "}
                                    dengan mengisi form nama, tanggal, dan keluhan dibawah ini.
                                </p>
                                <div className="nama mb-3 pt-0">
                                    <input type="text" placeholder="Masukan nama (contoh : mita)"
                                           className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
                                </div>
                                <div className="mb-3 pt-0">
                                    <input type="text" placeholder="Masukan tanggal (contoh : 01/01/2023)"
                                           className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
                                </div>
                                <div className="mb-3 pt-0">
                                    <input type="text" placeholder="Masukan keluhan (contoh : gigi bolong)"
                                           className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
                                </div>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-2 text-blueGray-500">
                                    Pastikan informasi yang dimasukan sudah benar, lalu klik tombol dibawah ini ya...
                                </p>
                                <a
                                    href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                                    target="_blank"
                                    className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-purple-main active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                                >
                                    Buat Konsultasi
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto mt-48">
                    <div
                        className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative">
                        <div className="w-full text-center lg:w-8/12">
                            <p className="text-4xl text-center">
                            </p>
                            <h3 className="font-semibold text-3xl">
                                Alamat Klinik MD Dental Care
                            </h3>
                            <p className="text-blueGray-500 text-lg leading-relaxed mt-4">
                                Klinik MD Dental Care terletak di Jl. Kav. Perkebunan Raya No.174B, Bencongan Indah,
                                Kec. Klp. Dua, Kabupaten Tangerang, Banten.
                            </p>
                            <div className="text-center mt-16"></div>
                        </div>
                        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                        <iframe className="relative w-full px-12 h-350-px -mt-12"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.334218923034!2d106.60991729999999!3d-6.219583399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffbd37d05bed%3A0xb7fd377c431ab923!2sKlinik%20MY%20DENTIST!5e0!3m2!1sen!2sid!4v1674281388400!5m2!1sen!2sid"
                                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>

            <section className="pb-16 relative">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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


            </section>
            <Footer/>
        </>
    );
}
