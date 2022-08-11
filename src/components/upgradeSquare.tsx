import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import { Upgrade } from "../interfaces/upgrade";
import { numberConvertor } from "./utilities/numberConvertor";

import cursor from "../img/cursor.png";
import hard_hat from "../img/Hard_Hat.png";
import coal_lump from "../img/coal_lump_alt.png";
import gas_symbol from "../img/Gas_Symbol.png";
import sun from "../img/Sun.png";
import oil_drop from "../img/Oil_Drop.png";
import wind_symbol from "../img/Wind_Symbol.png";
import wood_chips from "../img/Wood_Chips.png";
import water_wheel from "../img/Water_Wheel.png";
import atom from "../img/Atom.png";

import battery_logo from "../img/Battery_Logo.png";
import meter_icon from "../img/Meter_Tooltip_Icon.png";
import utility_pole_icon from "../img/Utility_Pole_Tooltip_Icon.png";
import transformer_logo from "../img/Transformer_Logo.png";
import ACDC from "../img/ACDC.png";

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
                    <div className="upgrade-tooltip">
                        <div>
                            { //Image
                                upgrade.element === "Click" ? (
                                    <img src={cursor} alt={upgrade.element}/>
                                ) : upgrade.element === "Lineworker" ? (
                                    <img src={hard_hat} alt={upgrade.element}/>
                                ) : upgrade.element === "Coal Plant" ? (
                                    <img src={coal_lump} alt={upgrade.element}/>
                                ) : upgrade.element === "Gas Plant" ? (
                                    <img src={gas_symbol} alt={upgrade.element}/>
                                ) : upgrade.element === "Solar Farm" ? (
                                    <img src={sun} alt={upgrade.element}/>
                                ) : upgrade.element === "Oil Well" ? (
                                    <img src={oil_drop} alt={upgrade.element}/>
                                ) : upgrade.element === "Wind Turbine" ? (
                                    <img src={wind_symbol} alt={upgrade.element}/>
                                ) : upgrade.element === "Biomass Gasifier" ? (
                                    <img src={wood_chips} alt={upgrade.element}/>
                                ) : upgrade.element === "Hydro Plant" ? (
                                    <img src={water_wheel} alt={upgrade.element}/>
                                ) : upgrade.element === "Nuclear Plant" ? (
                                    <img src={atom} alt={upgrade.element}/>
                                ) : upgrade.element === "Battery" ? (
                                    <img src={battery_logo} alt={upgrade.element}/>
                                ) : upgrade.element === "Meter" ? (
                                    <img src={meter_icon} alt={upgrade.element}/>
                                ) : upgrade.element === "Utility Pole" ? (
                                    <img src={utility_pole_icon} alt={upgrade.element}/>
                                ) : upgrade.element === "Transformer" ? (
                                    <img src={transformer_logo} alt={upgrade.element}/>
                                ) : upgrade.element === "Substation" ? (
                                    <img src={ACDC} alt={upgrade.element}/>
                                ) : (
                                    <span>{upgrade.element.charAt(0)}</span>
                                )
                            }
                            <span className="name">{upgrade.name}</span>
                            <span className="cost">{numberConvertor(Math.round(upgrade.cost), false)}</span>
                        </div>
                        <span className="description">{upgrade.description}</span>
                    </div>
                }
            >
                <button className="upgrade" onClick={() => buyUpgrade(upgrade)} disabled={watts < Math.round(upgrade.cost) || upgrade.purchased}>
                    {
                        upgrade.element === "Click" ? (
                            <img src={cursor} alt={upgrade.element}/>
                        ) : upgrade.element === "Lineworker" ? (
                            <img src={hard_hat} alt={upgrade.element}/>
                        ) : upgrade.element === "Coal Plant" ? (
                            <img src={coal_lump} alt={upgrade.element}/>
                        ) : upgrade.element === "Gas Plant" ? (
                            <img src={gas_symbol} alt={upgrade.element}/>
                        ) : upgrade.element === "Solar Farm" ? (
                            <img src={sun} alt={upgrade.element}/>
                        ) : upgrade.element === "Oil Well" ? (
                            <img src={oil_drop} alt={upgrade.element}/>
                        ) : upgrade.element === "Wind Turbine" ? (
                            <img src={wind_symbol} alt={upgrade.element}/>
                        ) : upgrade.element === "Biomass Gasifier" ? (
                            <img src={wood_chips} alt={upgrade.element}/>
                        ) : upgrade.element === "Hydro Plant" ? (
                            <img src={water_wheel} alt={upgrade.element}/>
                        ) : upgrade.element === "Nuclear Plant" ? (
                            <img src={atom} alt={upgrade.element}/>
                        ) : upgrade.element === "Battery" ? (
                            <img src={battery_logo} alt={upgrade.element}/>
                        ) : upgrade.element === "Meter" ? (
                            <img src={meter_icon} alt={upgrade.element}/>
                        ) : upgrade.element === "Utility Pole" ? (
                            <img src={utility_pole_icon} alt={upgrade.element}/>
                        ) : upgrade.element === "Transformer" ? (
                            <img src={transformer_logo} alt={upgrade.element}/>
                        ) : upgrade.element === "Substation" ? (
                            <img src={ACDC} alt={upgrade.element}/>
                        ) : (
                            <span>{upgrade.element.charAt(0)}</span>
                        )
                    }
                </button>
            </OverlayTrigger>
        </>
    )
}