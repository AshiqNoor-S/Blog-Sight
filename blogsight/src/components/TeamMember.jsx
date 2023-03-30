import React from "react";

function TeamMember(props){
	return (<div>
			<img src={props.imgURL} className="member-img" alt="Team member" />
			<p className="member-name">{props.name}</p>
	</div>);
}

export default TeamMember;