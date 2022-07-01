import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Upgrade } from "../interfaces/upgrade";
import { UpgradeHoverBox } from "./upgradeHoverBox";
import cursor from "../img/cursor.png";

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
            <OverlayTrigger
                placement={"right"}
                overlay={
                    <Tooltip>
                        <UpgradeHoverBox upgrade={upgrade}></UpgradeHoverBox>
                    </Tooltip>
                }
            >
                <button className="upgrade" onClick={() => buyUpgrade(upgrade)} disabled={watts < Math.round(upgrade.cost)}>
                    {
                        upgrade.generator === "Click" ? (
                            <img src={cursor} alt={upgrade.generator}/>
                        ) : (
                            <span>{upgrade.generator.charAt(0)}</span>
                        )
                    }
                </button>
            </OverlayTrigger>
        </>
    )
}