import React from "react";
import { ViewCenter } from "./viewCenter";
import { ViewGenerators } from "./viewGenerators";

export function ViewHub({
    watts, 
    wattsPerSec,
    setWatts,
    setWattsPerSec
} : {
    watts: number; 
    wattsPerSec: number;
    setWatts: (watts: number) => void;
    setWattsPerSec: (wattsPerSec: number) => void;
}): JSX.Element {
    return (
        <div className="hub">
            {/* Upgrades and Events */}
            <div className="column">
                {/* Upgrades */}
                <div>
                    <span>Upgrades</span>
                </div>

                {/* Events */}
                <div>
                    <span>Events</span>
                </div>
            </div>

            {/* Center */}
            <div className="column">
                <ViewCenter watts={watts} wattsPerSec={wattsPerSec} setWatts={setWatts} setWattsPerSec={setWattsPerSec}></ViewCenter>
            </div>

            {/* Generators and Transporters */}
            <div className="column">

                {/* Generators */}
                <div>
                    <ViewGenerators></ViewGenerators>
                </div>

                {/* Transporters */}
                <div>
                    <span>Transporters</span>
                </div>
            </div>
        </div>
    )
}