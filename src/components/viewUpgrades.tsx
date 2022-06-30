import React from "react";
import { Upgrade } from "../interfaces/upgrade";
import { UpgradeSquare } from "./upgradeSquare";

export function ViewUpgrades({
    watts,
    setWatts,
    upgrades,
    setUpgrades
}: {
    watts: number;
    setWatts: (watts: number) => void;
    upgrades: Upgrade[];
    setUpgrades: (upgrades: Upgrade[]) => void;
}): JSX.Element {
    return (
        <>
            <span>Upgrades</span>
            {
                upgrades.map((upgrade: Upgrade) => (
                    upgrade.unlocked && !upgrade.purchased ? (
                        <div key={upgrade.id}>
                            <UpgradeSquare
                                upgrade={upgrade}
                                upgrades={upgrades}
                                setUpgrades={setUpgrades}
                                watts={watts}
                                setWatts={setWatts}
                            ></UpgradeSquare>
                        </div>
                    ) : (<div></div>)
                ))
            }
        </>
    )
}