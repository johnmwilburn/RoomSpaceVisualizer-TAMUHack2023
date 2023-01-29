function TeamInput({teams, addTeam, deleteTeam}) {

    return (
        <div className="grid">
            <div className='row'>
                <div className='col'>
                    <input type="text" id='size' placeholder="Size" />
                </div>
                <div className='col'>
                    <button onClick={(e) => {
                        e.preventDefault();
                        const newTeam = {
                            "id": teams.length + 1,
                            "size": document.getElementById('size').value
                        }
                        addTeam(newTeam);
                    }}>Add Team</button>
                </div>
            </div>
        {teams.map((team) => (
            <div className='row'>
                <div className='col'>
                    Team {team.id}
                    </div>
                <div className='col'>
                    {team.size}
                </div>
                <div className='col'>
                    <button onClick={(e) => {
                        e.preventDefault();
                        deleteTeam(team);
                    }}>
                    Delete
                    </button>
                </div>
            </div>
            ))}
    </div>
    );
}

export default TeamInput;