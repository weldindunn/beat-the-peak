import React from "react";
import { Upgrade } from "../interfaces/upgrade";
import { UpgradeSquare } from "./upgradeSquare";

export function ViewUpgrades({
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
    buyUpgrade
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
    buyUpgrade: (upgrade: Upgrade) => void;
}): JSX.Element {
    return (
        <>
            <span>Upgrades</span>
            {
                upgrades.map((upgrade: Upgrade) => (
                    upgrade.unlocked && !upgrade.purchased ? (
                        <UpgradeSquare
                            key={upgrade.id}
                            watts={watts}
                            upgrade={upgrade}
                            buyUpgrade={buyUpgrade}
                        ></UpgradeSquare>
                    ) : (<div></div>)
                ))
            }
        </>
    )
}