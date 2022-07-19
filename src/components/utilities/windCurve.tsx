//Takes in a month from 0-11 and returns a wind production, mimicking general wind patterns throughout the year

export function windCurve(month: number): number {
    //0.33sin(pi/6 * x) + 1
    return ((0.33 * Math.sin((Math.PI/6) * month)) + 1)
}