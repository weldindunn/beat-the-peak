import React, { useState } from "react";
import { Upgrade } from "../interfaces/upgrade";
import { UpgradeSquare } from "./upgradeSquare";
import { upgradeScreener } from "./utilities/upgradeScreener";
import "./style/upgrades.css";

export function ViewUpgrades({
    watts,
    wattsPerSec,

    clicks,
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
    buyUpgrade
} : {
    watts: number; 
    wattsPerSec: number;

    clicks: number;
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
    buyUpgrade: (upgrade: Upgrade) => void;
}): JSX.Element {
    const [isViewing, setViewing] = useState<boolean>(false);

    return (
        <>
            <div className="upgrades-header">
                <span>Upgrades</span>
                <button className={isViewing ? ("switch-button-top") : ("switch-button-bottom")} onClick={() => setViewing(!isViewing)}></button>
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
                                upgradeScreener(upgrade, clicks, linemen, coalPlants, gasPlants, solarFarms, oilWells, windTurbines, biomassGasifiers, hydroPlants, nuclearPlants, batteries, meters, phonePoles, transformers, undergroundCables, powerTowers, substations) && !upgrade.purchased ? (
                                    <UpgradeSquare
                                        key={upgrade.id}
                                        watts={watts}
                                        upgrade={upgrade}
                                        buyUpgrade={buyUpgrade}
                                    />
                                ) : (
                                    <div key={upgrade.id}/>
                                )
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}