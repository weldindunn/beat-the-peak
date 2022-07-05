import React from "react";
import { Modal, Button } from "react-bootstrap";

export function WarningModal({
    action,
    isWarning,
    setWarning
} : {
    action: () => void;
    isWarning: boolean;
    setWarning: (status: boolean) => void;
}): JSX.Element {

    function eraseGame(): void {
        action();
        setWarning(false);
    }

    return (
        <Modal show={isWarning} animation={false} centered>
            <Modal.Header>
                <Modal.Title>Erase progress</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                Are you sure you want to erase your game progress?
                You will NOT be able to undo this action.
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={eraseGame}>Erase Game</Button>
                <Button variant="warning" onClick={() => setWarning(false)}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}