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
    currentMonth: string;
    currentYear: number;
    scenery: string;
    advents: Advent[];
}): JSX.Element {
    return (
        <>
            <div className="events-header">
                <span>Events</span>
            </div>

            <div className="date">
                <span>{"Date: "}{currentMonth}{", '"}{currentYear < 10 ? ("0" + currentYear) : (currentYear)}</span>
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