import React from "react";
import TrendingPost from "./TrendingPost";

function MostTrendingSection(isAuth){
	return (
		<div className="most-trending-section">
            <h1 className="most-trending-heading">MOST TRENDING</h1>
            <TrendingPost title="Sample Trending Topic" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quasi iusto id dolores laboriosam accusamus commodi repellat maxime! Soluta eveniet neque enim, perspiciatis officia aliquam reiciendis rerum repellendus numquam itaque, debitis exercitationem doloribus necessitatibus, officiis vel ex animi. Rerum non sunt porro saepe vitae obcaecati illo consequuntur dignissimos quisquam et excepturi, amet cupiditate commodi quasi aspernatur culpa deserunt perspiciatis quidem fugiat enim minus. Sint, ut ratione. Accusantium, aliquam. Nobis corporis dolorem sed magni eius consequatur nihil animi, deserunt molestiae, explicabo reiciendis ipsa soluta voluptatem dolorum! Omnis voluptates nisi architecto illum provident quae recusandae. Ipsa ex asperiores facere dolorum autem iusto." />
            {isAuth ? <button className="start-reading-button"><a href="/login">Start Reading</a></button> : <button className="start-reading-button"><a href="/blogs">Start Reading</a></button>}
        </div>
	);
}

export default MostTrendingSection;