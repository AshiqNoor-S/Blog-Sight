import React from "react";
import Hero from "./Hero";
import TeamMember from "./TeamMember";
import members from "../team-members";

function App(){
    return (<div>
        <Hero />
        {members.map(member => (
            <TeamMember 
                key={member.id} 
                name={member.name} 
                imgURL={member.imgURL}
            />
        ))}
    </div>
);}

export default App;