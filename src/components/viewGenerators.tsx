import React from "react";
import { Generator } from "./generator";
import "./style/generators.css";
import lineman from "../img/lineman_icon.png";
import coal_plant from "../img/Coal_Plant_Icon.png";
import gas_plant from "../img/Gas_Plant_Icon.png";
import solar_farm from "../img/Solar_Farm_Icon.png";

export function ViewGenerators({
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

    buyGenerator
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

    buyGenerator: (generator: string) => void;
}): JSX.Element {
    return (
        <div className="generators">
            <div className="title">
                <span>Generators</span>
            </div>
            <Generator
                name="Lineman"
                icon={lineman}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={linemen}
                generatorCost={linemenCost}
                generatorProduction={linemenProduction}
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Coal Plant"
                icon={coal_plant}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={coalPlants}
                generatorCost={coalCost}
                generatorProduction={coalProduction}
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Gas Plant"
                icon={gas_plant}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={gasPlants}
                generatorCost={gasCost}
                generatorProduction={gasProduction}
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Solar Farm"
                icon={solar_farm}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={solarFarms}
                generatorCost={solarCost}
                generatorProduction={solarProduction}
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Oil Well"
                icon={gas_plant}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={oilWells}
                generatorCost={oilCost}
                generatorProduction={oilProduction}
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Wind Turbine"
                icon={lineman}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={windTurbines}
                generatorCost={windCost}
                generatorProduction={windProduction}
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Biomass Gassifier"
                icon={gas_plant}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={biomassGassifiers}
                generatorCost={biomassCost}
                generatorProduction={biomassProduction}
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Hydro Plant"
                icon={lineman}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={hydroPlants}
                generatorCost={hydroCost}
                generatorProduction={hydroProduction}
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Nuclear Plant"
                icon={coal_plant}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={nuclearPlants}
                generatorCost={nuclearCost}
                generatorProduction={nuclearProduction}
                buyGenerator={buyGenerator}
            ></Generator>
        </div>
    )
}