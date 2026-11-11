const mdc = require('../funcoes/mdc');

test('deve calcular o MDC entre 24 e 18', () => {
  expect(mdc(24, 18)).toBe(6);
});

test('deve lançar TypeError para entradas não inteiras', () => {
  expect(() => mdc(12.5, 6)).toThrow(TypeError);
});