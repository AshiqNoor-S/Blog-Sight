import React from "react";
import Hero from "./Hero";
import MostTrendingSection from "./MostTrendingSection";
import TeamSection from "./TeamSection";


function BlogHome({isAuth}){
	return (
		<div>
			<Hero />
			<MostTrendingSection isAuth={isAuth}/>
			<TeamSection />
		</div>
	);
}

export default BlogHome;