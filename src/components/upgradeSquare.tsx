import React from "react";
import { Upgrade } from "../interfaces/upgrade";

export function UpgradeSquare({
    watts, 
    upgrade,
    buyUpgrade
} : {
    watts: number;
    upgrade: Upgrade;
    buyUpgrade: (upgrade: Upgrade) => void;
}): JSX.Element {
    return (
        <>
            <button className="upgrade" onClick={() => buyUpgrade(upgrade)} disabled={watts < Math.round(upgrade.cost)}>
                {upgrade.name}
            </button>
        </>
    )
}