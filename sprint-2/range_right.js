const rangeRight = (start = 0, end, step = 1, isRight = false) => {
    const numbers = [];
    let funcEnd = end
    if (isRight === false) {
        for (let i = 0; i < end - 1; i++) {
            funcEnd = funcEnd - step
            numbers.push(funcEnd)
        }
        return numbers
    } else {

    }
}
console.log(rangeRight(0, -4, -1))