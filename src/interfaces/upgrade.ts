export interface Upgrade {
    "id": number,
    "name": string,
    "description": string,
    "element": string,
    "type": string,
    "cost": number,
    "unlockThreshold": number,
    "purchased": boolean
}

/* Decoder
export interface Upgrade {
    "id": number, //unique key for each upgrade
    "name": string, //Fun name for upgrade
    "description": string, //What the upgade does
    "element": string, //Which elemnt (generator, transporter, etc.) 
    "type": string, //What the upgrade affects
    "cost": string, //How much the upgrade costs
    "unlockThreshold": number, //The number of elements required for the upgrade to be purchased
    "purchased": boolean //Whether or not the upgrade has been purchased
}
*/