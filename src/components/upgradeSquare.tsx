import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Upgrade } from "../interfaces/upgrade";
import { UpgradeHoverBox } from "./upgradeHoverBox";
import cursor from "../img/cursor.png";
import hard_hat from "../img/Hard_Hat.png";
import coal_lump from "../img/coal_lump_alt.png";
import gas_symbol from "../img/Gas_Symbol.png";
import sun from "../img/Sun.png";

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
                        ) : upgrade.generator === "Lineman" ? (
                            <img src={hard_hat} alt={upgrade.generator}/>
                        ) : upgrade.generator === "Coal Plant" ? (
                            <img src={coal_lump} alt={upgrade.generator}/>
                        ) : upgrade.generator === "Gas Plant" ? (
                            <img src={gas_symbol} alt={upgrade.generator}/>
                        ) : upgrade.generator === "Solar Farm" ? (
                            <img src={sun} alt={upgrade.generator}/>
                        ) : (
                            <span>{upgrade.generator.charAt(0)}</span>
                        )
                    }
                </button>
            </OverlayTrigger>
        </>
    )
}