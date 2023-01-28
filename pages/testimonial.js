/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Head from "next/head";
import AOS from "aos";

export default function Testimonial() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Testimonial | MD Dental Care</title>
      </Head>
      <IndexNavbar fixed />
      <div className="justify-center flex flex-wrap items-center pt-20 pb-20 bg-blueGray-100">
        <div className="bg-blueGray-100 justify-center flex flex-wrap items-center pt-20">
          <div
            className="w-full md:w-8/12 lg:w-8/12 px-4 items-center"
            data-aos="fade-up"
          >
            <div className="md:pr-12">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-comment-medical text-xl"></i>
              </div>
              <h3 className="text-5xl mb-2 font-semibold leading-normal">
                Testimonial Pelayanan Terbaik
              </h3>
              <p className="text-2xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Lebih dari 15 th MD Dental Care memberikan pelayanan terbaik dan
                memuaskan di kelasnya, dengan serangaian fasilitas pendukung
                seperti ruangan ber-AC, Tempat parkir luas, dan masih banyak
                lagi.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
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
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
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
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
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

          <div className="justify-center flex flex-wrap w-full md:w-8/12 lg:w-8/12 px-4 mt-24 mb-24 items-center">
            <div className="w-full md:w-12/12" data-aos="fade-up">
              <div className="justify-center flex flex-wrap relative -mt-12">
                <img
                  src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945663/MD%20Dental%20Care/assets/pic_1_qmvdsm.png"
                  alt={"review google"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
