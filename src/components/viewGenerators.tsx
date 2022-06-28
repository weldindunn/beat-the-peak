import React, { useState } from "react";
import { Generator } from "./generator";

export function ViewGenerators({
    watts, 
    setWatts,
    wattsPerSec,
    setWattsPerSec,
    linemen,
    setLinemen,
    coalPlants,
    setCoalPlants
} : {
    watts: number; 
    wattsPerSec: number;
    setWatts: (watts: number) => void;
    setWattsPerSec: (wattsPerSec: number) => void;
    linemen: number;
    setLinemen: (linemen: number) => void;
    coalPlants: number;
    setCoalPlants: (coalPlants: number) => void;
}): JSX.Element {

    const linemenBaseCost = 15;
    const linemenProduction = 1;
    const [linemenCost, setLinemenCost] = useState<number>((15 * Math.pow(1.15, linemen)));

    const coalBaseCost = 250;
    const coalProduction = 10;
    const [coalCost, setCoalCost] = useState<number>((100 * Math.pow(1.15, coalPlants)));

    return (
        <div className="generators">
            <span>Generators</span>
            <Generator
                name="Lineman"
                watts={watts}
                setWatts={setWatts}
                wattsPerSec={wattsPerSec}
                setWattsPerSec={setWattsPerSec}
                generators={linemen}
                setGenerators={setLinemen}
                costBase={linemenBaseCost}
                generatorCost={linemenCost}
                setGeneratorCost={setLinemenCost}
                generatorProduction={linemenProduction}
            ></Generator>
            <Generator
                name="Coal Plant"
                watts={watts}
                setWatts={setWatts}
                wattsPerSec={wattsPerSec}
                setWattsPerSec={setWattsPerSec}
                generators={coalPlants}
                setGenerators={setCoalPlants}
                costBase={coalBaseCost}
                generatorCost={coalCost}
                setGeneratorCost={setCoalCost}
                generatorProduction={coalProduction}
            ></Generator>
        </div>
    )
}