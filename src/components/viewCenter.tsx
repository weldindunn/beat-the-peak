import React from "react";
//import { Button } from "react-bootstrap";
import bolt from "../img/bolt.png";

export function ViewCenter ({
    watts, 
    wattsPerSec,
    setWatts,
    setWattsPerSec
} : {
    watts: number; 
    wattsPerSec: number;
    setWatts: (watts: number) => void;
    setWattsPerSec: (wattsPerSec: number) => void;
}): JSX.Element {

    function increaseWatts(theseWatts: number): void {
        setWatts(watts + theseWatts);
    }

    function clickPowerButton(): void {
        increaseWatts(1);
    }

    return (
        <div className="center">
            {/* Power Button */}
            <div className="center-text-box">
                <span className="center-header">
                    Weldin's Electric Cooperative
                </span>
            </div>
            {/* <span>{name}{"'s Electric Cooperative"}</span> */}

            {/* Power Button */}
            <div className="bolt">
                <button onClick={clickPowerButton} >
                    <img src={bolt} alt="Bolt"/>
                </button>
            </div>
            
            {/* # of Watts */}
            <div className="center-text-box">
                <span className="center-header">
                    {watts}{" watts"}
                </span>
            </div>

            {/* # of Watts per second */}
            <div className="center-text-box">
                <span className="center-text">
                    {"per second: "}{wattsPerSec}
                </span>
            </div>
        </div>
    )
}