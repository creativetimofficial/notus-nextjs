import React from "react";
import IndexNavbar from "../../components/Navbars/IndexNavbar";

const ToolsPage = () => {
	return (<>
		<IndexNavbar/>
		<div className="blog-div bg-blueGray-100">
			<h1 className="post-title">Pain-Point SEO: Create Content That Drives Conversions</h1>
			<small>{new Date().toDateString()}</small>
		</div>
	</>)
}

export default ToolsPage;