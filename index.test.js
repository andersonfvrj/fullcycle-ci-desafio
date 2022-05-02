const app = require('./index')

test('a soma deve retornar 7', () => {
    expect(app.soma(5,2)).toBe(7);
});