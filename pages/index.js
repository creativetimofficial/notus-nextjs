/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";

// import deskImg from '../public/img/deskDaringGreatly.png';

export default function Index() {
  return (
<>
      <Navbar transparent />
      <main>
        <div className="relative flex items-center content-center justify-center pt-16 pb-32 min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1634912314602-0d01437e3540?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="absolute w-full h-full bg-black opacity-75"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
                <div className="pr-12">
                  <h1 className="text-5xl font-semibold text-white">
                    Tinker Labs L3C
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 top-auto w-full h-16 overflow-hidden pointer-events-none"
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
                className="fill-current text-blueGray-200"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 -mt-24 bg-blueGray-200">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full px-4 pt-6 text-center lg:pt-12 md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Veteran Owned</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      You have the peace of mind to work with an organization rooted 
                      in a moral code built from generations of service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 text-center md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Free Consultations</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Get a free 1 hour review of your project by contacting us
                      through the form below.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 pt-6 text-center md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-emerald-400">
                      <i className="fas fa-heartbeat"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Low Profit company</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Tinker Labs L3C, prides itself on being a company to pay it forward through the generations to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                  <i className="text-xl fas fa-user-friends"></i>
                </div>
                <h3 className="mb-2 text-3xl font-semibold leading-normal">
                  The Services we Offer
                </h3>
                <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-500">
                  Tinker is a young and ambitious product development company that is focused on the community first.
                  It believes in Open Source technology, and is commited to working with the community to build solutions to share with the world.
                </p>
                <p className="mt-0 mb-4 text-lg font-bold leading-relaxed text-blueGray-600">
                  @ Tinker Labs, we have the skills and abilities to work with you to bring your product to life.
                  Contact us below to setup a free consult.
                  


                  {/* <Link href="/">
                  <a href="#pablo" className="mt-8 font-light text-blueGray-700">
                    Digital Design
                  </a>
                </Link> */}
                </p>
                
              </div>

              <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1602664876866-d3b33b77756b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 block w-full h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="fill-current text-blueGray-700"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Cutting Edge Product Development
                    </h4>
                    <p className="mt-2 font-light text-white text-md">
                      We strive to keep connected with the best processes and practices found around the world. 
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20 overflow-hidden pointer-events-none"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1519033504649-ff52b3119bbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyaW5nJTIwZ3JlYXRseXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=60"
                />
              </div>
              <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                <div className="md:pr-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center rounded-full shadow-lg text-blueGray-500 bg-blueGray-200">
                    <i className="text-xl fas fa-rocket"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Do you want to start your journey with us? Let's see if we are a good fit for eachother, reach out below. Just after you meet OUR TEAM!
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center mb-24 text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/IMG_4010.jpg"
                    className="mx-auto rounded-full shadow-lg max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Andrew Germann</h5>
                    <p className="mt-1 text-sm font-semibold uppercase text-blueGray-400">
                      Artist <br></br> Co-Founder <br></br> "Army"
                    </p>
                    {/* <div className="mt-6">
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white rounded-full outline-none bg-lightBlue-400 focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      
                      
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-4-470x470.png"
                    className="mx-auto rounded-full shadow-lg max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Joseph Layde</h5>
                    <p className="mt-1 text-sm font-semibold uppercase text-blueGray-400">
                    Compliance Officer <br></br> Co-Founder <br></br> "Marine"
                    </p>
                    {/* <div className="mt-6">
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-pink-500 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-red-600 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white rounded-full outline-none bg-lightBlue-400 focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white rounded-full outline-none bg-blueGray-700 focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block pb-20 bg-blueGray-800">
          <div
            className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20 overflow-hidden pointer-events-none"
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
                className="fill-current text-blueGray-800"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container px-4 mx-auto lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold text-white">
                Let's Build Something Together
                </h2>
                
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-12">
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 bg-white rounded-full shadow-lg text-blueGray-800">
                  <i className="text-xl fas fa-lightbulb"></i>
                </div>
                <h6 className="mt-5 text-xl font-semibold text-white">
                  Ideation
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                We will work with you to hash out your product concept.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 bg-white rounded-full shadow-lg text-blueGray-800">
                  <i className="text-xl fas fa-poll"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Know the market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                We will review and test the market to validate your product's validaty.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 bg-white rounded-full shadow-lg text-blueGray-800">
                  <i className="text-xl fas fa-rocket"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Launch
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                We will assist you in getting your product out into the market.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center -mt-48 lg:-mt-64">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="mt-1 mb-4 leading-relaxed text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mt-8 mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="w-full px-3 py-3 text-sm bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <button
                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
