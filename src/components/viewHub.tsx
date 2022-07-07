import React from "react";
import { MenuBar } from "./menuBar";
import { ViewCenter } from "./viewCenter";
import { ViewGenerators } from "./viewGenerators";
import { ViewUpgrades } from "./viewUpgrades";
import { Upgrade } from "../interfaces/upgrade";

export function ViewHub({
    watts,
    wattsPerSec,

    linemen,
    coalPlants,
    gasPlants,
    solarFarms,
    oilWells,
    windTurbines,
    biomassGassifiers,
    hydroPlants,
    nuclearPlants,

    linemenProduction,
    coalProduction,
    gasProduction,
    solarProduction,
    oilProduction,
    windProduction,
    biomassProduction,
    hydroProduction,
    nuclearProduction,

    linemenCost,
    coalCost,
    gasCost,
    solarCost,
    oilCost,
    windCost,
    biomassCost,
    hydroCost,
    nuclearCost,

    upgrades,
    setUpgrades,

    clickBolt,
    buyGenerator,
    buyUpgrade,

    eraseGame
} : {
    watts: number; 
    wattsPerSec: number;

    linemen: number;
    coalPlants: number;
    gasPlants: number;
    solarFarms: number;
    oilWells: number;
    windTurbines: number;
    biomassGassifiers: number;
    hydroPlants: number;
    nuclearPlants: number;

    linemenProduction: number;
    coalProduction: number;
    gasProduction: number;
    solarProduction: number;
    oilProduction: number;
    windProduction: number;
    biomassProduction: number;
    hydroProduction: number;
    nuclearProduction: number;

    linemenCost: number;
    coalCost: number;
    gasCost: number;
    solarCost: number;
    oilCost: number;
    windCost: number;
    biomassCost: number;
    hydroCost: number;
    nuclearCost: number;

    upgrades: Upgrade[];
    setUpgrades: (upgrades: Upgrade[]) => void;

    clickBolt: () => void;
    buyGenerator: (generator: string) => void;
    buyUpgrade: (upgrade: Upgrade) => void;

    eraseGame: () => void;
}): JSX.Element {
    return (
        <>
            <MenuBar eraseGame={eraseGame}></MenuBar>
            <div className="hub">
                {/* Events */}
                <div className="events-column">
                    <div className="events">
                        <span>Events</span>
                    </div>
                </div>

                {/* Barrier */}
                <div className="left-barrier"/>

                <div className="upgrades-structures-column">
                    {/* Upgrades */}
                    <div className="upgrades">
                        <ViewUpgrades
                            watts={watts}
                            wattsPerSec={wattsPerSec}

                            linemen={linemen}
                            coalPlants={coalPlants}
                            gasPlants={gasPlants}
                            solarFarms={solarFarms}
                            oilWells={oilWells}
                            windTurbines={windTurbines}
                            biomassGassifiers={biomassGassifiers}
                            hydroPlants={hydroPlants}
                            nuclearPlants={nuclearPlants}

                            linemenProduction={linemenProduction}
                            coalProduction={coalProduction}
                            gasProduction={gasProduction}
                            solarProduction={solarProduction}
                            oilProduction={oilProduction}
                            windProduction={windProduction}
                            biomassProduction={biomassProduction}
                            hydroProduction={hydroProduction}
                            nuclearProduction={nuclearProduction}
                        
                            linemenCost={linemenCost}
                            coalCost={coalCost}
                            gasCost={gasCost}
                            solarCost={solarCost}
                            oilCost={oilCost}
                            windCost={windCost}
                            biomassCost={biomassCost}
                            hydroCost={hydroCost}
                            nuclearCost={nuclearCost}

                            upgrades={upgrades}
                            buyUpgrade={buyUpgrade}
                        ></ViewUpgrades>
                    </div>

                    {/* Structures */}
                    <div className="structures">
                        <span>Structures</span>
                    </div>
                </div>

                {/* Barrier */}
                <div className="middle-barrier"/>

                {/* Center */}
                <div className="center-column">
                    <ViewCenter
                        watts={watts}
                        wattsPerSec={wattsPerSec}
                        clickBolt={clickBolt}
                    ></ViewCenter>
                </div>

                {/* Barrier */}
                <div className="right-barrier"/>

                {/* Generators and Transporters */}
                <div className="right-column">
                    {/* Generators */}
                    <div>
                        <ViewGenerators
                            watts={watts}
                            wattsPerSec={wattsPerSec}

                            linemen={linemen}
                            coalPlants={coalPlants}
                            gasPlants={gasPlants}
                            solarFarms={solarFarms}
                            oilWells={oilWells}
                            windTurbines={windTurbines}
                            biomassGassifiers={biomassGassifiers}
                            hydroPlants={hydroPlants}
                            nuclearPlants={nuclearPlants}

                            linemenProduction={linemenProduction}
                            coalProduction={coalProduction}
                            gasProduction={gasProduction}
                            solarProduction={solarProduction}
                            oilProduction={oilProduction}
                            windProduction={windProduction}
                            biomassProduction={biomassProduction}
                            hydroProduction={hydroProduction}
                            nuclearProduction={nuclearProduction}
                        
                            linemenCost={linemenCost}
                            coalCost={coalCost}
                            gasCost={gasCost}
                            solarCost={solarCost}
                            oilCost={oilCost}
                            windCost={windCost}
                            biomassCost={biomassCost}
                            hydroCost={hydroCost}
                            nuclearCost={nuclearCost}

                            buyGenerator={buyGenerator}
                        ></ViewGenerators>
                    </div>

                    {/* Transporters */}
                    <div className="transporters">
                        <span>Transporters</span>
                    </div>
                </div>
            </div>
        </>
    )
}