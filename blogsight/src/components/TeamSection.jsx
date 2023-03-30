import React from "react";
import TeamMember from "./TeamMember";
import members from "../team-members";

function TeamSection(){
	return (
		<div className="the-team-section">
            <h2 className="the-team-heading">THE TEAM</h2>
            {members.map(member => (
                <TeamMember 
                    key={member.id} 
                    name={member.name} 
                    imgURL={member.imgURL}
                />
            ))}
        </div>
	);
}

export default TeamSection;