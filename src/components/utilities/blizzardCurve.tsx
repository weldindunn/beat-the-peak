//Takes in the time and returns a really really small number which represents the likelihood of a blizzard happening at that millisecond
//With this expression, there is a 11.02% chance of a blizzard happening any given season (Dec-Feb)

import { integral } from "./integral";

export function blizzardCurve(time: number, deltaTime: number): number {
    // ((x-120,000)*(x-660,000))/50,000,000,000,000,000
    return integral(time, time - deltaTime, 120000, 660000, 50000000000000000, deltaTime);
}