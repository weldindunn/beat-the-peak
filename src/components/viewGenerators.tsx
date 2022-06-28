import React, { useState } from "react";
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

    /*  ===============
        Generator Stats
        =============== */
    const linemenBaseCost = 15;
    const linemenProduction = 1;
    const [linemenCost, setLinemenCost] = useState<number>((linemenBaseCost * Math.pow(1.15, linemen)));

    const coalBaseCost = 250;
    const coalProduction = 10;
    const [coalCost, setCoalCost] = useState<number>((coalBaseCost * Math.pow(1.15, coalPlants)));

    const gasBaseCost = 2600;
    const gasProduction = 80;
    const [gasCost, setGasCost] = useState<number>((gasBaseCost * Math.pow(1.15, gasPlants)));

    const solarBaseCost = 28000;
    const solarProduction = 470;
    const [solarCost, setSolarCost] = useState<number>((solarBaseCost * Math.pow(1.15, solarFarms)));

    const oilBaseCost = 300000;
    const oilProduction = 2600;
    const [oilCost, setOilCost] = useState<number>((oilBaseCost * Math.pow(1.15, oilWells)));

    const windBaseCost = 3200000;
    const windProduction = 14000;
    const [windCost, setWindCost] = useState<number>((windBaseCost * Math.pow(1.15, windTurbines)));

    const biomassBaseCost = 46000000;
    const biomassProduction = 78000;
    const [biomassCost, setBiomassCost] = useState<number>((biomassBaseCost * Math.pow(1.15, biomassGassifiers)));

    const hydroBaseCost = 759000000;
    const hydroProduction = 440000;
    const [hydroCost, setHydroCost] = useState<number>((hydroBaseCost * Math.pow(1.15, hydroPlants)));

    const nuclearBaseCost = 12000000000;
    const nuclearProduction = 2600000;
    const [nuclearCost, setNuclearCost] = useState<number>((nuclearBaseCost * Math.pow(1.15, nuclearPlants)));

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