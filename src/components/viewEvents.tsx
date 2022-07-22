import React from "react";
import { AdventBox } from "./adventBox";
import { Advent } from "../interfaces/advent";
import "./style/events.css";

export function ViewEvents({
    currentMonth,
    currentYear,
    scenery,
    advents
} : {
    currentMonth: number;
    currentYear: number;
    scenery: string;
    advents: Advent[];
}): JSX.Element {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <>
            <div className="title">
                <span>Events</span>
            </div>

            <div className="date">
                <span>{"Date: "}{months[currentMonth]}{", Year "}{currentYear}</span>
            </div>

            <div className="scene">
                <img src={scenery} alt="Scenery" />
            </div>

            {
                advents.map((advent: Advent) => (
                    <div key={advent.id}>
                        <AdventBox advent={advent}/>
                    </div>
                ))
            }
        </>
    )
}