//Takes in the time and returns a really really small number which represents the likelihood of a heat wave happening at that frame
//With this expression, there is a 113% chance of a heat wave happening any given season (Apr-Sept)

import { integral } from "./integral"

export function heatWaveCurve(time: number, deltaTime: number): number {
    // ((-1)*(x-210000)*(x-510,000))/4,000,000,000,000,000
    return (-1)*integral(time, time - deltaTime, 210000, 510000, 4000000000000000, deltaTime);
}