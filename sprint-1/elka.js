/* Напишите функцию `tree`
, которая возвращает ASCII-ёлочку высотой N символов из «*» и «|». Если на вход функции передали не число и не строку, нужно выбросить ошибку `TYPE_ERROR`
. Уровень ёлочки строго от трёх. Если уровень меньше трёх, вернуть `null`
. */
/**
const expected =
            '   *   \n' +
            '  ***  \n' +
            ' ***** \n' +
            '*******\n' +
            '   |   \n';
assert.strictEqual(tree(5), expected);
assert.strictEqual(tree('5'), expected);
*/

const tree = (lvl) => {
    let expected = ""
    let i = 0;
    let j = 0;
    let min = 3;
    let space = "";
    let star = "";
    let line = "";
    if (lvl > min) {
        while (i < lvl) {
            space = "";
            star = "";
            line = "";
            if (i == lvl - 1) {
                for (j = 0; j < i - 1; j++) space += " ";
            } else {
                for (j = 0; j < lvl - (i + 2); j++) space += " ";
            }
            if (i !== lvl - 1) {
                for (j = 0; j < 2 * i + 1; j++) star += "*";
            }
            for (j = 0; j < 1; j++) line += "|"
            if (i !== lvl - 1) {
                expected += space + star + space + '\n'
            } else {
                expected += space + line + space + '\n'
            }
            i++
        } return expected
    } return null
};