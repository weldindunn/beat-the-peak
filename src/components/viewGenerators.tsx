import React from "react";
import { Generator } from "./generator";
import "./style/generators.css";

//Icons
import lineman from "../img/lineman_icon.png";
import coal_plant from "../img/Coal_Plant_Icon.png";
import gas_plant from "../img/Gas_Plant_Icon.png";
import solar_farm from "../img/Solar_Farm_Icon.png";
import oil_well from "../img/Oil_Well_Icon.png";
import wind_turbine from "../img/Wind_Turbine_Icon.png";

//Tooltip Icons
import hard_hat from "../img/Hard_Hat.png";
import coal_lump from "../img/coal_lump_alt.png";
import gas_symbol from "../img/Gas_Symbol.png";
import sun from "../img/Sun.png";
import oil_drop from "../img/Oil_Drop.png";
import wind_symbol from "../img/Wind_Symbol.png";

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
                tooltip_icon={hard_hat}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={linemen}
                generatorCost={linemenCost}
                generatorProduction={linemenProduction}
                description="Produces electricity by brute force"
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Coal Plant"
                icon={coal_plant}
                tooltip_icon={coal_lump}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={coalPlants}
                generatorCost={coalCost}
                generatorProduction={coalProduction}
                description="Burns coal to power steam engines"
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Gas Plant"
                icon={gas_plant}
                tooltip_icon={gas_symbol}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={gasPlants}
                generatorCost={gasCost}
                generatorProduction={gasProduction}
                description="Burns gas to power steam engines"
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Solar Farm"
                icon={solar_farm}
                tooltip_icon={sun}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={solarFarms}
                generatorCost={solarCost}
                generatorProduction={solarProduction}
                description="Harnaces the power of the sun to generate electricity"
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Oil Well"
                icon={oil_well}
                tooltip_icon={oil_drop}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={oilWells}
                generatorCost={oilCost}
                generatorProduction={oilProduction}
                description="Burns oil to power steam engines"
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Wind Turbine"
                icon={wind_turbine}
                tooltip_icon={wind_symbol}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={windTurbines}
                generatorCost={windCost}
                generatorProduction={windProduction}
                description="Uses wind to spin a turbine generator"
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Biomass Gassifier"
                icon={gas_plant}
                tooltip_icon={gas_symbol}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={biomassGassifiers}
                generatorCost={biomassCost}
                generatorProduction={biomassProduction}
                description="Burns biomass to power steam engines"
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Hydro Plant"
                icon={lineman}
                tooltip_icon={wind_symbol}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={hydroPlants}
                generatorCost={hydroCost}
                generatorProduction={hydroProduction}
                description="Uses water power to spin turbine generators"
                buyGenerator={buyGenerator}
            ></Generator>
            <Generator
                name="Nuclear Plant"
                icon={coal_plant}
                tooltip_icon={hard_hat}
                watts={watts}
                wattsPerSec={wattsPerSec}
                generators={nuclearPlants}
                generatorCost={nuclearCost}
                generatorProduction={nuclearProduction}
                description="Uses the fission of uranium and plutonium to heat steam engines"
                buyGenerator={buyGenerator}
            ></Generator>
        </div>
    )
}