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
    setCoalPlants,
    gasPlants,
    setGasPlants,
    solarFarms,
    setSolarFarms,
    oilWells,
    setOilWells,
    windTurbines,
    setWindTurbines,
    biomassGassifiers,
    setBiomassGassifiers,
    hydroPlants,
    setHydroPlants,
    nuclearPlants,
    setNuclearPlants
} : {
    watts: number; 
    wattsPerSec: number;
    setWatts: (watts: number) => void;
    setWattsPerSec: (wattsPerSec: number) => void;
    linemen: number;
    setLinemen: (linemen: number) => void;
    coalPlants: number;
    setCoalPlants: (coalPlants: number) => void;
    gasPlants: number;
    setGasPlants: (gasPlants: number) => void;
    solarFarms: number;
    setSolarFarms: (solarFarms: number) => void;
    oilWells: number;
    setOilWells: (oilWells: number) => void;
    windTurbines: number;
    setWindTurbines: (windTurbines: number) => void;
    biomassGassifiers: number;
    setBiomassGassifiers: (biomassGassifiers: number) => void;
    hydroPlants: number;
    setHydroPlants: (hydroPlants: number) => void;
    nuclearPlants: number;
    setNuclearPlants: (nuclearPlants: number) => void;
}): JSX.Element {
    return (
        <div className="hub">
            {/* Upgrades and Events */}
            <div className="column">
                {/* Upgrades */}
                <div className="upgrades">
                    <span>Upgrades</span>
                </div>

                {/* Events */}
                <div className="events">
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
                        gasPlants={gasPlants}
                        setGasPlants={setGasPlants}
                        solarFarms={solarFarms}
                        setSolarFarms={setSolarFarms}
                        oilWells={oilWells}
                        setOilWells={setOilWells}
                        windTurbines={windTurbines}
                        setWindTurbines={setWindTurbines}
                        biomassGassifiers={biomassGassifiers}
                        setBiomassGassifiers={setBiomassGassifiers}
                        hydroPlants={hydroPlants}
                        setHydroPlants={setHydroPlants}
                        nuclearPlants={nuclearPlants}
                        setNuclearPlants={setNuclearPlants}
                    ></ViewGenerators>
                </div>

                {/* Transporters */}
                <div className="transporters">
                    <span>Transporters</span>
                </div>
            </div>
        </div>
    )
}