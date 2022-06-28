import React, { useEffect } from "react";
import { numberConvertor } from "./utilities/numberConvertor";

export function Generator({
    name,
    watts, 
    setWatts,
    wattsPerSec,
    setWattsPerSec,
    generators,
    setGenerators,
    costBase,
    generatorCost,
    setGeneratorCost,
    generatorProduction
} : {
    name: string,
    watts: number; 
    wattsPerSec: number;
    setWatts: (watts: number) => void;
    setWattsPerSec: (wattsPerSec: number) => void;
    generators: number;
    setGenerators: (generators: number) => void;
    costBase: number;
    generatorCost: number;
    setGeneratorCost: (generatorCost: number) => void;
    generatorProduction: number;
}): JSX.Element {

    useEffect(() => {
        setGeneratorCost((costBase * Math.pow(1.15, generators)));
        }, [generators, setGeneratorCost, costBase]
    );

    function buyGenerator() {
        //Adds another generator
        setGenerators(generators + 1);

        //Increases watts per second by how much the generator produces
        setWattsPerSec(wattsPerSec + generatorProduction);

        //Subtracts the cost of the generator from the total watts
        setWatts(watts - Math.round(generatorCost));

        //Increases the cost of the generator
        setGeneratorCost((costBase * Math.pow(1.15, generators)));
    }

    return (
        <div>
            <button className="generator" onClick={buyGenerator} disabled={watts < Math.round(generatorCost)}>
                <div className="generator-group">
                    <div className="generator-title-cost">
                        <div className="generator-title">
                            {name}
                        </div>
                        <div className="generator-cost">
                            {"Cost: "}{numberConvertor(Math.round(generatorCost))}
                        </div>
                    </div>
                    <div className="generator-count">
                        {generators}
                    </div>
                </div>
            </button>
        </div>
    )
}