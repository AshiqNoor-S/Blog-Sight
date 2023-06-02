import React from "react";

function TeamMember(props){
	return (<div className="member">
			<a href={props.socialsURL} target="_blank" rel="noreferrer"><img src={props.imgURL} className="member-img" alt="Team member" /></a>
			<p className="member-name">{props.name}</p>
	</div>);
}

export default TeamMember;