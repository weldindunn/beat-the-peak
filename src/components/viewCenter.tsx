import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { numberConvertor } from "./utilities/numberConvertor";
//import { ExportCSV } from './utilities/exportCSV';
import { Location } from "../interfaces/location";
import "./style/center.css";
import bolt from "../img/bolt.png";

export function ViewCenter ({
    /*
    randomNumbers,
    stormNumbers,
    tornadoNumbers,
    heatWaveNumbers,
    */

    time,
    name,
    setName,
    watts, 
    totalWatts,
    currentLocation,
    powerStatus,
    wattsPerSec,
    netWattsPerSec,
    members,
    wattsPerMember,
    clicks,
    setWatts,
    setTotalWatts,
    clickBolt
} : {
    /*
    randomNumbers: number[];
    stormNumbers: number[];
    tornadoNumbers: number[];
    heatWaveNumbers: number[];
    */

    time: number;
    name: string;
    setName: (name: string) => void;
    watts: number; 
    totalWatts: number;
    currentLocation: Location;
    powerStatus: string;
    wattsPerSec: number;
    netWattsPerSec: number;
    members: number;
    wattsPerMember: number;
    clicks: number;
    setWatts: (watts: number) => void;
    setTotalWatts: (totalWatts: number) => void;
    clickBolt: () => void;
}): JSX.Element {

    const [isEditing, setEditing] = useState<boolean>(false);
    const [resetName, setResetName] = useState<string>("");

    const [isViewing, setViewing] = useState<boolean>(false);
    const [tempWatts, setTempWatts] = useState<string>(watts.toString());

    function cancel(): void {
        setName(resetName);
        setEditing(false);
    }

    function openName(): void {
        setResetName(name)
        setEditing(true);
    }

    function saveWatts(): void {
        setWatts(watts + parseInt(tempWatts));
        setTotalWatts(totalWatts + parseInt(tempWatts));
    }

    function openInfo(): void {
        setViewing(true);
    }

    function closeInfo(): void {
        setViewing(false);
    }

    return (
        <div className="center">
            <div className="top-text">
                {/* Name of Co-op */}
                <div className="name-text-box">
                    <button className="coop-name" onClick={openName}>
                        {name}'s Electric Cooperative
                    </button>
                    <button className="coop-name" onClick={openInfo}>
                        Info
                    </button>
                </div>

                <Modal show={isEditing} animation={true} >
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
                <Modal show={isViewing} animation={true}>
                    <Modal.Header>
                        <Modal.Title>Info</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>You have played this game for <strong>{Math.floor(time/3600000)} hours, {Math.floor((time%360000)/60000)} minutes, and {Math.floor((time%60000)/1000)} seconds.</strong></p>
                        <p>You have clicked the bolt <strong>{clicks} times!</strong></p>
                        {/*<ExportCSV randomNumbers={randomNumbers} stormNumbers={stormNumbers} tornadoNumbers={tornadoNumbers} heatWaveNumbers={heatWaveNumbers} />*/}
                        <p>You have generated a total of <strong>{numberConvertor(totalWatts, true)}</strong>!</p>
                        {
                            powerStatus === "nothing" ? (
                                <p>Those are rookie numbers, gotta pump those up.</p>
                            ) : (
                                <p>That's enough energy to power {currentLocation.location} for a {powerStatus}!</p>
                            )
                        }
                        <br/>
                        <Form>
                            <Form.Group>
                                <Form.Label>Cheat (gain watts):</Form.Label>
                                <Form.Control 
                                    value={tempWatts}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTempWatts(event.target.value)}
                                    placeholder="Enter watts"
                                />
                                <Button variant="success" onClick={saveWatts}>Save</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={closeInfo}>Close</Button>
                    </Modal.Footer>
                </Modal>

                {/* # of Watts */}
                <div className="watts-text-box">
                    <span className="num-watts">
                        {numberConvertor(watts, true)}
                    </span>
                    <br/>
                    <span className="num-wps">
                        {"per second: "}{numberConvertor(netWattsPerSec, false)}
                    </span>
                </div>
            </div>

            {/* Power Button */}
            <div className="bolt">
                <button onClick={clickBolt} >
                    <img src={bolt} alt="Bolt"/>
                </button>
            </div>

            {/* # of Members */}
            {members > 0 ? (
                <div className="members-text-box">
                    <span className="num-members">
                        {numberConvertor(members, false)}{" member"}
                        { members !== 1 ? ("s") : ("")}
                    </span>
                    <br/>
                    <span className="num-wpm">
                        {"watts per member: "}{wattsPerMember.toFixed(2)}
                    </span>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}