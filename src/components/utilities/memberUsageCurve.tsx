//Takes in the current month and returns the number of watts used by each member that month

export function memberUsageCurve(month: number): number {
    //Equation: y = 10 - cos((pi/7)*x - 0.4)
    return (
        10 - Math.cos((Math.PI/7)*month - 0.5)
    )
}