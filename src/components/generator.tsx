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
    buyGenerator: (generator: string) => void;
}): JSX.Element {
    return (
        <OverlayTrigger
            placement={"left"}
            overlay={
                <div className="generator-tooltip">
                    <div>
                        <img src={tooltip_icon} alt={name}/>
                        <span className="tooltip-name">{name}</span>
                        <span className="tooltip-cost">{numberConvertor(Math.round(generatorCost))}</span>
                    </div>
                    <div>
                        <span className="tooltip-description">{description}</span>
                    </div>
                    <div>
                        <span className="tooltip-production">
                            Each {name} produces {Math.round(generatorProduction/generators)} watts per second
                            <br/>
                            Your {name}s produce {generatorProduction} watts per second, {Math.round(generatorProduction/wattsPerSec * 100)}% of your total watts per second
                        </span>
                    </div>
                </div>
            }
        >
            <button className="generator" onClick={() => buyGenerator(name)} disabled={watts < Math.round(generatorCost)}>
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
                        {numberConvertor(Math.round(generatorCost))}
                    </span>
                    <div className="generator-count">
                        {generators}
                    </div>
                </div>
            </button>
        </OverlayTrigger>
    )
}