export interface Advent {
    "id": number,
    "name": string,
    "type": string,
    "description": string,
    "startTime": number,
    "length": number,
    "isOver": boolean
}

/* Decoder
export interface Advent {
    "id": number, //unique key for each advent
    "name": string, //What the advent is (Hurricane, Cyber-Attack, etc.)
    "type": string, //What kind of advent it is (weather based, PR based, etc.)
    "description": string, //Describes what the advent is
    "startTime": number, //When the advent began (milliseconds)
    "length": number //How long the advent lasts (milliseconds)
}
*/