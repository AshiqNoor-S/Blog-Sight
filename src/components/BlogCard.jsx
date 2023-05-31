import React from "react";

function BlogCard(props){
    return (<div className="blog-card">
		<div className="card-title">{props.cardTitle}</div>
		<div className="card-content">{props.cardContent}</div>
    </div>
);}

export default BlogCard;