export function numberConvertor(num: number, isWatts: boolean): string {
    var convertedNum = "";

    if (num > 999999999999999) {
        convertedNum = (num/1000000000000000).toFixed(3).toString().replace(/0+$/, '').replace(/\.$/, '');
        if (isWatts) {
            convertedNum += "\n";
        }
        convertedNum += " quadrillion";
    } else if (num > 999999999999) {
        convertedNum = (num/1000000000000).toFixed(3).toString().replace(/0+$/, '').replace(/\.$/, '');
        if (isWatts) {
            convertedNum += "\n";
        }
        convertedNum += " trillion";
    } else if (num > 999999999) {
        convertedNum = (num/1000000000).toFixed(3).toString().replace(/0+$/, '').replace(/\.$/, '');
        if (isWatts) {
            convertedNum += "\n";
        }
        convertedNum += " billion";
    } else if (num > 999999) {
        convertedNum = (num/1000000).toFixed(3).toString().replace(/0+$/, '').replace(/\.$/, '');
        if (isWatts) {
            convertedNum += "\n";
        }
        convertedNum += " million";
    } else if (num > 999) {
        if (num > 99999) {
            convertedNum = num.toFixed(0).toString().slice(0, 3) + "," + num.toFixed(0).toString().slice(3);
        } else if (num > 9999) {
            convertedNum = num.toFixed(0).toString().slice(0, 2) + "," + num.toFixed(0).toString().slice(2);
        } else {
            convertedNum = num.toFixed(0).toString().slice(0, 1) + "," + num.toFixed(0).toString().slice(1);
        }
    } else {
        convertedNum = num.toFixed(0).toString();
    }

    if (isWatts) {
        convertedNum += " watts";
    }

    return convertedNum.replace(/^[^/]+\/\*!?/, '').replace(/\*\/[^/]+$/, '');
}