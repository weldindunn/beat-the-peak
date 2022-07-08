import React from "react";
//import { Button } from "react-bootstrap";
import { numberConvertor } from "./utilities/numberConvertor";
import "./style/center.css";
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
    return (
        <div className="center">
            {/* Power Button */}
            <div className="name-text-box">
                <span className="coop-name">
                    Weldin's Electric Cooperative
                </span>
            </div>

            {/* Power Button */}
            <div className="bolt">
                <button onClick={clickBolt} >
                    <img src={bolt} alt="Bolt"/>
                </button>
            </div>
            
            {/* # of Watts */}
            <div className="watts-text-box">
                <span className="num-watts">
                    {numberConvertor(watts)}{" watts"}
                </span>
                <br/>
                <span className="num-wps">
                    {"per second: "}{numberConvertor(wattsPerSec)}
                </span>
            </div>
        </div>
    )
}