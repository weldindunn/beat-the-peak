import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import { numberConvertor } from "./utilities/numberConvertor";
import { sellingCost } from "./utilities/sellingCost";

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
    isBuying,
    buySellGenerator
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
    isBuying: boolean;
    buySellGenerator: (generator: string, tradeQuantity: number, generatorCost: number, isBuying: boolean) => void;
}): JSX.Element {

    return (
        <OverlayTrigger
            placement={"left"}
            overlay={
                <div className="generator-tooltip">
                    <div>
                        <img src={tooltip_icon} alt={name}/>
                        <span className="tooltip-name">{name}</span>
                        {
                            isBuying ? (
                                <span className="tooltip-cost">{numberConvertor(Math.round(generatorCost * priceModifier), false)}</span>
                            ) : (
                                <span className="tooltip-cost">{numberConvertor(Math.round(sellingCost(generatorCost, tradeQuantity)), false)}</span>
                            )
                        }
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
            <button 
                className="generator"
                onClick={() => {
                    if (isBuying) {
                        buySellGenerator(name, tradeQuantity, generatorCost * priceModifier, isBuying)
                    } else {
                        buySellGenerator(name, tradeQuantity, sellingCost(generatorCost, tradeQuantity), false)
                    }
                }}
                disabled={((watts < Math.round(generatorCost * priceModifier)) && isBuying) || ((generators < tradeQuantity) && !isBuying)}
            >
                <div className="generator-icon">
                    <img src={icon} alt={name.charAt(0)}></img>
                </div>
                <div className="generator-content">
                    <div className="generator-title">
                        {
                            name.length > 13 ? (name.substring(0, 11) + "...") : (name)
                        }
                    </div>
                    {
                        isBuying ? (
                            <span className="generator-cost">
                                {numberConvertor(Math.round(generatorCost * priceModifier), false)}
                            </span>
                        ) : (
                            <span className="generator-cost">
                                {numberConvertor(Math.round(sellingCost(generatorCost, tradeQuantity)), false)}
                            </span>
                        )
                    }
                    <div className="generator-count">
                        {generators}
                    </div>
                </div>
            </button>
        </OverlayTrigger>
    )
}