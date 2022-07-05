import React, { useState } from 'react';
import { WarningModal } from './warningModal';

export function MenuBar({
    eraseGame
} : {
    eraseGame: () => void;
}): JSX.Element {
    const [isWarning, setWarning] = useState<boolean>(false);

    return (
        <div className="menuBar">
            <div className="menuBarItem">
                <span><strong>Beat the Peak</strong></span>
            </div>
            <div className="menuBarItem">
                <a href="https://www.delaware.coop/" target="_blank" rel="noreferrer">Delaware Electric Coop</a>
            </div>
            <div className="menuBarItem">
                <button onClick={() => {setWarning(true); console.log("click!");}}>Erase Progress</button>
                <WarningModal action={eraseGame} setWarning={setWarning} isWarning={isWarning}></WarningModal>
            </div>
        </div>
    )
}