import React from 'react';

export function MenuBar({
    eraseGame,
    save
} : {
    eraseGame: () => void;
    save: () => void;
}): JSX.Element {

    function eraseProgress(): void {

    }

    return (
        <div className="menuBar">
            <div className="menuBarItem">
                <span><strong>Beat the Peak</strong></span>
            </div>
            <div className="menuBarItem">
                <a href="https://www.delaware.coop/" target="_blank" rel="noreferrer">Delaware Electric Coop</a>
            </div>
            <div className="menuBarItem">
                <button onClick={eraseGame}>Erase Progress</button>
            </div>
        </div>
    )
}