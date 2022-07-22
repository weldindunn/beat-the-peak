//Integral calculator. Takes a range (a & b) and a function (x1, x2, y) and spits back the area under the curve.
//If one of the sections has a 0 (I.E. (0-x)), multiply the integral by -1

/*
a
S ((x-x1)(x-x2))/y
b

VVVV

a
S (x^2)/y - (x2x)/y - (x1x)/y + (x1x2)/y
b

VVVV

((b^3)/3y - (x2*b^2)/2y - (x1*b^2)/2y + ((x1*x2)/y)*b) - ((a^3)/3y - (x2*a^2)/2y - (x1*a^2)/2y + ((x1*x2)/y)*a) <<< integral (area under the curve)
*/

export function integral(a: number, b: number, x1: number, x2: number, y: number): number {
    return (Math.pow(b, 3)/(3*y) - ((x2 * Math.pow(b, 2))/(2*y)) - ((x1 * Math.pow(b, 2))/(2*y)) + ((x1*x2)/(2*y))*b) - (Math.pow(a, 3)/(3*y) - ((x2 * Math.pow(a, 2))/(2*y)) - ((x1 * Math.pow(a, 2))/(2*y)) + ((x1*x2)/(2*y))*a);
}