import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

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
        <div className="generator">
            <button onClick={buyGenerator} disabled={watts < Math.round(generatorCost)}>
                <Card>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>Cost: {Math.round(generatorCost)}</Card.Subtitle>
                    <Card.Body>{generators}</Card.Body>
                </Card>
            </button>
        </div>
    )
}