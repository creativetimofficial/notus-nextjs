import React, { useState, useEffect } from "react";
import IndexNavbar from "../components/Navbars/IndexNavbar";
import Link from "next/link";
import { useRouter } from 'next/router';
import validator from 'validator'
import { GoogleSpreadsheet } from "google-spreadsheet";
import axios from 'axios';



const SPREADSHEET_ID = process.env.NEXT_PUBLIC_spreadsheet_id;
const SHEET_ID = process.env.NEXT_PUBLIC_sheet_id;
const CLIENT_EMAIL = process.env.NEXT_PUBLIC_client_email;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_private_key.replace(/\\n/g, '\n');

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const appendSpreadsheet = async (row) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = await doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
  }
};


export default function Contact() {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [fullName, setfullName] = useState("")
  const [message, setMessage] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [country, setCountry] = useState("")

  useEffect(() => {
    let mounted = true;
    const opts = {
      method: 'GET',
      url: 'http://ipwho.is/'
    }
    axios
      .request(opts)
      .then(res => {
        if (mounted && res) {
          setCountry(res.data.country)
        }
      })
      .catch(err => console.error(err))
      return () => mounted = false;
  }, [])
 

  async function getMessage(e) {
    e.preventDefault();
    if (email == "" || fullName == "" || message == "") {
      setErrorMsg('Missing Field Data!')
    } else if (!(validator.isEmail(email))) {
      setErrorMsg('Email Address Error!')
    } else {
      const newRow = { Name: fullName, Email: email, Message: message, Country: country};
      appendSpreadsheet(newRow);
      setEmail("")
      setfullName("")
      setMessage("")
      router.push('/')
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
                      <h1>LEAVE A MESSAGE</h1>
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
                          onChange={(e)=> {setfullName(e.target.value)}} 
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
                          onChange={(e)=> {setEmail(e.target.value)}} 
                          onClick={() => setErrorMsg("")}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Message
                        </label>
                        {
                        //   <input
                        //   type="textarea"
                        //   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        //   placeholder="Your message"
                        // />
                      }
                        <textarea 
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Your message"
                          value={message}
                          onChange={(e) => {setMessage(e.target.value)}} 
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

                      <div className="text-center mt-6" onClick={getMessage}>
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button"
                        >
                          Send
                        </button>
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