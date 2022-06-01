const inverse = (arr, num) => {
    if (arr.length === 0 && num === undefined) {
        return arr;
    }
    else if (num === undefined || num === 0) {
        let revArray = arr.reverse();
        return revArray
    }
    else {
        if (num > 0) {
            let firstArgs = arr.splice(0, num);
            let specialArray = [];
            for (i = 0; i < arr.length; i++) {
                specialArray[i] = arr[(arr.length) - 1] - i
            }
            specialArray.unshift(...firstArgs);
            return specialArray
        } else {
            let lastArgs = arr.splice((arr.length + num), arr.length)
            let specialArray = [];
            for (i = 0; i < arr.length; i++) {
                specialArray[i] = arr[(arr.length) - 1] - i
            }
            specialArray.push(...lastArgs);
            return specialArray
        }
    }
}
