//Takes in a month from 0-11 and returns a solar production, peaking in june and hitting a low point in January

export function solarCurve(month: number): number {
    // y = -(0.4x - 2.4)^2 + 10
    return ((-1)*(Math.pow((0.40 * month - 2.4), 2)) + 10)/10 + 0.25
}