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

    const [linemenCost, setLinemenCost] = useState<number>((15 * Math.pow(1.15, linemen)));
    const [linemenProduction, setLinemenProduction] = useState<number>(1);

    const [coalCost, setCoalCost] = useState<number>((100 * Math.pow(1.15, coalPlants)));
    const [coalProduction, setCoalProduction] = useState<number>(10);

    return (
        <div>
            <span>Generators</span>
            <Generator
                name="Lineman"
                watts={watts}
                setWatts={setWatts}
                wattsPerSec={wattsPerSec}
                setWattsPerSec={setWattsPerSec}
                generators={linemen}
                setGenerators={setLinemen}
                costBase={15}
                generatorCost={linemenCost}
                setGeneratorCost={setLinemenCost}
                generatorProduction={linemenProduction}
                setGeneratorProduction={setLinemenProduction}
            ></Generator>
            <Generator
                name="Coal Plant"
                watts={watts}
                setWatts={setWatts}
                wattsPerSec={wattsPerSec}
                setWattsPerSec={setWattsPerSec}
                generators={coalPlants}
                setGenerators={setCoalPlants}
                costBase={100}
                generatorCost={coalCost}
                setGeneratorCost={setCoalCost}
                generatorProduction={coalProduction}
                setGeneratorProduction={setCoalProduction}
            ></Generator>
        </div>
    )
}