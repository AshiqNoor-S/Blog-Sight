import React from "react";

function Paginator(props){
	if(props.paginatorActive === "1"){
		return (<div className="single-paginator-active"></div>
		)
	} else {
		return (<div className="single-paginator"></div>
		)
	}
    ;}

export default Paginator;