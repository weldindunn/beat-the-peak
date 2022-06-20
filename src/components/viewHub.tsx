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
        <>
            {/* Upgrades and Events */}
            <Col>

                {/* Upgrades */}
                <Row>

                </Row>

                {/* Events */}
                <Row>

                </Row>
            </Col>

            {/* Center */}
            <Col>
                <ViewCenter watts={watts} setWatts={setWatts}></ViewCenter>
            </Col>

            {/* Generators and Transporters */}
            <Col>

                {/* Generators */}
                <Row>

                </Row>

                {/* Transporters */}
                <Row>

                </Row>
            </Col>
        </>
    )
}