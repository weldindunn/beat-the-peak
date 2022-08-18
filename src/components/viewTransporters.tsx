import React, { useState } from "react";
import { Transporter } from "./transporter";
import { BulkBar } from "./bulkBar";
import "./style/transporters.css";

//Icons
import battery from "../img/Battery_Icon.png";
import meter from "../img/Meter_Icon.png";
import utility_pole from "../img/Utility_Pole_Icon.png";
import transformer from "../img/Transformer_Icon.png";
import underground_cable from "../img/Underground_Cable_Icon.png";
import transmission_tower from "../img/Transmission_Tower_Icon.png";
import substation from "../img/Substation_Icon.png";

//Tooltip Icons
import battery_logo from "../img/Battery_Logo.png";
import meter_icon from "../img/Meter_Tooltip_Icon.png";
import utility_pole_icon from "../img/Utility_Pole_Tooltip_Icon.png";
import transformer_logo from "../img/Transformer_Logo.png";
import cable_spool from "../img/Underground_Cable_Tooltip_Icon.png";
import transmission_tower_logo from "../img/Transmission_Tower_Logo.png";
import ACDC from "../img/ACDC.png";

export function ViewTransporters({
    watts,
    totalWatts,
    wattsPerSec,
    netWattsPerSec,
    totalTransportation,
    buySellTransporter,
    setViewingGenerators,

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
    totalWatts: number;
    wattsPerSec: number;
    netWattsPerSec: number;
    totalTransportation: number;
    buySellTransporter: (transporter: string, tradeQuantity: number, transporterCost: number, isBuying: boolean) => void;
    setViewingGenerators: (isViewingGenerators: boolean) => void;

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
            <div className="transporters-header">
                <span>Transporters</span>
                <button className="switch-button-top" onClick={() => setViewingGenerators(true)}></button>
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
                icon={battery}
                tooltip_icon={battery_logo}
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalWatts={totalWatts}
                totalTransportation={totalTransportation}
                transporters={batteries}
                transporterCost={batteryCost}
                transporterTransportation={batteryTransportation}
                description="Stores electricity in a small portable form"
                quote="Yippee double-A"
                availabilityThreshold={0}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
            <Transporter
                name="Meter"
                icon={meter}
                tooltip_icon={meter_icon}
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalWatts={totalWatts}
                totalTransportation={totalTransportation}
                transporters={meters}
                transporterCost={meterCost}
                transporterTransportation={meterTransportation}
                description="Measures the amount of electricity used at a location"
                quote="Here in the states we call them yards"
                availabilityThreshold={0}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
            <Transporter
                name="Utility Pole"
                icon={utility_pole}
                tooltip_icon={utility_pole_icon}
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalWatts={totalWatts}
                totalTransportation={totalTransportation}
                transporters={phonePoles}
                transporterCost={phonePoleCost}
                transporterTransportation={phonePoleTransportation}
                description="Carries electricity across wooden poles"
                quote="The gossip spots of the birds"
                availabilityThreshold={meterCost}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
            <Transporter
                name="Transformer"
                icon={transformer}
                tooltip_icon={transformer_logo}
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalWatts={totalWatts}
                totalTransportation={totalTransportation}
                transporters={transformers}
                transporterCost={transformerCost}
                transporterTransportation={transformerTransportation}
                description="Converts AC to DC"
                quote={"Not 'robots in disguise'"}
                availabilityThreshold={phonePoleCost}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
            <Transporter
                name="Underground Cable"
                icon={underground_cable}
                tooltip_icon={cable_spool}
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalWatts={totalWatts}
                totalTransportation={totalTransportation}
                transporters={undergroundCables}
                transporterCost={undergroundCableCost}
                transporterTransportation={undergroundCableTransportation}
                description="Carries electricty through buried cables, protected from deadly nature"
                quote="I used to like underground cables, until they went mainstream"
                availabilityThreshold={transformerCost}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
            <Transporter
                name="Transmission Tower"
                icon={transmission_tower}
                tooltip_icon={transmission_tower_logo}
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalWatts={totalWatts}
                totalTransportation={totalTransportation}
                transporters={powerTowers}
                transporterCost={powerTowerCost}
                transporterTransportation={powerTowerTransportation}
                description="Carries electricity across long distances via large metal towers"
                quote={"I think \"power tower\" is a cooler name"}
                availabilityThreshold={undergroundCableCost}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
            <Transporter
                name="Substation"
                icon={substation}
                tooltip_icon={ACDC}
                watts={watts}
                wattsPerSec={wattsPerSec}
                netWattsPerSec={netWattsPerSec}
                totalWatts={totalWatts}
                totalTransportation={totalTransportation}
                transporters={substations}
                transporterCost={substationCost}
                transporterTransportation={substationTransportation}
                description="Steps down the high voltage electricity from tower for local transmission"
                quote="Danger danger, high voltage!"
                availabilityThreshold={powerTowerCost}
                tradeQuantity={tradeQuantity}
                priceModifier={priceModifier}
                isBuying={isBuying}
                buySellTransporter={buySellTransporter}
            ></Transporter>
        </div>
    )
}