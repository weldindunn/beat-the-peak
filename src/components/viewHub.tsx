import React from "react";
import { MenuBar } from "./menuBar";
import { ViewCenter } from "./viewCenter";
import { ViewGenerators } from "./viewGenerators";
import { ViewUpgrades } from "./viewUpgrades";
import { Upgrade } from "../interfaces/upgrade";
import { ViewTransporters } from "./viewTransporters";

export function ViewHub({
    name, 
    setName,
    watts,
    wattsPerSec,
    netWattsPerSec,
    members,
    totalTransportation,

    linemen,
    coalPlants,
    gasPlants,
    solarFarms,
    oilWells,
    windTurbines,
    biomassGasifiers,
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

    batteries,
    meters,
    phonePoles,
    transformers,
    undergroundCables,
    powerTowers,
    substations,

    batteryTransportation,
    meterTransportation,
    phonePoleTransportation,
    transformerTransportation,
    undergroundCableTransportation,
    powerTowerTransportation,
    substationTransportation,

    batteryCost,
    meterCost,
    phonePoleCost,
    transformerCost,
    undergroundCableCost,
    powerTowerCost,
    substationCost,

    upgrades,
    setUpgrades,

    clickBolt,
    buyGenerator,
    buyUpgrade,
    buyTransporter,

    eraseGame
} : {
    name: string;
    setName: (name: string) => void;
    watts: number; 
    wattsPerSec: number;
    netWattsPerSec: number;
    members: number;
    totalTransportation: number;

    linemen: number;
    coalPlants: number;
    gasPlants: number;
    solarFarms: number;
    oilWells: number;
    windTurbines: number;
    biomassGasifiers: number;
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

    batteries: number;
    meters: number;
    phonePoles: number;
    transformers: number;
    undergroundCables: number;
    powerTowers: number;
    substations: number;

    batteryTransportation: number;
    meterTransportation: number;
    phonePoleTransportation: number;
    transformerTransportation: number;
    undergroundCableTransportation: number;
    powerTowerTransportation: number;
    substationTransportation: number;

    batteryCost: number;
    meterCost: number;
    phonePoleCost: number;
    transformerCost: number;
    undergroundCableCost: number;
    powerTowerCost: number;
    substationCost: number;

    upgrades: Upgrade[];
    setUpgrades: (upgrades: Upgrade[]) => void;

    clickBolt: () => void;
    buyGenerator: (generator: string) => void;
    buyUpgrade: (upgrade: Upgrade) => void;
    buyTransporter: (transporter: string) => void;

    eraseGame: () => void;
}): JSX.Element {
    return (
        <>
            <MenuBar eraseGame={eraseGame}></MenuBar>
            <div className="hub">
                <div className="left-column">
                    <div className="top-row">
                        {/* Events */}
                        <div className="events-column">
                            <div className="events">
                                <span>Events</span>
                            </div>
                        </div>

                        {/* Barrier */}
                        <div className="left-barrier"/>

                        <div className="upgrades-column">
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
                                    biomassGasifiers={biomassGasifiers}
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
                        </div>
                    </div>

                    <div className="structures-column">
                        {/* Structures */}
                        <div className="structures">
                            <span>Structures</span>
                        </div>
                    </div>
                </div>

                {/* Barrier */}
                <div className="middle-barrier"/>

                {/* Center */}
                <div className="center-column">
                    <ViewCenter
                        name={name}
                        setName={setName}
                        watts={watts}
                        wattsPerSec={wattsPerSec}
                        netWattsPerSec={netWattsPerSec}
                        members={members}
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
                            biomassGasifiers={biomassGasifiers}
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
                        <ViewTransporters
                            watts={watts}
                            wattsPerSec={wattsPerSec}
                            netWattsPerSec={netWattsPerSec}
                            totalTransportation={totalTransportation}
                            buyTransporter={buyTransporter}

                            batteries={batteries}
                            meters={meters}
                            phonePoles={phonePoles}
                            transformers={transformers}
                            undergroundCables={undergroundCables}
                            powerTowers={powerTowers}
                            substations={substations}

                            batteryTransportation={batteryTransportation}
                            meterTransportation={meterTransportation}
                            phonePoleTransportation={phonePoleTransportation}
                            transformerTransportation={transformerTransportation}
                            undergroundCableTransportation={undergroundCableTransportation}
                            powerTowerTransportation={powerTowerTransportation}
                            substationTransportation={substationTransportation}

                            batteryCost={batteryCost}
                            meterCost={meterCost}
                            phonePoleCost={phonePoleCost}
                            transformerCost={transformerCost}
                            undergroundCableCost={undergroundCableCost}
                            powerTowerCost={powerTowerCost}
                            substationCost={substationCost}
                        ></ViewTransporters>
                    </div>
                </div>
            </div>
        </>
    )
}