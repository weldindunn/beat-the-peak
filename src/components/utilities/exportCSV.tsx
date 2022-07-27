import React from "react";
import { Button } from "react-bootstrap";

export function ExportCSV({
    randomNumbers,
    stormNumbers,
    tornadoNumbers,
    heatWaveNumbers
} : {
    randomNumbers: number[];
    stormNumbers: number[];
    tornadoNumbers: number[];
    heatWaveNumbers: number[];
}): JSX.Element {
    const exportCSV = () => {
        let str = "";
        for (let i = 0; i < randomNumbers.length; i++) {
            str += randomNumbers[i] + ",";
            str += stormNumbers[i] + ",";
            str += tornadoNumbers[i] + ",";
            str += heatWaveNumbers[i] + ",";
            str += "\n";
        }

        const uri =
            "data:text/csv;charaset=utf-8,\ufeff" + encodeURIComponent(str);
        const link = document.createElement("a");
        link.href = uri;
        link.download = "weather-data";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="front">
            <Button onClick={exportCSV} variant="outline-success">Export to .CSV</Button>
        </div>
    )
}