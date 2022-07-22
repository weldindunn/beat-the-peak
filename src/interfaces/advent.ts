export interface Advent {
    "id": number,
    "name": string,
    "type": string,
    "description": string,
    "startDate": string,
    "length": number
}

/* Decoder
export interface Advent {
    "id": number, //unique key for each advent
    "name": string, //What the advent is (Hurricane, Cyber-Attack, etc.)
    "type": string, //What kind of advent it is (weather based, PR based, etc.)
    "description": string, //Describes what the advent is
    "startDate": string, //When the advent began (month, year)
    "length": number //How long the advent lasts (milliseconds)
}
*/