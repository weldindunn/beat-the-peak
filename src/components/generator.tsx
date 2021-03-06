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
    totalWatts,
    generators,
    generatorCost,
    generatorProduction,
    description,
    quote,
    availabilityThreshold,
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
    totalWatts: number;
    generators: number;
    generatorCost: number;
    generatorProduction: number;
    description: string;
    quote: string;
    availabilityThreshold: number;
    tradeQuantity: number;
    priceModifier: number;
    isBuying: boolean;
    buySellGenerator: (generator: string, tradeQuantity: number, generatorCost: number, isBuying: boolean) => void;
}): JSX.Element {

    return (
        totalWatts >= availabilityThreshold ? (
            <OverlayTrigger
                placement={"left"}
                overlay={
                    <div className={generators > 0 ? "generator-tooltip" : "generator-tooltip-two"}>
                        <div className="generator-tooltip-top">
                            <img src={tooltip_icon} alt={name}/>
                            <span className="generator-tooltip-name">
                                {
                                    name.length > 14 ? (name.substring(0, 12) + "...") : (name)
                                }
                            </span>
                            {
                                isBuying ? (
                                    <span className="generator-tooltip-cost">{numberConvertor(Math.round(generatorCost * priceModifier), false)}</span>
                                ) : (
                                    <span className="generator-tooltip-cost">{numberConvertor(Math.round(sellingCost(generatorCost, tradeQuantity)), false)}</span>
                                )
                            }
                        </div>
                        <span className="generator-tooltip-description">{description}</span>
                        <span className="transporter-tooltip-quote">{"\""}{quote}{"\""}</span>
                        {
                            generators > 0 ? (
                                <div>
                                    <span className="generator-production">
                                        Each {name.toLowerCase()} generates {numberConvertor(Math.round(generatorProduction/generators), true)} per second
                                        <br/>
                                        Your {name.toLowerCase()}s generate {numberConvertor(generatorProduction, true)} per second, {Math.round(generatorProduction/wattsPerSec * 100)}% of your total watts generated per second
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
        ) : (
            <></>
        )
    )
}