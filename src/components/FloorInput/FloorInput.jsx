import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './FloorInput.css'

function FloorInput({floors, addFloor, deleteFloor}) {

    return (
    <div className="grid">
        <div className='row'>
                <div className='col'>
                    <input type="text" id='capacity' placeholder="Capacity" />
                </div>
                <div className='col'>
                    <button onClick={(e) => {
                        e.preventDefault();
                        const newFloor = {
                            "id": floors.length + 1,
                            "capacity": document.getElementById('capacity').value
                        }
                        addFloor(newFloor);
                    }}>Add Floor</button>
                </div>
            </div>
        {floors.map((floor) => (
            <div className='row'>
                <div className='col'>
                    Floor {floor.id}
                    </div>
                <div className='col'>
                    {floor.capacity}
                </div>
                <div className='col'>
                    <button onClick={(e) => {
                        e.preventDefault();
                        deleteFloor(floor);
                    }}>
                    Delete
                    </button>
                </div>
            </div>
            ))}
    </div>
    );
}

export default FloorInput;