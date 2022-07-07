import React from "react";
import { numberConvertor } from "./utilities/numberConvertor";

export function Generator({
    name,
    icon,
    watts, 
    wattsPerSec,
    generators,
    generatorCost,
    generatorProduction,
    buyGenerator
} : {
    name: string,
    icon: string,
    watts: number; 
    wattsPerSec: number;
    generators: number;
    generatorCost: number;
    generatorProduction: number;
    buyGenerator: (generator: string) => void;
}): JSX.Element {
    return (
        <>
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
        </>
    )
}