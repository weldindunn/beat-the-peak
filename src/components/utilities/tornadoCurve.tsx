//Takes in the time and returns a really really small number which represents the likelihood of a tornado happening at that frame
//With this expression, there is a 60% chance of a tornado happening any given season (Mar-Jul)

import { integral } from "./integral"

export function tornadoCurve(time: number, deltaTime: number): number {
    // ((-1)*(x-120000)*(x-420,000))/7,500,000,000,000,000
    return (-1)*integral(time - deltaTime, time, 120000, 420000, 7500000000000000, deltaTime);
}