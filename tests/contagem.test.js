const contagem = require('../funcoes/contagem');

test('deve contar a quantidade de elementos inteiros no array', () => {
  expect(contagem([1, 2, 3, 4, 5])).toBe(5);
});

test('deve lançar exceção caso não receba um array', () => {
  expect(() => contagem("1, 2, 3")).toThrow(TypeError);
});