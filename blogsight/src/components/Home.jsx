import React from "react";
import Hero from "./Hero";
import MostTrendingSection from "./MostTrendingSection";
import TeamSection from "./TeamSection";

function Home(){
	return (
		<div>
			<Hero />
			<MostTrendingSection />
			<TeamSection />
		</div>
	);
}

export default Home;