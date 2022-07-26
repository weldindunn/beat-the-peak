//Takes in the time and returns a really really small number which represents the likelihood of a snow storm happening at that frame
//With this expression, there is a 37.39% chance of a snow storm happening any given season (Dec-Mar)

import { integral } from "./integral"

export function snowStormCurve(time: number, deltaTime: number): number {
    // ((x-150000)*(x-660,000))/21,000,000,000,000,000
    return integral(time, time - deltaTime, 150000, 660000, 21000000000000000, deltaTime);
}