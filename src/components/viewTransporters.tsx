import React, { useState } from "react";
import { Transporter } from "./transporter";
import { BulkBar } from "./bulkBar";
import "./style/transporters.css";

export function ViewTransporters({
    watts,
    wattsPerSec,
    netWattsPerSec,
    totalTransportation,
    buySellTransporter,

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
    netWattsPerSec: number;
    totalTransportation: number;
    buySellTransporter: (transporter: string, tradeQuantity: number, transporterCost: number, isBuying: boolean) => void;

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

    const [isBuying, setBuying] = useState<boolean>(true);
    const [tradeQuantity, setTradeQuantity] = useState<number>(1);
    const [priceModifier, setPriceModifier] = useState<number>(1);

    return (
        <div className="transporters">
            <div className="title">
                <span>Transporters</span>
            </div>
            <BulkBar
                isBuying={isBuying}
                tradeQuantity={tradeQuantity}
                setBuying={setBuying}
                setTradeQuantity={setTradeQuantity}
                setPriceModifier={setPriceModifier}
            />
            <Transporter
                name="Battery"
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalTransportation={totalTransportation}
                transporters={batteries}
                transporterCost={batteryCost}
                transporterTransportation={batteryTransportation}
                description="Stores electricity in a small portable form"
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
            <Transporter
                name="Meter"
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalTransportation={totalTransportation}
                transporters={meters}
                transporterCost={meterCost}
                transporterTransportation={meterTransportation}
                description=""
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
            <Transporter
                name="Utility Pole"
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalTransportation={totalTransportation}
                transporters={phonePoles}
                transporterCost={phonePoleCost}
                transporterTransportation={phonePoleTransportation}
                description="Carries electricity across wooden poles"
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
            <Transporter
                name="Transformer"
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalTransportation={totalTransportation}
                transporters={transformers}
                transporterCost={transformerCost}
                transporterTransportation={transformerTransportation}
                description="Converts AC to DC"
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
            <Transporter
                name="Underground Cable"
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalTransportation={totalTransportation}
                transporters={undergroundCables}
                transporterCost={undergroundCableCost}
                transporterTransportation={undergroundCableTransportation}
                description="Carries electricty through buried cables, protected from deadly nature"
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
            <Transporter
                name="Transmission Tower"
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalTransportation={totalTransportation}
                transporters={powerTowers}
                transporterCost={powerTowerCost}
                transporterTransportation={powerTowerTransportation}
                description="Carries electricity across long distances via large metal towers"
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
            <Transporter
                name="Substation"
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalTransportation={totalTransportation}
                transporters={substations}
                transporterCost={substationCost}
                transporterTransportation={substationTransportation}
                description=""
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
        </div>
    )
}