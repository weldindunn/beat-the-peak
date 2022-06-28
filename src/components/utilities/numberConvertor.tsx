export function numberConvertor(num: number): string {
    if (num > 999999999999) {
        return (num/1000000000000).toString() + " trillion";
    } else if (num > 999999999) {
        return (num/1000000000).toString() + " billion";
    } else if (num > 999999) {
        return (num/1000000).toString() + " million";
    } else if (num > 999) {
        return (num/1000).toString() + " thousand";
    } else {
        return num.toString();
    }
}