import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { numberConvertor } from "./utilities/numberConvertor";
import "./style/center.css";
import bolt from "../img/bolt.png";

export function ViewCenter ({
    name,
    setName,
    watts, 
    wattsPerSec,
    clickBolt
} : {
    name: string;
    setName: (name: string) => void;
    watts: number; 
    wattsPerSec: number;
    clickBolt: () => void;
}): JSX.Element {

    const [isEditing, setEditing] = useState<boolean>(false);
    const [resetName, setResetName] = useState<string>("");

    function cancel(): void {
        setName(resetName);
        setEditing(false);
    }

    function open(): void {
        setResetName(name)
        setEditing(true);
    }

    return (
        <div className="center">
            <div className="top-text">
                {/* Power Button */}
                <div className="name-text-box">
                    <button className="coop-name" onClick={open}>
                        {name}'s Electric Cooperative
                    </button>
                </div>
                <Modal show={isEditing} animation={true}>
                    <Modal.Header>
                        <Modal.Title>Change Name</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Control 
                                    value={name}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                                    placeholder="Enter Name"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="success" onClick={() => setEditing(false)}>Save</Button>
                        <Button variant="warning" onClick={cancel}>Cancel</Button>
                    </Modal.Footer>
                </Modal>

                {/* # of Watts */}
                <div className="watts-text-box">
                    <span className="num-watts">
                        {numberConvertor(watts, true)}
                    </span>
                    <br/>
                    <span className="num-wps">
                        {"per second: "}{numberConvertor(wattsPerSec, false)}
                    </span>
                </div>
            </div>

            {/* Power Button */}
            <div className="bolt">
                <button onClick={clickBolt} >
                    <img src={bolt} alt="Bolt"/>
                </button>
            </div>
        </div>
    )
}