import React from "react";
import { Advent } from "../interfaces/advent";

export function AdventBox({
    advent
} : {
    advent: Advent;
}): JSX.Element {
    return (
        <div className="advent">
            {/*
            <div className="advent-icon">
                <img src={icon} alt={advent.name.charAt(0)} />
            </div>
            */}

            <div className="advent-content">
                <div className="advent-name">
                    {
                        advent.name.length > 13 ? (advent.name.substring(0, 11) + "...") : (advent.name)
                    }
                </div>
                <span className="advent-description">
                    {advent.description}{"Started: "}{advent.startDate}
                </span>
            </div>
        </div>
    )
}