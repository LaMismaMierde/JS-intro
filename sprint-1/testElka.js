'use strict';

QUnit.module('Тестируем функцию elka', function () {
    QUnit.test('Рисуем елку высотой 5', function (assert) {
        const expected =
            '   *   \n' +
            '  ***  \n' +
            ' ***** \n' +
            '*******\n' +
            '   |   \n';
        assert.strictEqual(tree(5), expected);
        assert.strictEqual(tree('5'), expected);
    });
    QUnit.test('Рисуем елку высотой 2', function (assert) {
        assert.strictEqual(tree(2), null);
        assert.strictEqual(tree('2'), null);
    });
});
