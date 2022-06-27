import React from "react";
import { ViewCenter } from "./viewCenter";
import { ViewGenerators } from "./viewGenerators";

export function ViewHub({
    watts, 
    setWatts,
    wattsPerSec,
    setWattsPerSec,
    linemen,
    setLinemen,
    coalPlants,
    setCoalPlants
} : {
    watts: number; 
    wattsPerSec: number;
    setWatts: (watts: number) => void;
    setWattsPerSec: (wattsPerSec: number) => void;
    linemen: number;
    setLinemen: (linemen: number) => void;
    coalPlants: number;
    setCoalPlants: (coalPlants: number) => void;
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
                <ViewCenter
                    watts={watts}
                    setWatts={setWatts}
                    wattsPerSec={wattsPerSec}
                    setWattsPerSec={setWattsPerSec}
                ></ViewCenter>
            </div>

            {/* Generators and Transporters */}
            <div className="column">

                {/* Generators */}
                <div>
                    <ViewGenerators
                        watts={watts}
                        setWatts={setWatts}
                        wattsPerSec={wattsPerSec}
                        setWattsPerSec={setWattsPerSec}
                        linemen={linemen}
                        setLinemen={setLinemen}
                        coalPlants={coalPlants}
                        setCoalPlants={setCoalPlants}
                    ></ViewGenerators>
                </div>

                {/* Transporters */}
                <div>
                    <span>Transporters</span>
                </div>
            </div>
        </div>
    )
}