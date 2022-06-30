import React from "react";
import { Upgrade } from "../interfaces/upgrade";

export function UpgradeSquare({
    upgrade,
    upgrades,
    setUpgrades,
    watts,
    setWatts
}: {
    upgrade: Upgrade;
    upgrades: Upgrade[];
    setUpgrades: (upgrades: Upgrade[]) => void;
    watts: number;
    setWatts: (watts: number) => void;
}): JSX.Element {

    function buyUpgrade(): void {
        setUpgrades(upgrades.map((upgrade: Upgrade): Upgrade => ({...upgrade, purchased: true})));
        setWatts(watts - upgrade.cost);
    }

    return (
        <>
            <button className="upgrade" onClick={buyUpgrade} disabled={watts < Math.round(upgrade.cost)}>
                {upgrade.name}
            </button>
        </>
    )
}