import React from "react";
import "./style/events.css";

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
            <span>Events</span>


            <div className="date">
                <span>{"Date: "}{months[currentMonth]}{", Year "}{currentYear}</span>
            </div>
        </>
    )
}