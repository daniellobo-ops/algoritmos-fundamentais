const somatorio = require('../funcoes/somatorio');

test('deve somar os elementos do array', () => {
  expect(somatorio([1, 2, 3, 4, 5])).toBe(15);
});

test('deve retornar 0 para array vazio', () => {
  expect(somatorio([])).toBe(0);
});