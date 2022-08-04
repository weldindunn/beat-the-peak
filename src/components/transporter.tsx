import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import { numberConvertor } from "./utilities/numberConvertor";
import { sellingCost } from "./utilities/sellingCost";

export function Transporter({
    name,
    tooltip_icon,
    watts, 
    wattsPerSec,
    netWattsPerSec,
    totalWatts,
    totalTransportation,
    transporters,
    transporterCost,
    transporterTransportation,
    description,
    quote,
    availabilityThreshold,
    isBuying,
    tradeQuantity,
    priceModifier,
    buySellTransporter
} : {
    name: string;
    tooltip_icon: string;
    watts: number; 
    wattsPerSec: number;
    netWattsPerSec: number;
    totalWatts: number;
    totalTransportation: number;
    transporters: number;
    transporterCost: number;
    transporterTransportation: number;
    description: string;
    quote: string;
    availabilityThreshold: number;
    isBuying: boolean;
    tradeQuantity: number;
    priceModifier: number;
    buySellTransporter: (transporter: string, tradeQuantity: number, transporterCost: number, isBuying: boolean) => void;
}): JSX.Element {
    return (
        totalWatts >= availabilityThreshold ? (
            <OverlayTrigger
                placement={"left"}
                overlay={
                    <div className={transporters > 0 ? "transporter-tooltip" : "transporter-tooltip-two"}>
                        <div className="transporter-tooltip-top">
                            <img src={tooltip_icon} alt={name}/>
                            <span className="transporter-tooltip-name">
                                {
                                    name.length > 14 ? (name.substring(0, 12) + "...") : (name)
                                }
                            </span>
                            {
                                isBuying ? (
                                    <span className="transporter-tooltip-cost">{numberConvertor(Math.round(transporterCost * priceModifier), false)}</span>
                                ) : (
                                    <span className="transporter-tooltip-cost">{numberConvertor(Math.round(sellingCost(transporterCost, tradeQuantity)), false)}</span>
                                )
                            }
                        </div>
                        <span className="transporter-tooltip-description">{description}</span>
                        <span className="transporter-tooltip-quote">{"\""}{quote}{"\""}</span>
                        {
                            transporters > 0 ? (
                                <div>
                                    <span className="tooltip-production">
                                        Each {name.toLowerCase()} transports {numberConvertor(Math.round(transporterTransportation/transporters), true)} per second
                                        <br/>
                                        Your {name.toLowerCase()}s transport {numberConvertor(transporterTransportation, true)} per second, {Math.round(transporterTransportation/totalTransportation * 100)}% of your total watts transported per second
                                    </span>
                                </div>
                            ) : (
                                <></>
                            )
                        }
                    </div>
                }
            >
                <button
                    className="transporter"
                    onClick={() => {
                        if (isBuying) {
                            buySellTransporter(name, tradeQuantity, transporterCost * priceModifier, isBuying)
                        } else {
                            buySellTransporter(name, tradeQuantity, sellingCost(transporterCost, tradeQuantity), false)
                        }
                    }}
                    disabled={((watts < Math.round(transporterCost) || (((netWattsPerSec - (transporterTransportation/transporters)) < 0) && (transporterTransportation/transporters !== 0))) && isBuying) || ((transporters < tradeQuantity) && !isBuying)}
                >
                    <div className="transporter-icon">
                        {/*<img src={icon} alt={name.charAt(0)}></img>*/}
                    </div>
                    <div className="transporter-content">
                        <div className="transporter-title">
                            {
                                name.length > 13 ? (name.substring(0, 11) + "...") : (name)
                            }
                        </div>
                        {
                            isBuying ? (
                                <span className="transporter-cost">
                                    {numberConvertor(Math.round(transporterCost * priceModifier), false)}
                                </span>
                            ) : (
                                <span className="transporter-cost">
                                    {numberConvertor(Math.round(sellingCost(transporterCost, tradeQuantity)), false)}
                                </span>
                            )
                        }
                        <div className="transporter-count">
                            {transporters}
                        </div>
                    </div>
                </button>
            </OverlayTrigger>
        ) : (
            <></>
        )
    )
}