/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Head from "next/head";
import AOS from "aos";

export default function TentangKami() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Tentang Kami | MD Dental Care</title>
      </Head>
      <IndexNavbar fixed />
      <div className="justify-center flex flex-wrap items-center pt-20 pb-20 bg-blueGray-100">
        <div className="bg-blueGray-100 justify-center flex flex-wrap items-center pt-20">
          <div
            className="w-full md:w-8/12 lg:w-8/12 px-4 items-center"
            data-aos="fade-up"
          >
            <h2 className="text-5xl mb-2 font-semibold leading-normal">
              Beberapa Foto dari MD Dental Care
            </h2>
            <p className="text-2xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Berikut Beberapa Foto dari MD Dental Care MD Dental Care yang
              terletak di Jl. Kav. Perkebunan Raya No.174B, Bencongan Indah,
              Kec. Klp. Dua, Kabupaten Tangerang, Banten.
            </p>

            <div className="justify-center flex flex-wrap items-center mt-24 bg-blueGray-100">
              <div className="w-full" data-aos="fade-up">
                <div className="justify-center flex flex-wrap relative -mt-12">
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Pintu Masuk
                    </h5>
                    {/*<Link href="/auth/login">*/}
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945663/MD%20Dental%20Care/assets/pic_1_qmvdsm.png"
                      />
                    </div>
                    {/*</Link>*/}
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Ruang Depan
                    </h5>
                    {/*<Link href="/profile">*/}
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
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
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/photos/pic_3.png"
                      />
                    </div>
                    {/*</Link>*/}
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Peralatan Praktik
                    </h5>
                    {/*<Link href="/auth/login">*/}
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
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
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
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
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
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

          <div className="container mx-auto mt-96">
            <div
              className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative"
              data-aos="fade-up"
            >
              <div className="w-full text-center lg:w-8/12">
                <p className="text-4xl text-center"></p>
                <h3 className="font-semibold text-3xl">
                  Alamat Klinik MD Dental Care
                </h3>
                <p className="text-blueGray-500 text-lg leading-relaxed mt-4">
                  Klinik MD Dental Care terletak di Jl. Kav. Perkebunan Raya
                  No.174B, Bencongan Indah, Kec. Klp. Dua, Kabupaten Tangerang,
                  Banten.
                </p>
                <div className="text-center mt-16"></div>
              </div>
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              <iframe
                className="relative w-full px-12 h-350-px -mt-12"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.334218923034!2d106.60991729999999!3d-6.219583399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffbd37d05bed%3A0xb7fd377c431ab923!2sKlinik%20MY%20DENTIST!5e0!3m2!1sen!2sid!4v1674281388400!5m2!1sen!2sid"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
