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
            <button className={isBuying ? 'glow-button' : 'default-button'} onClick={() => setBuying(true)}>Buy</button>
            <button className={!isBuying ? 'glow-button' : 'default-button'} onClick={() => setBuying(false)}>Sell</button>
            <button className={tradeQuantity === 1 ? 'glow-button' : 'default-button'} onClick={() => {setTradeQuantity(1); setPriceModifier(1);}}>1</button>
            <button className={tradeQuantity === 10 ? 'glow-button' : 'default-button'} onClick={() => {setTradeQuantity(10); setPriceModifier(20.303718238);}}>10</button>
            <button className={tradeQuantity === 100 ? 'glow-button' : 'default-button'} onClick={() => {setTradeQuantity(100); setPriceModifier(7828749.671335256);}}>100</button>
        </div>
    )
}