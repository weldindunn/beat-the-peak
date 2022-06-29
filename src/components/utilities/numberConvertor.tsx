export function numberConvertor(num: number): string {
    if (num > 999999999999) {
        return (num/1000000000000).toFixed(3).toString().replace(/0+$/, '').replace(/\.$/, '') + " trillion";
    } else if (num > 999999999) {
        return (num/1000000000).toFixed(3).toString().replace(/0+$/, '').replace(/\.$/, '') + " billion";
    } else if (num > 999999) {
        return (num/1000000).toFixed(3).toString().replace(/0+$/, '').replace(/\.$/, '') + " million";
    } else if (num > 999) {
        if (num > 99999) {
            return num.toFixed(0).toString().slice(0, 3) + "," + num.toFixed(0).toString().slice(3);
        } else if (num > 9999) {
            return num.toFixed(0).toString().slice(0, 2) + "," + num.toFixed(0).toString().slice(2);
        } else {
            return num.toFixed(0).toString().slice(0, 1) + "," + num.toFixed(0).toString().slice(1);
        }
    } else {
        return num.toFixed(0).toString();
    }
}