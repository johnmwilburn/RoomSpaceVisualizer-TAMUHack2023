import './Summary.css'

function Summary({floors, teams}) {
    return (
    <div>
        Floors: 
        <div className='summary-row'>
            
            {floors.map((floor) => (
                <span className="summary-col">
                    <div className="team-id">
                    {floor.id}
                    </div> 
                    <div>
                        Capacity: {floor.capacity}
                    </div>
                    
                </span>
            ))}
        </div>

        Teams:
        <div className='summary-row'>
            {teams.map((team) => (
                <span className="summary-col">
                    <div className="team-id"> {team.id}</div>
                    Size: {team.size}
                </span>
            ))}
        </div>
    </div>
    );
}

export default Summary;