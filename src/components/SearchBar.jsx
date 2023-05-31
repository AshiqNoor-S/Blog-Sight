import React from "react";

function SearchBar(){
    return (<div className="search-bar">
		<form method="POST" action="/">
			<i class="fa fa-search" aria-hidden="true"></i>
			<input type="text" placeholder="Search a blog..."></input>
		</form>
    </div>
);}

export default SearchBar;