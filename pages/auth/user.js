import React, { useState } from "react";
import axios from 'axios';


const User = () => {

	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);
	const [loadText, setLoadText] = useState("");
	const [loadClass, setLoadClass] = useState("spinner")


	const handleInputChange = e => {
		setInput(e.target.value)
	}

	const getQuestions = e => {
		e.preventDefault()
		setLoading(true)
		setLoadText(`Getting question keywords from Google for ${input}...`)
		const data = { input }
		axios({
  			method: 'post',
		    url: 'http://localhost:4000/api/kwr-seo',
		    data
  		})
  		.then(res => {
  			if (res.status == 200) {
  				//get the download link and automatically download the sheet
  				let url = res.data.message;
  				const link = document.createElement('a');
  				link.href = url;
  				link.setAttribute('download', `Filename.xslx`);
			    document.body.appendChild(link);
			    link.click();
			    link.parentNode.removeChild(link);
  				setLoadClass("loaded")
  				setLoadText(`User questions related to ${input} have now been downloaded from Google!!`)
  				setTimeout(() => {
  					setLoading(false)
  				}, 5000)
  			}
  		})
      	.catch(err => (console.log('err when getting questions', err)))
		setInput("")
	}

	const enabled = input != "";

	return(
		<>
			<div className="user-area">
				<div className="sign-out">
					<input type="submit" value="Sign Out"/>
				</div>
				{ loading && <div className={loadClass}>{ loadText }</div> }
				<form>
					<div className="search-container">
						<img src="/img/question-keywords-image.png"/>
						<input type="text" value={input} onChange={handleInputChange}/>
						<div>
							<button disabled={!enabled} onClick={getQuestions}>Get Questions</button>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default User;