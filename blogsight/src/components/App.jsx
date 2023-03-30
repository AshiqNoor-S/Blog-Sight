import React from "react";
import Hero from "./Hero";
import TeamMember from "./TeamMember";
import members from "../team-members";

function App(){
    return (<div>
        <Hero />
        {/* The Team */}
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
    </div>
);}

export default App;