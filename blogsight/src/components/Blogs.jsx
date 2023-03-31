import React from "react";
import SearchBar from "./SearchBar";
import BlogCard from "./BlogCard";
import Paginator from "./Paginator";
import blogCards from "../blog-cards";

function Blogs(){
    return (<div className="blogs-section">
        <h1 className="blog-pg-heading">BlogSight</h1>
		<SearchBar />
		<div className="blog-card-section">
			{blogCards.map(blogCard => (
				<BlogCard key={blogCard.id} cardTitle={blogCard.cardTitle} cardContent={blogCard.cardContent} />
			))}
		</div>
		
		<div className="paginator-row">
		{/* <Paginator key="1" paginatorActive="1" />
		<Paginator key="2" paginatorActive="0" />
		<Paginator key="3" paginatorActive="0" /> */}
		</div>
		
    </div>
);}

export default Blogs;