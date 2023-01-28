/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Head from "next/head";
import AOS from "aos";
import { useEffect } from "react";

export default function Layanan() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Layanan | MD Dental Care</title>
      </Head>
      <IndexNavbar fixed />
      {/*section 2*/}
      <div className="justify-center flex flex-wrap items-center pt-20 pb-20 bg-blueGray-100">
        <div className="bg-blueGray-100 justify-center flex flex-wrap items-center pt-20">
          <div
            className="w-full md:w-8/12 lg:w-8/12 px-4 items-center"
            data-aos="fade-up"
          >
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-teeth text-xl"></i>
            </div>
            <h3 className="text-5xl mb-2 font-semibold leading-normal">
              Lebih dari 8 Layanan Pemeriksaan Gigi
            </h3>
            <p className="text-2xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              MD Dental Care menyediakan lebih dari 8 layanan perawatan gigi,
              baik untuk pasien anak maupun dewasa.
            </p>
            <p className="text-xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              8 Layanan tersebut adalah sebagai berikut :
            </p>
            <div className="block pb-6">
              <span className="text-lg font-semibold inline-block py-1 px-4  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                Konsultasi Gigi
              </span>
              <span className="text-lg font-semibold inline-block py-1 px-4  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                Perawatan Periodonti / Jaringan Lunak
              </span>
              <span className="text-lg font-semibold inline-block py-1 px-4  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                Perawatan Penyakit Mulut
              </span>
              <span className="text-lg font-semibold inline-block py-1 px-4  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                Perawatan Pedodonti / Gigi Anak
              </span>
              <span className="text-lg font-semibold inline-block py-1 px-4  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                Perawatan Bedah Mulut / Pencabutan
              </span>
              <span className="text-lg font-semibold inline-block py-1 px-4  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                Perawatan Ortodontik / Kawat Gigi
              </span>
              <span className="text-lg font-semibold inline-block py-1 px-4  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                Perawatan Prosthodonti / Gigi Tiruan
              </span>
              <span className="text-lg font-semibold inline-block py-1 px-4  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                Perawatan Konservasi / Penambalan dan Perawatan Syaraf Gigi
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center flex flex-wrap items-center pb-20 bg-blueGray-100">
        <div className="w-full md:w-8/12" data-aos="fade-up">
          <div className="justify-center flex flex-wrap relative -mt-12">
            <div className="my-4 w-full lg:w-4/12 px-4">
              <a
                href={`https://api.whatsapp.com/send?phone=6285774085380&text=Halo%20admin%20klinik%20gigi%20MD%20Dental%20Care,%20saya%20ingin%20menjadwalkan%20Konsultasi%20Gigi%20dalam%20waktu%20dekat%20ini.%20`}
                target="_blank"
              >
                <div className="bg-white shadow-lg rounded-lg text-center p-4">
                  <button>
                    <img
                      alt="..."
                      className="rounded-lg w-24 mx-auto p-1 bg-white"
                      src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945558/MD%20Dental%20Care/Menus/konsultasi-Gigi_dpfq33.jpg"
                    />
                    <p className="text-xl text-purple-main mt-4 font-semibold">
                      Konsultasi Gigi
                    </p>
                  </button>
                </div>
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=6285774085380&text=Halo%20admin%20klinik%20gigi%20MD%20Dental%20Care,%20saya%20ingin%20menjadwalkan%20Perawatan%20Peridonti%20/%20Jaringan%20Lunak%20dalam%20waktu%20dekat%20ini.%20`}
                target="_blank"
              >
                <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                  <button>
                    <img
                      alt="..."
                      className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                      src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945558/MD%20Dental%20Care/Menus/perawatan-jaringan-lunak_pn0b3i.jpg"
                    />
                    <p className="text-xl text-purple-main mt-4 font-semibold">
                      Perawatan Periodonti / Jaringan Lunak
                    </p>
                  </button>
                </div>
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=6285774085380&text=Halo%20admin%20klinik%20gigi%20MD%20Dental%20Care,%20saya%20ingin%20menjadwalkan%20Perawatan%20Penyakit%20Mulut%20dalam%20waktu%20dekat%20ini.%20`}
                target="_blank"
              >
                <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                  <button>
                    <img
                      alt="..."
                      className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                      src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945558/MD%20Dental%20Care/Menus/perawatan-penyakit-mulut_f5mnrd.jpg"
                    />
                    <p className="text-xl text-purple-main mt-4 font-semibold">
                      Perawatan Penyakit Mulut
                    </p>
                  </button>
                </div>
              </a>
            </div>

            <div className="my-4 w-full lg:w-4/12 px-4">
              <a
                href={`https://api.whatsapp.com/send?phone=6285774085380&text=Halo%20admin%20klinik%20gigi%20MD%20Dental%20Care,%20saya%20ingin%20menjadwalkan%20Perawatan%20Pedodonti%20/%20Gigi%20Anak%20dalam%20waktu%20dekat%20ini.%20`}
                target="_blank"
              >
                <div className="bg-white shadow-lg rounded-lg text-center p-4">
                  <button>
                    <img
                      alt="..."
                      className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                      src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945558/MD%20Dental%20Care/Menus/perawatan-gigi-anak_ui29yc.jpg"
                    />
                    <p className="text-xl text-purple-main mt-4 font-semibold">
                      Perawatan Pedodonti / Gigi Anak
                    </p>
                  </button>
                </div>
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=6285774085380&text=Halo%20admin%20klinik%20gigi%20MD%20Dental%20Care,%20saya%20ingin%20menjadwalkan%20Perawatan%20Bedah%20Mulut%20/%20Pencabutan%20dalam%20waktu%20dekat%20ini.%20`}
                target="_blank"
              >
                <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                  <button>
                    <img
                      alt="..."
                      className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                      src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945558/MD%20Dental%20Care/Menus/perawatan-bedah-mulut_bhqmil.jpg"
                    />
                    <p className="text-xl text-purple-main mt-4 font-semibold">
                      Perawatan Bedah Mulut / Pencabutan
                    </p>
                  </button>
                </div>
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=6285774085380&text=Halo%20admin%20klinik%20gigi%20MD%20Dental%20Care,%20saya%20ingin%20menjadwalkan%20Perawatan%20Ortodontik%20%20/%20Kawat%20Gigi%20dalam%20waktu%20dekat%20ini.%20`}
                target="_blank"
              >
                <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                  <button>
                    <img
                      alt="..."
                      className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                      src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945558/MD%20Dental%20Care/Menus/perawatan-ortodontik_vjq7sa.jpg"
                    />
                    <p className="text-xl text-purple-main mt-4 font-semibold">
                      Perawatan Ortodontik / Kawat Gigi
                    </p>
                  </button>
                </div>
              </a>
            </div>

            <div className="my-4 w-full lg:w-4/12 px-4">
              <a
                href={`https://api.whatsapp.com/send?phone=6285774085380&text=Halo%20admin%20klinik%20gigi%20MD%20Dental%20Care,%20saya%20ingin%20menjadwalkan%20Perawatan%20Prosthodonti%20/%20Gigi%20Tiruan%20dalam%20waktu%20dekat%20ini.%20`}
                target="_blank"
              >
                <div className="bg-white shadow-lg rounded-lg text-center p-4">
                  <button>
                    <img
                      alt="..."
                      className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                      src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945558/MD%20Dental%20Care/Menus/perawatan-gigi-tiruan_vlupcn.jpg"
                    />
                    <p className="text-xl text-purple-main mt-4 font-semibold">
                      Perawatan Prosthodonti / Gigi Tiruan
                    </p>
                  </button>
                </div>
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=6285774085380&text=Halo%20admin%20klinik%20gigi%20MD%20Dental%20Care,%20saya%20ingin%20menjadwalkan%20Perawatan%20Konservasi%20/%20Penambalan%20dan%20Perawatan%20Syaraf%20Gigi%20dalam%20waktu%20dekat%20ini.%20`}
                target="_blank"
              >
                <div className="bg-white shadow-lg rounded-lg text-center p-4 mt-8">
                  <button>
                    <img
                      alt="..."
                      className="rounded-lg max-w-full w-24 mx-auto p-1 bg-white"
                      src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945558/MD%20Dental%20Care/Menus/perawatan-konservasi_um65ue.jpg"
                    />
                    <p className="text-xl text-purple-main mt-4 font-semibold">
                      Perawatan Konservasi / Penambalan dan Perawatan Syaraf
                      Gigi
                    </p>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
