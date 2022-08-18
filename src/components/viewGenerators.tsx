import React, { useState } from "react";
import { Generator } from "./generator";
import { BulkBar } from "./bulkBar";
import "./style/generators.css";

//Icons
import lineman from "../img/lineman_icon.png";
import coal_plant from "../img/Coal_Plant_Icon.png";
import gas_plant from "../img/Gas_Plant_Icon.png";
import solar_farm from "../img/Solar_Farm_Icon.png";
import oil_well from "../img/Oil_Well_Icon.png";
import wind_turbine from "../img/Wind_Turbine_Icon.png";
import biomass_gasifier from "../img/Biomass_Gasifier_Icon.png";
import dam from "../img/Hydro_Plant_Icon.png";
import nuclear_plant from "../img/Nuclear_Plant_Icon.png";

//Tooltip Icons
import hard_hat from "../img/Hard_Hat.png";
import coal_lump from "../img/coal_lump_alt.png";
import gas_symbol from "../img/Gas_Symbol.png";
import sun from "../img/Sun.png";
import oil_drop from "../img/Oil_Drop.png";
import wind_symbol from "../img/Wind_Symbol.png";
import wood_chips from "../img/Wood_Chips.png";
import water_wheel from "../img/Water_Wheel.png";
import atom from "../img/Atom.png";

export function ViewGenerators({
    watts,
    totalWatts,
    wattsPerSec,

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

    buySellGenerator,
    setViewingGenerators
} : {
    watts: number; 
    totalWatts: number;
    wattsPerSec: number;

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

    buySellGenerator: (generator: string, tradeQuantity: number, generatorCost: number, isBuying: boolean) => void;
    setViewingGenerators: (isViewingGenerators: boolean) => void;
}): JSX.Element {

    const [isBuying, setBuying] = useState<boolean>(true);
    const [tradeQuantity, setTradeQuantity] = useState<number>(1);
    const [priceModifier, setPriceModifier] = useState<number>(1);

    return (
        <div className="generators">
            <div className="generators-header">
                <span>Generators</span>
                <button className="switch-button-bottom" onClick={() => setViewingGenerators(false)}></button>
            </div>
            <BulkBar
                isBuying={isBuying}
                tradeQuantity={tradeQuantity}
                setBuying={setBuying}
                setTradeQuantity={setTradeQuantity}
                setPriceModifier={setPriceModifier}
            />
            <Generator
                name="Lineworker"
                icon={lineman}
                tooltip_icon={hard_hat}
                watts={watts}
                wattsPerSec={wattsPerSec}
                totalWatts={totalWatts}
                generators={linemen}
                generatorCost={linemenCost}
                generatorProduction={linemenProduction}
                description="Produces electricity by brute force"
                quote="I'd rather have 1% of the effort of 100 men than 100% of my own effort"
                availabilityThreshold={0}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellGenerator={buySellGenerator}
            />
            <Generator
                name="Coal Plant"
                icon={coal_plant}
                tooltip_icon={coal_lump}
                watts={watts}
                wattsPerSec={wattsPerSec}
                totalWatts={totalWatts}
                generators={coalPlants}
                generatorCost={coalCost}
                generatorProduction={coalProduction}
                description="Burns coal to power steam engines"
                quote="A diamond is nothing but a chunk of coal that did well under pressure"
                availabilityThreshold={0}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellGenerator={buySellGenerator}
            />
            <Generator
                name="Gas Plant"
                icon={gas_plant}
                tooltip_icon={gas_symbol}
                watts={watts}
                wattsPerSec={wattsPerSec}
                totalWatts={totalWatts}
                generators={gasPlants}
                generatorCost={gasCost}
                generatorProduction={gasProduction}
                description="Burns gas to power steam engines"
                quote="Gas is the new coal"
                availabilityThreshold={coalCost}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellGenerator={buySellGenerator}
            />
            <Generator
                name="Solar Farm"
                icon={solar_farm}
                tooltip_icon={sun}
                watts={watts}
                wattsPerSec={wattsPerSec}
                totalWatts={totalWatts}
                generators={solarFarms}
                generatorCost={solarCost}
                generatorProduction={solarProduction}
                description="Harnaces the power of the sun to generate electricity"
                quote="Don't blame it on the sunshine"
                availabilityThreshold={gasCost}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellGenerator={buySellGenerator}
            />
            <Generator
                name="Oil Well"
                icon={oil_well}
                tooltip_icon={oil_drop}
                watts={watts}
                wattsPerSec={wattsPerSec}
                totalWatts={totalWatts}
                generators={oilWells}
                generatorCost={oilCost}
                generatorProduction={oilProduction}
                description="Burns oil to power steam engines"
                quote="There will be blood"
                availabilityThreshold={solarCost}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellGenerator={buySellGenerator}
            />
            <Generator
                name="Wind Turbine"
                icon={wind_turbine}
                tooltip_icon={wind_symbol}
                watts={watts}
                wattsPerSec={wattsPerSec}
                totalWatts={totalWatts}
                generators={windTurbines}
                generatorCost={windCost}
                generatorProduction={windProduction}
                description="Uses wind to spin a turbine generator"
                quote="It is easy to see that thou art not used to this business of adventures"
                availabilityThreshold={oilCost}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellGenerator={buySellGenerator}
            />
            <Generator
                name="Biomass Gasifier"
                icon={biomass_gasifier}
                tooltip_icon={wood_chips}
                watts={watts}
                wattsPerSec={wattsPerSec}
                totalWatts={totalWatts}
                generators={biomassGasifiers}
                generatorCost={biomassCost}
                generatorProduction={biomassProduction}
                description="Burns biomass to power steam engines"
                quote="Tree powers, activate!"
                availabilityThreshold={windCost}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellGenerator={buySellGenerator}
            />
            <Generator
                name="Hydro Plant"
                icon={dam}
                tooltip_icon={water_wheel}
                watts={watts}
                wattsPerSec={wattsPerSec}
                totalWatts={totalWatts}
                generators={hydroPlants}
                generatorCost={hydroCost}
                generatorProduction={hydroProduction}
                description="Uses water power to spin turbine generators"
                quote="What have the Romans ever done for us!"
                availabilityThreshold={biomassCost}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellGenerator={buySellGenerator}
            />
            <Generator
                name="Nuclear Plant"
                icon={nuclear_plant}
                tooltip_icon={atom}
                watts={watts}
                wattsPerSec={wattsPerSec}
                totalWatts={totalWatts}
                generators={nuclearPlants}
                generatorCost={nuclearCost}
                generatorProduction={nuclearProduction}
                description="Uses the fission of uranium and plutonium to heat steam engines"
                quote="One heck of a way to boil water"
                availabilityThreshold={hydroCost}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellGenerator={buySellGenerator}
            />
        </div>
    )
}