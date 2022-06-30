import React from "react";
import { numberConvertor } from "./utilities/numberConvertor";

export function Generator({
    name,
    watts, 
    wattsPerSec,
    generators,
    generatorCost,
    generatorProduction,
    buyGenerator
} : {
    name: string,
    watts: number; 
    wattsPerSec: number;
    generators: number;
    generatorCost: number;
    generatorProduction: number;
    buyGenerator: (generator: string) => void;
}): JSX.Element {

    /*
    useEffect(() => {
        setGeneratorCost((costBase * Math.pow(1.15, generators)));
        }, [generators, setGeneratorCost]
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
    */

    return (
        <>
            <button className="generator" onClick={() => buyGenerator(name)} disabled={watts < Math.round(generatorCost)}>
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
            </button>
        </>
    )
}