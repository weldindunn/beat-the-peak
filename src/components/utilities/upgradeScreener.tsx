import { Upgrade } from "../../interfaces/upgrade";

//Checks to see if the prerequisities for an upgrade to be unlocked are fulfilled, and returns the result
export function upgradeScreener(
    upgrade: Upgrade,
    clicks: number,
    linemen: number,
    coalPlants: number,
    gasPlants: number,
    solarFarms: number,
    oilWells: number,
    windTurbines: number,
    biomassGasifiers: number,
    hydroPlants: number,
    nuclearPlants: number,

    batteries: number,
    meters: number,
    powerPoles: number,
    transformers: number,
    undergroundCables: number,
    powerTowers: number,
    substations: number
): boolean {
    let result = false;

    if (upgrade.element === "Click" && clicks >= upgrade.unlockThreshold) { result = true }
    else  if (upgrade.element === "Lineworker" && linemen >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Coal Plant" && coalPlants >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Gas Plant" && gasPlants >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Solar Farm" && solarFarms >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Oil Well" && oilWells >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Wind Turbine" && windTurbines >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Biomass Gasifier" && biomassGasifiers >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Hydro Plant" && hydroPlants >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Nuclear Plant" && nuclearPlants >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Battery" && batteries >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Meter" && meters >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Utility Pole" && powerPoles >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Transformer" && transformers >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Underground Cable" && undergroundCables >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Transmission Tower" && powerTowers >= upgrade.unlockThreshold) { result = true }
    else if (upgrade.element === "Substation" && substations >= upgrade.unlockThreshold) { result = true }

    return result;
}