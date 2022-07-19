import React from "react";
import "./style/events.css";

export function ViewEvents({
    currentMonth,
    currentYear,
    scenery
} : {
    currentMonth: number;
    currentYear: number;
    scenery: string;
}): JSX.Element {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <>
            <div className="title">
                <span>Events</span>
            </div>

            <div className="scene">
                <img src={scenery} alt="Scenery" />
            </div>

            <div className="date">
                <span>{"Date: "}{months[currentMonth]}{", Year "}{currentYear}</span>
            </div>
        </>
    )
}