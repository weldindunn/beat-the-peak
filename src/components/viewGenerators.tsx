import React from "react";
import { Generator } from "./generator";

export function ViewGenerators({
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
    setNuclearCost
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
}): JSX.Element {
    return (
        <div className="generators">
            <span>Generators</span>
            <Generator
                name="Lineman"
                watts={watts}
                setWatts={setWatts}
                wattsPerSec={wattsPerSec}
                setWattsPerSec={setWattsPerSec}
                generators={linemen}
                setGenerators={setLinemen}
                costBase={linemenBaseCost}
                generatorCost={linemenCost}
                setGeneratorCost={setLinemenCost}
                generatorProduction={linemenProduction}
            ></Generator>
            <Generator
                name="Coal Plant"
                watts={watts}
                setWatts={setWatts}
                wattsPerSec={wattsPerSec}
                setWattsPerSec={setWattsPerSec}
                generators={coalPlants}
                setGenerators={setCoalPlants}
                costBase={coalBaseCost}
                generatorCost={coalCost}
                setGeneratorCost={setCoalCost}
                generatorProduction={coalProduction}
            ></Generator>
            <Generator
                name="Gas Plant"
                watts={watts}
                setWatts={setWatts}
                wattsPerSec={wattsPerSec}
                setWattsPerSec={setWattsPerSec}
                generators={gasPlants}
                setGenerators={setGasPlants}
                costBase={gasBaseCost}
                generatorCost={gasCost}
                setGeneratorCost={setGasCost}
                generatorProduction={gasProduction}
            ></Generator>
            <Generator
                name="Solar Farm"
                watts={watts}
                setWatts={setWatts}
                wattsPerSec={wattsPerSec}
                setWattsPerSec={setWattsPerSec}
                generators={solarFarms}
                setGenerators={setSolarFarms}
                costBase={solarBaseCost}
                generatorCost={solarCost}
                setGeneratorCost={setSolarCost}
                generatorProduction={solarProduction}
            ></Generator>
            <Generator
                name="Oil Well"
                watts={watts}
                setWatts={setWatts}
                wattsPerSec={wattsPerSec}
                setWattsPerSec={setWattsPerSec}
                generators={oilWells}
                setGenerators={setOilWells}
                costBase={oilBaseCost}
                generatorCost={oilCost}
                setGeneratorCost={setOilCost}
                generatorProduction={oilProduction}
            ></Generator>
            <Generator
                name="Wind Turbine"
                watts={watts}
                setWatts={setWatts}
                wattsPerSec={wattsPerSec}
                setWattsPerSec={setWattsPerSec}
                generators={windTurbines}
                setGenerators={setWindTurbines}
                costBase={windBaseCost}
                generatorCost={windCost}
                setGeneratorCost={setWindCost}
                generatorProduction={windProduction}
            ></Generator>
            <Generator
                name="Biomass Gassifier"
                watts={watts}
                setWatts={setWatts}
                wattsPerSec={wattsPerSec}
                setWattsPerSec={setWattsPerSec}
                generators={biomassGassifiers}
                setGenerators={setBiomassGassifiers}
                costBase={biomassBaseCost}
                generatorCost={biomassCost}
                setGeneratorCost={setBiomassCost}
                generatorProduction={biomassProduction}
            ></Generator>
            <Generator
                name="Hydro Plant"
                watts={watts}
                setWatts={setWatts}
                wattsPerSec={wattsPerSec}
                setWattsPerSec={setWattsPerSec}
                generators={hydroPlants}
                setGenerators={setHydroPlants}
                costBase={hydroBaseCost}
                generatorCost={hydroCost}
                setGeneratorCost={setHydroCost}
                generatorProduction={hydroProduction}
            ></Generator>
            <Generator
                name="Nuclear Plant"
                watts={watts}
                setWatts={setWatts}
                wattsPerSec={wattsPerSec}
                setWattsPerSec={setWattsPerSec}
                generators={nuclearPlants}
                setGenerators={setNuclearPlants}
                costBase={nuclearBaseCost}
                generatorCost={nuclearCost}
                setGeneratorCost={setNuclearCost}
                generatorProduction={nuclearProduction}
            ></Generator>
        </div>
    )
}