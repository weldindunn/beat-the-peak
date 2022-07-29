import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import { numberConvertor } from "./utilities/numberConvertor";

export function Transporter({
    name,
    watts, 
    wattsPerSec,
    netWattsPerSec,
    totalTransportation,
    transporters,
    transporterCost,
    transporterTransportation,
    description,
    buyTransporter
} : {
    name: string,
    watts: number; 
    wattsPerSec: number;
    netWattsPerSec: number;
    totalTransportation: number;
    transporters: number;
    transporterCost: number;
    transporterTransportation: number;
    description: string;
    buyTransporter: (transporter: string) => void;
}): JSX.Element {
    return (
        <OverlayTrigger
            placement={"left"}
            overlay={
                <div className="generator-tooltip">
                    <div>
                        {/*<img src={tooltip_icon} alt={name}/>*/}
                        <span className="tooltip-name">{name}</span>
                        <span className="tooltip-cost">{numberConvertor(Math.round(transporterCost), false)}</span>
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
            <button className="transporter" onClick={() => buyTransporter(name)} disabled={watts < Math.round(transporterCost) || (((netWattsPerSec - transporterTransportation) < 0) && (transporterTransportation !== 0))}>
                <div className="transporter-icon">
                    {/*<img src={icon} alt={name.charAt(0)}></img>*/}
                </div>
                <div className="transporter-content">
                    <div className="transporter-title">
                        {
                            name.length > 13 ? (name.substring(0, 11) + "...") : (name)
                        }
                    </div>
                    <span className="transporter-cost">
                        {numberConvertor(Math.round(transporterCost), false)}
                    </span>
                    <div className="transporter-count">
                        {transporters}
                    </div>
                </div>
            </button>
        </OverlayTrigger>
    )
}