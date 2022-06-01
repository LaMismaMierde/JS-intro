// [1, 2, 3, 4] => 4
const array = [1, 2, 3, 4, 5, 6, 87, 9]

function last(list) {
    if (Array.isArray(list)) {
        const i = list[list.length - 1]
        return i
    } return undefined
}
console.log(last(array))
