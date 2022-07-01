import React from "react";
//import { Button } from "react-bootstrap";
import { numberConvertor } from "./utilities/numberConvertor";
import bolt from "../img/bolt.png";

export function ViewCenter ({
    watts, 
    wattsPerSec,
    clickBolt
} : {
    watts: number; 
    wattsPerSec: number;
    clickBolt: () => void;
}): JSX.Element {

    function clearStorage(): void {
        localStorage.clear();
    }

    return (
        <div className="center">
            {/* Power Button */}
            <div className="center-text-box">
                <span className="center-header">
                    Weldin's Electric Cooperative
                    <button onClick={clearStorage}>🛈</button>
                </span>
            </div>
            {/* <span>{name}{"'s Electric Cooperative"}</span> */}

            {/* Power Button */}
            <div className="bolt">
                <button onClick={clickBolt} >
                    <img src={bolt} alt="Bolt"/>
                </button>
            </div>
            
            {/* # of Watts */}
            <div className="center-text-box">
                <span className="center-header">
                    {numberConvertor(watts)}{" watts"}
                </span>
            </div>

            {/* # of Watts per second */}
            <div className="center-text-box">
                <span className="center-text">
                    {"per second: "}{numberConvertor(wattsPerSec)}
                </span>
            </div>
        </div>
    )
}