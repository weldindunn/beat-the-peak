import React from 'react';
import "./style/bulkBar.css";

export function BulkBar({
    isBuying,
    tradeQuantity,
    setBuying,
    setTradeQuantity,
    setPriceModifier
}: {
    isBuying: boolean;
    tradeQuantity: number;
    setBuying: (isBuying: boolean) => void;
    setTradeQuantity: (tradeQuantity: number) => void;
    setPriceModifier: (priceModifier: number) => void;
}): JSX.Element {
    return (
        <div className="bar">
            <button onClick={() => setBuying(true)} >Buy</button>
            <button onClick={() => setBuying(false)}>Sell</button>
            <button onClick={() => {setTradeQuantity(1); setPriceModifier(1);}}>1</button>
            <button onClick={() => {setTradeQuantity(10); setPriceModifier(20.303718238);}}>10</button>
            <button onClick={() => {setTradeQuantity(100); setPriceModifier(7828749.671335256);}}>100</button>
        </div>
    )
}