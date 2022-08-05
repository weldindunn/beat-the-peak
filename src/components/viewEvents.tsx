import React, { useState } from "react";
import { AdventBox } from "./adventBox";
import { Advent } from "../interfaces/advent";
import "./style/events.css";
import { timeConverter } from "./utilities/timeConverter";

export function ViewEvents({
    time, 
    currentMonth,
    currentYear,
    scenery,
    advents,
    setAdvents
} : {
    time: number; 
    currentMonth: string;
    currentYear: number;
    scenery: string;
    advents: Advent[];
    setAdvents: (advents: Advent[]) => void;
}): JSX.Element {

    const [isViewing, setViewing] = useState<boolean>(false);

    return (
        <>
            <div className="events-header">
                <span>Events</span>
                <button className="info-button" onClick={() => setViewing(!isViewing)}></button>
            </div>

            <div className="date">
                <span>{"Date: " + timeConverter(time, "date")}</span>
            </div>

            <div className="scene">
                <img src={scenery} alt="Scenery" />
            </div>

            {
                isViewing ? (
                    <>
                        <div className="date">
                            <span>Past Events:</span>
                        </div>
                        {
                            advents.map((advent: Advent) => (
                                advent.isOver ?
                                    <div key={advent.id}>
                                        <AdventBox time={time} advent={advent} advents={advents} setAdvents={setAdvents}/>
                                    </div> :
                                    <></>
                            ))
                        }       
                    </>
                ) : (
                    <>
                        <div className="date">
                            <span>Current Events:</span>
                        </div>
                        {
                            advents.map((advent: Advent) => (
                                !advent.isOver ?
                                    <div key={advent.id}>
                                        <AdventBox time={time} advent={advent} advents={advents} setAdvents={setAdvents}/>
                                    </div> :
                                    <></>
                            ))
                        }       
                    </>
                )
            }
        </>
    )
}