import React from "react";
import { Advent } from "../interfaces/advent";
import { timeConverter } from "./utilities/timeConverter";

export function AdventBox({
    time,
    advent,
    advents,
    setAdvents
} : {
    time: number;
    advent: Advent;
    advents: Advent[];
    setAdvents: (advents: Advent[]) => void;
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
                    {
                        advent.isOver ? (
                            <>
                                {" Ended: "}{timeConverter(advent.startTime + advent.length, "date")}
                            </>
                        ) : (
                            <>
                                {" Ending: " + Math.ceil((advent.length - (time - advent.startTime))/1000)}
                                {
                                    Math.ceil((advent.length - (time - advent.startTime))/1000) < 1 ?
                                        setAdvents(advents.map((currentAdvent: Advent): Advent => advent.id === currentAdvent.id ? {...currentAdvent, isOver: true} : {...currentAdvent})) : 
                                        <></>
                                }
                            </>
                        )
                    }
                </span>
            </div>
        </div>
    )
}