import React, { useState, useEffect } from "react";
import IndexNavbar from "../components/Navbars/IndexNavbar";
import Link from "next/link";
import { useRouter } from 'next/router';
import validator from 'validator'
import axios from 'axios';
import dynamic from "next/dynamic";
import { useCalendlyEventListener } from "react-calendly";



const Calendly = dynamic(() => import("../components/Calendar/BookDemo"), {
  ssr: false
});

export default function Contact() {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [fullName, setfullName] = useState("")
  const [industry, setIndustry] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")

  useEffect(() => {
    let mounted = true;
    const opts = {
      method: 'GET',
      url: 'https://ipwho.is/'
    }
    axios
      .request(opts)
      .then(res => {
        if (mounted && res) {
          setState(res.data.city)
          setCountry(res.data.country)
        }
      })
      .catch(err => console.error(err))
      return () => mounted = false;
  }, [])
 

  async function getMessage(e) {
    e.preventDefault();
    const data = {fullName, email, industry, state, country, booked:true};
      axios({
        method: 'post',
        url: 'https://qualified-l-server.vercel.app/api/message',
        data
      })
      .then(res => (console.log(res.data.message.createdAt)))
      .catch(err => (console.log('err from owned server', err)))
      setEmail("")
      setfullName("")
      setIndustry("")
      router.push('/')
  }

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("Profile Page Viewed"),
    onDateAndTimeSelected: () => console.log("Date And Time Selected"),
    onEventTypeViewed: () => console.log("Event Type Viewed"),
    onEventScheduled: (e) => { 
      getMessage(e)
    },
  })

  const handleNameChange = e => {
    setfullName(e.target.value)
  }

   const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleIndustryChange = e => {
    if (!(validator.isEmail(email))) {
      setErrorMsg('Invalid Email Address!')
    } else {
      setIndustry(e.target.value)
    }
  }


  return (
    <>
    <IndexNavbar />
    <div className="contact-us bg-blueGray-100">
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      {
                      //   <h6 className="text-blueGray-500 text-sm font-bold">
                      //   Sign in with
                      // </h6>
                    }
                    </div>
                    {
                    //   <div className="btn-wrapper text-center">
                    //   <button
                    //     className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    //     type="button"
                    //   >
                    //     <img alt="..." className="w-5 mr-1" src="/img/github.svg" />
                    //     Github
                    //   </button>
                    //   <button
                    //     className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    //     type="button"
                    //   >
                    //     <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
                    //     Google
                    //   </button>
                    // </div>
                    // <hr className="mt-6 border-b-1 border-blueGray-300" />
                  }
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                      <h1>SPEAK WITH US</h1>
                    </div>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Full Name"
                          value={fullName}
                          onChange={handleNameChange} 
                          onClick={() => setErrorMsg("")}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                          value={email}
                          onChange={handleEmailChange} 
                          onClick={() => setErrorMsg("")}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          What Industry is your business
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Industry"
                          value={industry}
                          onChange={handleIndustryChange} 
                          onClick={() => setErrorMsg("")}
                        />
                      </div>
                      {
                      //   <div>
                      //   <label className="inline-flex items-center cursor-pointer">
                      //     <input
                      //       id="customCheckLogin"
                      //       type="checkbox"
                      //       className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      //     />
                      //     <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      //       Remember me
                      //     </span>
                      //   </label>
                      // </div>
                    }
 
                      {
                      //   <div className="text-center mt-6" onClick={getMessage}>
                      //     <button
                      //       className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      //     >
                      //     Book A Meeting
                      //   </button>
                      // </div>
                    }
                      <div className="calendly"> 
                          { (fullName && email && industry) && <Calendly fullName={fullName} email={email}/> }
                      </div>
                    </form>
                  </div>
                </div>
                
                  <div className="flex flex-wrap mt-6 relative">
                  { errorMsg && <div className="w-1/2 error-msg"> <h3>{ errorMsg }</h3></div>  }
                  {
                  //   <div className="w-1/2 text-right">
                  //   <Link legacyBehavior href="/auth/register">
                  //     <a href="#pablo" className="text-blueGray-200">
                  //       <small>Create new account</small>
                  //     </a>
                  //   </Link>
                  // </div>
                }
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}