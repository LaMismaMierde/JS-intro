const namespace = 'a.b.c.d.e' // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"

const array = namespace.split('')
const newObject = (anyArray) => {
    const newArray = []
    anyArray.forEach(item => {
        if (item !== ".") {
            newArray.push(item)
        }
    })
    return newArray
}

const makeNameSpace = (arr) => {
    let obj = {};
    arr = arr.reverse()
    arr.forEach((key) => {
        console.log(obj)
        if (!(key in obj)) {
            obj = {
                [key]: {...obj}
            }
        }
    });
    return obj;
}


console.log(newObject(array))
console.log(JSON.stringify(makeNameSpace(newObject(array))))