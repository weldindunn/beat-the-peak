//Takes in the time and returns a really really small number which represents the likelihood of a storm happening at that frame
//With this expression, it will likely rain about 2.48 times per year, most likely between March and November

import { integral } from "./integral"

export function stormCurve(time: number, deltaTime: number): number {
    // ((0-x)*(x-720,000))/25,000,000,000,000,000
    return -1*integral(time - deltaTime, time, 0, 720000, 25000000000000000, deltaTime);
}