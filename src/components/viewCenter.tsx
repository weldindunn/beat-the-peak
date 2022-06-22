import React from "react";
//import { Button } from "react-bootstrap";
import bolt from "../img/bolt.png";

export function ViewCenter ({
    watts, 
    setWatts
} : {
    watts: number; 
    setWatts: (watts: number) => void;
}): JSX.Element {

    /*
    const bolt = new Image();
    bolt.src = "../img/bolt.png";
    */

    function increaseWatts(theseWatts: number): void {
        setWatts(watts + theseWatts);
    }

    function clickPowerButton(): void {
        increaseWatts(1);
    }

    return (
        <div style={{display:"flex"}}>

            {/* Power Button */}
            <span>Weldin's Electric Cooperative</span>
            {/* <span>{name}{"'s Electric Cooperative"}</span> */}

            {/* Power Button */}
            <div className="bolt">
                <button>
                    <img src={bolt} alt="Bolt" onClick={clickPowerButton} width="200" height="200" />
                </button>
            </div>
            
            {/* # of Watts */}
            <span>{watts}{" watts"}</span>
        </div>
    )
}