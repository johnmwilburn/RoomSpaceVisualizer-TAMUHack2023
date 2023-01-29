import { useState } from "react";

import './TeamPreferences.css'

function TeamPreferences({teams, updateTeam}){
    const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
    const [currentTeamPreferences, setCurrentTeamPreferences] = useState({});
    console.log(parseInt(teams[currentTeamIndex].preferences[parseInt("2")]));

    return(
        <div>
            <div className="preferences-header">
                Team {teams[currentTeamIndex].id}
            </div>

            {/* <select name={teams[currentTeamIndex]} onChange={(e) => setCurrentTeamIndex(parseInt(e.target.value) - 1)}>
                {teams.map((team) => (
                    <option value={team.id}>Team {team.id}</option>
                ))}
            </select> */}
            
            {teams.filter((team) => team.id !== currentTeamIndex + 1).map((team) => (
                <div className="preferences-row"> 
                    Team {team.id} 
                    <button className={parseInt(teams[currentTeamIndex].preferences[team.id]) == 1 ? "selected" : ""} >
                        &#128525;
                    </button> 
                    <button className={parseInt(teams[currentTeamIndex].preferences[team.id]) == 0 ? "selected" : ""} >
                        &#128528;
                    </button> 
                    <button className={parseInt(teams[currentTeamIndex].preferences[team.id]) == -1 ? "selected" : ""} >
                        &#128545;
                    </button> 
                </div>
            ))}

            <div>
                { currentTeamIndex < 10 ? <button onClick={() => {
                    setCurrentTeamIndex(currentTeamIndex + 1);
                }}>
                    Next Team
                </button> : ""}
            </div>


        </div>
    );
}

export default TeamPreferences;