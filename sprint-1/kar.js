function curry(val) {
    let i = 0
    const array = [val]
    return function (n0) {
        while (i <= array.length) {
            return function (n) {
                return n + 1 {
                }
            }
        } i++
    }
}

function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)(4)(5)); // 3


export default add

add() // => 0
add(1)(2)() // => 3



// add(n0)(n1)...(nk)() => n0+n1+...+nk




