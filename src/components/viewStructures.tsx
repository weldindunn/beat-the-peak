import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import "./style/structures.css";

export function ViewStructures(): JSX.Element {

    const [isHelping, setHelping] = useState<boolean>(false);

    return (
        <div className="structures">
            <div className="structures-header">
                <span>Structures</span>
                <button className="info-button" onClick={() => setHelping(true)}></button>
            </div>

            <Modal show={isHelping} animation={true} >
                <Modal.Header>
                    <Modal.Title>Info</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>This section will contain visual representations of your generators and transporters.</p>
                    <p>Right now it's blank because I'm working on it.</p>
                    <p>I'm just one developer, after all.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={() => setHelping(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}