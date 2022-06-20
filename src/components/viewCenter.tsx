import React from "react";
import { Button } from "react-bootstrap";

export function ViewCenter ({
    watts, 
    setWatts
} : {
    watts: number; 
    setWatts: (watts: number) => void;
}): JSX.Element {

    function increaseWatts(theseWatts: number): void {
        setWatts(watts + theseWatts);
    }

    function clickPowerButton(): void {
        increaseWatts(1);
    }

    return (
        <>

            {/* Power Button */}
            <span>Weldin's Electric Cooperative</span>
            {/* <span>{name}{"'s Electric Cooperative"}</span> */}

            {/* Power Button */}
            <Button onClick={clickPowerButton}>Z</Button>

            {/* # of Watts */}
            <span>{watts}{" watts"}</span>
        </>
    )
}