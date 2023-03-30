import React from "react";

function TrendingPost(props){
	return (<div className="most-trending-post">
			<h3 className="most-trending-post-title">{props.title}</h3>
			<p className="most-trending-post-content">{props.content}</p>
			
		</div>);
}

export default TrendingPost;