/* const euclid = (a, b, c) => {
    if (b == undefined) {
        return a
    } else if (c == undefined) {
        const div = a % b
        if (div !== 0) {
            b = euclid(b, div)
        }
        return b
    } else {
        if (a %  b !== 0) {
            b = euclid(euclid(a,b), c)
        }
        return b
    }
}
 */
const isNotValidType  = (element) => !(Number.isInteger(element) || typeof element == 'bigint');
const isNotAboveZero  = (element) => !(element > 0);

const euclid = (...numbers) => {
    if (!numbers.length) {
        throw new TypeError('There are no arguments');
    }

    if (numbers.some(isNotValidType)) {
        throw new TypeError('The arguments must be natural numbers');
    }

    if (numbers.some(isNotAboveZero)) {
        throw new RangeError('The arguments must be natural numbers');
    }

    const [initialValue, ...nextNumbers] = numbers;

    return nextNumbers.reduce((accumulator, currentValue) => {
        let buffCurrentValue = currentValue;
        while (accumulator && buffCurrentValue) {
            accumulator > buffCurrentValue ? accumulator %= buffCurrentValue : buffCurrentValue %= accumulator;
        }
        return (accumulator + buffCurrentValue);
    }, initialValue);
}

const evklidMass = (...args) => {
    const temp = args.sort((a, b) => b - a);
    let result = 1;
    for (i = 1; i < temp.length; i++) {
    const nod = evklid(temp[0], temp[temp.length - i]);
    const isNod = temp.filter(value => (value % nod) === 0);
    console.log(isNod);
    if(isNod.length === temp.length){
    return nod;
    }
    }
    
    }
    
    const evklid = function(a, b) {
    while(a !== 0 && b !== 0) {
    if (a > b) {
    a = a % b;
    } else if (b > a) {
    b = b % a;
    }
    }
    return a + b
    }
    
    const test = evklidMass(12, 144, 288, 10)
    console.log('TEST: ', test)