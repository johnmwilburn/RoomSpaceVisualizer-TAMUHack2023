import { useState, useEffect } from 'react';
import "./Wrapper.css"
import FloorInput from '../FloorInput/FloorInput.jsx'
import TeamInput from '../TeamInput/TeamInput.jsx'
import Header from '../Header/Header.jsx'
import TeamPreferences from '../TeamPreferences/TeamPreferences.jsx'
import Summary from '../Summary/Summary.jsx'
import Processing from '../Loading/Processing.jsx'
import Diagram from '../Pictures/Diagram.jsx'


function Wrapper() {

    const [floors, setFloors]  = useState([
        {id: 1, capacity: 43},
        {id: 2, capacity: 81},
        {id: 3, capacity: 73},
        {id: 4, capacity: 54},
        {id: 5, capacity: 97},
    ]);
    const [teams, setTeams] = useState([
        {id: 1, size: 22, preferences: {
            2: 1,
            3: 0,
            4: 1,
            5: -1,
            6: 1,
            7: -1,
            8: 0,
            9: -1,
            10: 0,
            11: 1,
        }},
        {id: 2, size: 45 , preferences: {
            1: 1,
            3: 1,
            4: -1,
            5: 1,
            6: 0,
            7: 0,
            8: 0,
            9: -1,
            10: 0,
            11: 1,
        }},
        {id: 3, size: 34, preferences: {
            1: 1,
            2: 1,
            4: -1,
            5: -1,
            6: -1,
            7: 0,
            8: -1,
            9: -1,
            10: -1,
            11: 1,
        }},
        {id: 4, size: 51, preferences: {
            1: 0,
            2: -1,
            3: 0,
            5: -1,
            6: -1,
            7: -1,
            8: -1,
            9: -1,
            10: 1,
            11: -1,
        }},
        {id: 5, size: 11, preferences: {
            1: 1,
            2: 1,
            3: 1,
            4: 1,
            6: -1,
            7: -1,
            8: -1,
            9: 0,
            10: 0,
            11: 0,
        }},
        {id: 6, size: 37,  preferences: {
            1: 0,
            2: -1,
            3: -1,
            4: -1,
            5: -1,
            7: 1,
            8: 0,
            9: -1,
            10: 1,
            11: -1,
        }},
        {id: 7, size: 42, preferences: {
            2: 1,
            3: 0,
            4: 1,
            5: -1,
            6: 1,
            7: -1,
            8: 0,
            9: -1,
            10: 0,
            11: 1,
        }},
        {id: 8, size: 16, preferences: {
            1: 1,
            3: 1,
            4: -1,
            5: 1,
            6: 0,
            7: 0,
            8: 0,
            9: -1,
            10: 0,
            11: 1,
        }},
        {id: 9, size: 29, preferences: {
            1: 1,
            2: 1,
            4: -1,
            5: -1,
            6: -1,
            7: 0,
            8: -1,
            9: -1,
            10: -1,
            11: 1,
        }},
        {id: 10, size: 56, preferences: {
            1: 0,
            2: -1,
            3: 0,
            5: -1,
            6: -1,
            7: -1,
            8: -1,
            9: -1,
            10: 1,
            11: -1,
        }},
        {id: 11, size: 49, preferences: {
            1: 1,
            2: 1,
            3: 1,
            4: 1,
            6: -1,
            7: -1,
            8: -1,
            9: 0,
            10: 0,
            11: 0,
        }},
    ]);
    const [component, setComponent] = useState(0);
    
    const addFloor = (newFloor) => {
        setFloors([...floors, newFloor])
    }
    const deleteFloor = (floor) => {
        setFloors(floors.filter((f) => f !== floor))
    }
    const addTeam = (newTeam) => {
        setTeams([...teams, newTeam])
    }
    const deleteTeam = (team) => {
        setTeams(teams.filter((t) => t !== team))
    }
    const updateTeam = (team) => {
        setTeams(teams.map((t) => t !== team))
    }

    useEffect(() => {
        if (component == 4){
            console.log("Loading")
            setTimeout(() => {
                setComponent(5)
            }, 2500)
        }
    }, [component])

    const components = ["FloorInput", "TeamInput", "TeamPreferences", "Summary", "Processing", "Diagram"]
    return (
        

        <div className="Wrapper">
            <Header headerTitle={components[component]} />
            {component === 0 ? <FloorInput floors={floors} addFloor={addFloor} deleteFloor={deleteFloor}/> : null}
            {component === 1 ? <TeamInput teams={teams} addTeam={addTeam} deleteTeam={deleteTeam}/> : null}
            {component === 2 ? <TeamPreferences teams={teams} updateTeam={updateTeam}/> : null}
            {component === 3 ? <Summary teams={teams} floors={floors}/> : null}
            {component === 4 ? <Processing teams={teams} setTeams={setTeams}/> : null}
            {component === 5 ? <Diagram/> : null}

            { component < 4 ? <div>
                <button onClick={() => {
                    const newIndex = component + 1;
                    setComponent(newIndex);
                }}>Submit</button>
            </div> : ""}
        </div>
        
    )
}

export default Wrapper