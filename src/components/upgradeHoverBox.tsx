import React from "react";
import { Upgrade } from "../interfaces/upgrade";

export function UpgradeHoverBox({upgrade}: {upgrade: Upgrade}): JSX.Element {
    return (
        <div className="upgrade-tooltip">
            <div className="upgrade-tooltip-title">
                <div className="upgrade-name">
                    {upgrade.name}
                </div>
                <div className="upgrade-cost">
                    Cost: {upgrade.cost} watts
                </div>
            </div>
            <div className="upgrade-description">
                {upgrade.description}
            </div>
        </div>
    )
}