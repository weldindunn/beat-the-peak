import React from "react";
import { Row, Col } from "react-bootstrap";
import { ViewCenter } from "./viewCenter";

export function ViewHub({
    watts, 
    setWatts
} : {
    watts: number; 
    setWatts: (watts: number) => void;
}): JSX.Element {
    return (
        <div className="hub">
            {/* Upgrades and Events */}
            <Col className="upgrades-and-events">
                {/* Upgrades */}
                <Row>
                    <span>Upgrades</span>
                </Row>

                {/* Events */}
                <Row>
                    <span>Events</span>
                </Row>
            </Col>

            {/* Center */}
            <Col className="center">
                <ViewCenter watts={watts} setWatts={setWatts}></ViewCenter>
            </Col>

            {/* Generators and Transporters */}
            <Col className="generators-and-transporters">

                {/* Generators */}
                <Row>
                    <span>Generators</span>
                </Row>

                {/* Transporters */}
                <Row>
                    <span>Transporters</span>
                </Row>
            </Col>
        </div>
    )
}