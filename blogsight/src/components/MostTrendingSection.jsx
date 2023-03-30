import React from "react";
import TrendingPost from "./TrendingPost";

function MostTrendingSection(){
	return (
		<div className="most-trending-section">
            <h2 className="most-trending-heading">Most Trending</h2>
            <TrendingPost title="Sample Trending Topic" content="Sample Trending Content..." />
            <button>Start Reading</button>
        </div>
	);
}

export default MostTrendingSection;