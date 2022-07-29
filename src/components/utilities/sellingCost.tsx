//Takes in how much something costs and returns how much it should be sold for based on how many are being sold
//Sell price = (Current Price * 0.25)/1.15^1 + (Current Price * 0.25)/1.15^2 + ... + (Current Price * 0.25)/1.15^n

export function sellingCost(generatorCost: number, tradeQuantity: number): number {
    var sum = 0;
    for (let i = 1; i < tradeQuantity + 1; i++) {
        sum += (generatorCost * 0.25)/(Math.pow(1.15, i));
    }
    return sum;
}