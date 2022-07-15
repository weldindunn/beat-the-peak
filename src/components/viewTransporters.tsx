import React from "react";
import { Transporter } from "./transporter";
import "./style/transporters.css";

export function ViewTransporters({
    watts,
    wattsPerSec,
    buyTransporter,

    batteries,
    meters,
    phonePoles,
    transformers,
    undergroundCables,
    powerTowers,
    substations,

    batteryTransportation,
    meterTransportation,
    phonePoleTransportation,
    transformerTransportation,
    undergroundCableTransportation,
    powerTowerTransportation,
    substationTransportation,

    batteryCost,
    meterCost,
    phonePoleCost,
    transformerCost,
    undergroundCableCost,
    powerTowerCost,
    substationCost
} : {
    watts: number; 
    wattsPerSec: number;
    buyTransporter: (transporter: string) => void;

    batteries: number;
    meters: number;
    phonePoles: number;
    transformers: number;
    undergroundCables: number;
    powerTowers: number;
    substations: number;

    batteryTransportation: number;
    meterTransportation: number;
    phonePoleTransportation: number;
    transformerTransportation: number;
    undergroundCableTransportation: number;
    powerTowerTransportation: number;
    substationTransportation: number;

    batteryCost: number;
    meterCost: number;
    phonePoleCost: number;
    transformerCost: number;
    undergroundCableCost: number;
    powerTowerCost: number;
    substationCost: number;
}): JSX.Element {
    return (
        <div className="transporters">
            <div className="title">
                <span>Transporters</span>
            </div>
            <Transporter
                name="Battery"
                watts={watts}
                wattsPerSec={wattsPerSec}
                transporters={batteries}
                transporterCost={batteryCost}
                transporterTransportation={batteryTransportation}
                description="Stores electricity in a small portable form"
                buyTransporter={buyTransporter}
            ></Transporter>
            <Transporter
                name="Meter"
                watts={watts}
                wattsPerSec={wattsPerSec}
                transporters={meters}
                transporterCost={meterCost}
                transporterTransportation={meterTransportation}
                description=""
                buyTransporter={buyTransporter}
            ></Transporter>
            <Transporter
                name="Phone Pole"
                watts={watts}
                wattsPerSec={wattsPerSec}
                transporters={phonePoles}
                transporterCost={phonePoleCost}
                transporterTransportation={phonePoleTransportation}
                description="Carries electricity across wooden poles"
                buyTransporter={buyTransporter}
            ></Transporter>
            <Transporter
                name="Transformer"
                watts={watts}
                wattsPerSec={wattsPerSec}
                transporters={transformers}
                transporterCost={transformerCost}
                transporterTransportation={transformerTransportation}
                description="Converts AC to DC"
                buyTransporter={buyTransporter}
            ></Transporter>
            <Transporter
                name="Underground Cable"
                watts={watts}
                wattsPerSec={wattsPerSec}
                transporters={undergroundCables}
                transporterCost={undergroundCableCost}
                transporterTransportation={undergroundCableTransportation}
                description="Carries electricty through buried cables, protected from deadly nature"
                buyTransporter={buyTransporter}
            ></Transporter>
            <Transporter
                name="Power Tower"
                watts={watts}
                wattsPerSec={wattsPerSec}
                transporters={powerTowers}
                transporterCost={powerTowerCost}
                transporterTransportation={powerTowerTransportation}
                description="Carries electricity across long distances via large metal towers"
                buyTransporter={buyTransporter}
            ></Transporter>
            <Transporter
                name="Substation"
                watts={watts}
                wattsPerSec={wattsPerSec}
                transporters={substations}
                transporterCost={substationCost}
                transporterTransportation={substationTransportation}
                description=""
                buyTransporter={buyTransporter}
            ></Transporter>
        </div>
    )
}