import React from "react";

function Home(){
	return (
		<div className="home-pg">
		<h1 className="page-title"><a href="/">BlogSight</a></h1>
		{/* <h1>Patient Monitoring | Blogs</h1> */}
		<a href="/patient-monitoring">
		<div className="card-option">
			<h1 className="card-text">Patient Monitoring</h1>
		</div>
		</a>
		<div class="vl"></div>
		<a href="/blog-home">
		<div className="card-option">
			<h1 className="card-text">Blogs</h1>
		</div>
		</a>
		</div>
	);
}

export default Home;