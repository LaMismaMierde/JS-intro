const roman = (num) => {
    const romNum = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    const arabNum = { CM: 900, M: 1000, CD: 400, D: 500, XC: 90, C: 100, XL: 40, L: 50, IX: 9, X: 10, IV: 4, V: 5, I: 1 };
    let roman = '';
    let arab = 0;
    if (Number(num)) {
        for (let i in romNum) {
            while (num >= romNum[i]) {
                roman += i;
                num -= romNum[i];
            }
        }
        return roman;
    } else {
        for (let i in arabNum) {
            while (num.toUpperCase().includes(i)) {
                arab += arabNum[i];
                num = num.toUpperCase().replace(i, '')
            }
        }
        return +arab;
    }
}