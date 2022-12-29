import React from "react";
import IndexNavbar from "../../components/Navbars/IndexNavbar";

const ToolsPage = () => {
	return (<>
		<IndexNavbar/>
		<div className="blog-div">
			<h1 className="post-title"></h1>
			<small>{new Date().toDateString()}</small>
		</div>
	</>)
}

export default ToolsPage;