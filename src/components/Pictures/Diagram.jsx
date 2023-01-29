// react componen t 
import { useState } from "react";
import './Pictures.css'
import Picture1 from './Picture1.png'
import Picture2 from './Picture2.png'
import Picture3 from './Picture3.png'
import Picture4 from './Picture4.png'
import Picture5 from './Picture5.png'

function Pictures(){

    const pictures = {
        1: Picture1,
        2: Picture2,
        3: Picture3,
        4: Picture4,
        5: Picture5,
    }

    const [picture, setPicture] = useState(1);
    return (
        <div>
            <div>
                <h1>Floor {picture}</h1>
            </div>
            <span className="picture-container">
                <img className="picture" src={pictures[picture]} />

            </span>
            <span className="picture-select">

                { picture < 5 ? 
                <div>
                <button onClick={(e) => {
                    e.preventDefault();
                    
                    setPicture(picture + 1);
                }}>
                    Next Floor
                </button>
                </div> : ""
            }

                { picture > 1 ?  <div>
                <button onClick={(e) => {
                    e.preventDefault();
                    if (picture > 1)
                        setPicture(picture - 1);
                }}>
                    Previous Floor
                </button>
                </div> : ""}
        
                

                
                

            </span>

        </div>
    )
}

export default Pictures;