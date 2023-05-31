import React from "react";
import TeamMember from "./TeamMember";
import members from "../team-members";

function TeamSection(){
	return (
		<div className="the-team-section">
            <h2 className="the-team-heading">THE TEAM</h2>
            <div className="the-team-row">
                {members.map(member => (
                    <TeamMember 
                        key={member.id} 
                        name={member.name} 
                        imgURL={member.imgURL}
                    />
                ))}
            </div>
            
        </div>
	);
}

export default TeamSection;