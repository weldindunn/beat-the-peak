import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import { numberConvertor } from "./utilities/numberConvertor";

export function Generator({
    name,
    icon,
    tooltip_icon,
    watts, 
    wattsPerSec,
    generators,
    generatorCost,
    generatorProduction,
    description,
    tradeQuantity,
    priceModifier,
    buyGenerator
} : {
    name: string,
    icon: string,
    tooltip_icon: string,
    watts: number; 
    wattsPerSec: number;
    generators: number;
    generatorCost: number;
    generatorProduction: number;
    description: string;
    tradeQuantity: number;
    priceModifier: number;
    buyGenerator: (generator: string, tradeQuantity: number, generatorCost: number) => void;
}): JSX.Element {

    return (
        <OverlayTrigger
            placement={"left"}
            overlay={
                <div className="generator-tooltip">
                    <div>
                        <img src={tooltip_icon} alt={name}/>
                        <span className="tooltip-name">{name}</span>
                        <span className="tooltip-cost">{numberConvertor(Math.round(generatorCost * priceModifier), false)}</span>
                    </div>
                    <div>
                        <span className="tooltip-description">{description}</span>
                    </div>
                    <div>
                        <span className="tooltip-production">
                            Each {name} produces {numberConvertor(Math.round(generatorProduction/generators), true)} per second
                            <br/>
                            Your {name}s produce {numberConvertor(generatorProduction, true)} per second, {Math.round(generatorProduction/wattsPerSec * 100)}% of your total watts per second
                        </span>
                    </div>
                </div>
            }
        >
            <button className="generator" onClick={() => buyGenerator(name, tradeQuantity, generatorCost * priceModifier)} disabled={watts < Math.round(generatorCost * priceModifier)}>
                <div className="generator-icon">
                    <img src={icon} alt={name.charAt(0)}></img>
                </div>
                <div className="generator-content">
                    <div className="generator-title">
                        {
                            name.length > 13 ? (name.substring(0, 11) + "...") : (name)
                        }
                    </div>
                    <span className="generator-cost">
                        {numberConvertor(Math.round(generatorCost * priceModifier), false)}
                    </span>
                    <div className="generator-count">
                        {generators}
                    </div>
                </div>
            </button>
        </OverlayTrigger>
    )
}