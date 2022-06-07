const range = (start = 0, end, step = 1) => {
    const numbers = [];
    numbers.push(start)
        for (let i = 0; i < end; i++) {
            start = start + step
            numbers.push(start)
        }
        return numbers
}
console.log(range(0, 10, 1))