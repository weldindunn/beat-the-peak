import React from "react";
import { Card, Button } from "react-bootstrap";

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
    generatorProduction,
    setGeneratorProduction
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
    setGeneratorProduction: (generatorProduction: number) => void;
}): JSX.Element {

    function buyGenerator() {
        setGenerators(generators + 1);
        setWattsPerSec(wattsPerSec + generatorProduction);
        setWatts(watts - Math.round(generatorCost));
        setGeneratorCost((costBase * Math.pow(1.15, generators)));
    }

    return (
        <div>
            <Button onClick={buyGenerator} disabled={watts < Math.round(generatorCost)}>
                <Card>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{Math.round(generatorCost)}</Card.Subtitle>
                </Card>
            </Button>
        </div>
    )
}