import React, { useState } from "react";
import { Upgrade } from "../interfaces/upgrade";
import { UpgradeSquare } from "./upgradeSquare";
import "./style/upgrades.css";

export function ViewUpgrades({
    watts,
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

    upgrades: Upgrade[];
    buyUpgrade: (upgrade: Upgrade) => void;
}): JSX.Element {
    const [isViewing, setViewing] = useState<boolean>(false);

    return (
        <>
            <div className="upgrades-header">
                <span className="upgrade-title">Upgrades</span>
                <button className="info-button" onClick={() => setViewing(!isViewing)}></button>
            </div>

            {
                isViewing ? (
                    <div className="purchased-upgrades">
                        <div className="subtitle">Purchased Upgrades</div>
                        {
                            upgrades.map((upgrade: Upgrade) => (
                                upgrade.purchased ? (
                                    <UpgradeSquare
                                        key={upgrade.id}
                                        watts={watts}
                                        upgrade={upgrade}
                                        buyUpgrade={buyUpgrade}
                                    />
                                ) : (<div key={upgrade.id}/>)
                            ))
                        }
                    </div>
                ) : (
                    <div className="available-upgrades">
                        <div className="subtitle">Available Upgrades</div>
                        {
                            upgrades.map((upgrade: Upgrade) => (
                                upgrade.unlocked && !upgrade.purchased ? (
                                    <UpgradeSquare
                                        key={upgrade.id}
                                        watts={watts}
                                        upgrade={upgrade}
                                        buyUpgrade={buyUpgrade}
                                    />
                                ) : (<div key={upgrade.id}/>)
                            ))

                        }
                    </div>
                )
            }
        </>
    )
}