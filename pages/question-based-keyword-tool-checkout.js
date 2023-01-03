import React, { useState } from "react";
import Head from "next/head";
import Script from 'next/script'
import IndexNavbar from "../components/Navbars/IndexNavbar";
import { v4 as uuidv4 } from 'uuid';
import isEmail from 'validator/lib/isEmail';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';



const SalePage = () => {

  	const [email, setEmail] = useState("");
  	const [fullName, setfullName] = useState("");
  	const [errorMsg, setErrorMsg] = useState("");
  	const [config, setConfig] = useState({});

  	const handleNameChange = e => {
    	setfullName(e.target.value)
  	}

    const handleEmailChange = e => {
    	setEmail(e.target.value)
 	}

 	

  	const signUp = e => {
  		e.preventDefault();
  		if (isEmail(email) && fullName != "") {
  			setConfig({
			    public_key: process.env.NEXT_PUBLIC_FLW_PUBKEY,
			    tx_ref: uuidv4(),
			    amount: 19.99,
			    currency: "USD",
			    payment_options: "card",
			    redirect_url: "http://localhost:3000/",
			    customer: {
			      email: email,
			      name: fullName,
			    },
			    customizations: {
			        title: "Question-based Keyword Research Google Sheets Template",
			        description: "Payment for Question-based keyword Google Sheets Template",
			        logo: "img/logo.png",
			    },
			 });
  			setEmail("")
      		setfullName("")
  		}

  		if (!(isEmail(email)) || email == "") {
  			setErrorMsg("Invalid Email Address!!")
  		}

  		if (fullName == "") {
  			setErrorMsg("Invalid Name Entered!!")
  		}

  		if (email == "" || fullName == "") {
  			setErrorMsg("Incomplete Details Entered!!")
  		}
  	}


  	const handleFlutterPayment = useFlutterwave(config);

	return(
		<>
			<Head>
				<title>
					Keyword Research - How to get the most searched keywords on Google in { new Date().getFullYear() }
				</title>
				<meta 
					name="description" 
					content="This Google Sheets Template is a Keyword Research tool that 
					automates the process of how to get the most searched keywords on
					Google in 2023"
				/>
			</Head>
			<IndexNavbar/>
			<div className="blog-posts contain">
				<h1 className="bp-title">Keyword Research Google Sheets Template</h1>
				<p>
					Scale your keyword research by knowing the exact questions people are typing
					into Google.
				</p>
				<h2>Price: $19.99</h2>
				<img src="/img/keywordResearchGIF.gif"/>
				<form>
					{ (Object.keys(config).length === 0) && <div className="relative w-full mb-3">
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
                     </div> }
                     { (Object.keys(config).length === 0) && <div className="relative w-full mb-3">
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
                      </div> } 
				</form>
				{ errorMsg && <div className="w-1/2 error-msg"> <h3>{ errorMsg }</h3></div>  }
				<div className="pay-btn">
					{ (Object.keys(config).length === 0) &&  <button onClick={signUp}>Submit</button> }
					{ (Object.keys(config).length !== 0) && <button onClick={() => {
						handleFlutterPayment({
							callback: response => {
								console.log(response)
								closePaymentModal()
							},
							onClose: () => {},
						})
					}}>Get Template</button> }
				</div>
			</div>
		</>
	)
}

export default SalePage;