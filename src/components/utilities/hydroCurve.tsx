//Takes in a month from 0-11 and returns a hydropower production, altered by precipitation throughout the year

export function hydroCurve(month: number): number {
    // ((-x)(x-9)^2(x-1.3)(x-12))/5000 + 0.9
    return (((0 - month) * Math.pow((month - 9), 2) * (month - 1.3) * (month - 12))/5000 + 0.9)
}