import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import { numberConvertor } from "./utilities/numberConvertor";
import { sellingCost } from "./utilities/sellingCost";

export function Transporter({
    name,
    watts, 
    wattsPerSec,
    netWattsPerSec,
    totalWatts,
    totalTransportation,
    transporters,
    transporterCost,
    transporterTransportation,
    description,
    availabilityThreshold,
    isBuying,
    tradeQuantity,
    priceModifier,
    buySellTransporter
} : {
    name: string,
    watts: number; 
    wattsPerSec: number;
    netWattsPerSec: number;
    totalWatts: number;
    totalTransportation: number;
    transporters: number;
    transporterCost: number;
    transporterTransportation: number;
    description: string;
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
                    <div className="generator-tooltip">
                        <div>
                            {/*<img src={tooltip_icon} alt={name}/>*/}
                            <span className="tooltip-name">{name}</span>
                            {
                                isBuying ? (
                                    <span className="tooltip-cost">{numberConvertor(Math.round(transporterCost * priceModifier), false)}</span>
                                ) : (
                                    <span className="tooltip-cost">{numberConvertor(Math.round(sellingCost(transporterCost, tradeQuantity)), false)}</span>
                                )
                            }
                        </div>
                        <div>
                            <span className="tooltip-description">{description}</span>
                        </div>
                        <div>
                            <span className="tooltip-production">
                                Each {name.toLowerCase()} transports {numberConvertor(Math.round(transporterTransportation/transporters), true)} per second
                                <br/>
                                Your {name.toLowerCase()}s transport {numberConvertor(transporterTransportation, true)} per second, {Math.round(transporterTransportation/totalTransportation * 100)}% of your total watts transported per second
                            </span>
                        </div>
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
                    disabled={watts < Math.round(transporterCost) || (((netWattsPerSec - transporterTransportation) < 0) && (transporterTransportation !== 0))}
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