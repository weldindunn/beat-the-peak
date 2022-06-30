import React from "react";
import { ViewCenter } from "./viewCenter";
import { ViewGenerators } from "./viewGenerators";
import { ViewUpgrades } from "./viewUpgrades";
import { Upgrade } from "../interfaces/upgrade";

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
    setNuclearPlants,

    linemenBaseProduction,
    linemenProduction,
    setLinemenProduction,
    coalBaseProduction,
    coalProduction,
    setCoalProduction,
    gasBaseProduction,
    gasProduction,
    setGasProduction,
    solarBaseProduction,
    solarProduction,
    setSolarProduction,
    oilBaseProduction,
    oilProduction,
    setOilProduction,
    windBaseProduction,
    windProduction,
    setWindProduction,
    biomassBaseProduction,
    biomassProduction,
    setBiomassProduction,
    hydroBaseProduction,
    hydroProduction,
    setHydroProduction,
    nuclearBaseProduction,
    nuclearProduction,
    setNuclearProduction,

    linemenBaseCost,
    linemenCost,
    setLinemenCost,
    coalBaseCost,
    coalCost,
    setCoalCost,
    gasBaseCost,
    gasCost,
    setGasCost,
    solarBaseCost,
    solarCost,
    setSolarCost,
    oilBaseCost,
    oilCost,
    setOilCost,
    windBaseCost,
    windCost,
    setWindCost,
    biomassBaseCost,
    biomassCost,
    setBiomassCost,
    hydroBaseCost,
    hydroCost,
    setHydroCost,
    nuclearBaseCost,
    nuclearCost,
    setNuclearCost,

    upgrades,
    setUpgrades
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

    linemenBaseProduction: number;
    linemenProduction: number;
    setLinemenProduction: (production: number) => void;
    coalBaseProduction: number;
    coalProduction: number;
    setCoalProduction: (production: number) => void;
    gasBaseProduction: number;
    gasProduction: number;
    setGasProduction: (production: number) => void;
    solarBaseProduction: number;
    solarProduction: number;
    setSolarProduction: (production: number) => void;
    oilBaseProduction: number;
    oilProduction: number;
    setOilProduction: (production: number) => void;
    windBaseProduction: number;
    windProduction: number;
    setWindProduction: (production: number) => void;
    biomassBaseProduction: number;
    biomassProduction: number;
    setBiomassProduction: (production: number) => void;
    hydroBaseProduction: number;
    hydroProduction: number;
    setHydroProduction: (production: number) => void;
    nuclearBaseProduction: number;
    nuclearProduction: number;
    setNuclearProduction: (production: number) => void;

    linemenBaseCost: number;
    linemenCost: number;
    setLinemenCost: (cost: number) => void;
    coalBaseCost: number;
    coalCost: number;
    setCoalCost: (cost: number) => void;
    gasBaseCost: number;
    gasCost: number;
    setGasCost: (cost: number) => void;
    solarBaseCost: number;
    solarCost: number;
    setSolarCost: (cost: number) => void;
    oilBaseCost: number;
    oilCost: number;
    setOilCost: (cost: number) => void;
    windBaseCost: number;
    windCost: number;
    setWindCost: (cost: number) => void;
    biomassBaseCost: number;
    biomassCost: number;
    setBiomassCost: (cost: number) => void;
    hydroBaseCost: number;
    hydroCost: number;
    setHydroCost: (cost: number) => void;
    nuclearBaseCost: number;
    nuclearCost: number;
    setNuclearCost: (cost: number) => void;

    upgrades: Upgrade[];
    setUpgrades: (upgrades: Upgrade[]) => void;
}): JSX.Element {
    return (
        <div className="hub">
            {/* Upgrades and Events */}
            <div className="column">
                {/* Upgrades */}
                <div className="upgrades">
                    <ViewUpgrades
                        watts={watts}
                        setWatts={setWatts}
                        upgrades={upgrades}
                        setUpgrades={setUpgrades}
                    ></ViewUpgrades>
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

                        linemenBaseProduction={linemenBaseProduction}
                        linemenProduction={linemenProduction}
                        setLinemenProduction={setLinemenProduction}
                        coalBaseProduction={coalBaseProduction}
                        coalProduction={coalProduction}
                        setCoalProduction={setCoalProduction}
                        gasBaseProduction={gasBaseProduction}
                        gasProduction={gasProduction}
                        setGasProduction={setGasProduction}
                        solarBaseProduction={solarBaseProduction}
                        solarProduction={solarProduction}
                        setSolarProduction={setSolarProduction}
                        oilBaseProduction={oilBaseProduction}
                        oilProduction={oilProduction}
                        setOilProduction={setOilProduction}
                        windBaseProduction={windBaseProduction}
                        windProduction={windProduction}
                        setWindProduction={setWindProduction}
                        biomassBaseProduction={biomassBaseProduction}
                        biomassProduction={biomassProduction}
                        setBiomassProduction={setBiomassProduction}
                        hydroBaseProduction={hydroBaseProduction}
                        hydroProduction={hydroProduction}
                        setHydroProduction={setHydroProduction}
                        nuclearBaseProduction={nuclearBaseProduction}
                        nuclearProduction={nuclearProduction}
                        setNuclearProduction={setNuclearProduction}
                    
                        linemenBaseCost={linemenBaseCost}
                        linemenCost={linemenCost}
                        setLinemenCost={setLinemenCost}
                        coalBaseCost={coalBaseCost}
                        coalCost={coalCost}
                        setCoalCost={setCoalCost}
                        gasBaseCost={gasBaseCost}
                        gasCost={gasCost}
                        setGasCost={setGasCost}
                        solarBaseCost={solarBaseCost}
                        solarCost={solarCost}
                        setSolarCost={setSolarCost}
                        oilBaseCost={oilBaseCost}
                        oilCost={oilCost}
                        setOilCost={setOilCost}
                        windBaseCost={windBaseCost}
                        windCost={windCost}
                        setWindCost={setWindCost}
                        biomassBaseCost={biomassBaseCost}
                        biomassCost={biomassCost}
                        setBiomassCost={setBiomassCost}
                        hydroBaseCost={hydroBaseCost}
                        hydroCost={hydroCost}
                        setHydroCost={setHydroCost}
                        nuclearBaseCost={nuclearBaseCost}
                        nuclearCost={nuclearCost}
                        setNuclearCost={setNuclearCost}
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