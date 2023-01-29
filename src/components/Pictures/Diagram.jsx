// react componen t 
import { useState } from "react";
import './Pictures.css'
import Picture1 from './Picture1.png'



function Pictures(){

    const pictures = {
        1: Picture1,
        2: Picture1,
        3: Picture1,
        4: Picture1,
        5: Picture1,
    }

    const [picture, setPicture] = useState(1);
    return (
        <div>
            <div className="picture-container">
                <img className="picture" src={pictures[picture]} />

            </div>
            <div className="picture-select">

                <button onClick={(e) => {
                    e.preventDefault();
                    setPicture(picture - 1);
                }}>
                    Previous Floor
                </button>

                <button onClick={(e) => {
                    e.preventDefault();
                    setPicture(picture + 1);
                }}>
                    Next Floor
                </button>

            </div>

        </div>
    )
}

export default Pictures;