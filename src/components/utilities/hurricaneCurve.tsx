//Takes in the time and returns a really really small number which represents the likelihood of a hurrican happening at that millisecond
//With this expression, there is a 38.8% chance of a hurricane happening any given season (June-Oct)

import { integral } from "./integral";

export function hurricaneCurve(time: number, deltaTime: number): number {
    // ((-1)*(x-300,000)*(x-660,000))/20,000,000,000,000,000
    return integral(time - deltaTime, time, 300000, 660000, 20000000000000000, deltaTime);
}