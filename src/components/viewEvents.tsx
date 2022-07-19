import React from "react";
import "./style/events.css";
import noon from "../img/Day_Night_Cycle_Noon.png";

export function ViewEvents({
    currentMonth,
    currentYear
} : {
    currentMonth: number;
    currentYear: number;
}): JSX.Element {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <>
            <div className="title">
                <span>Events</span>
            </div>

            <div className="scene">
                <img src={noon} alt="Scenery" />
            </div>

            <div className="date">
                <span>{"Date: "}{months[currentMonth]}{", Year "}{currentYear}</span>
            </div>
        </>
    )
}