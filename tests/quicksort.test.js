const quicksort = require('../funcoes/quicksort');

test('deve ordenar o array desordenado', () => {
  expect(quicksort([5, 3, 8, 1])).toEqual([1, 3, 5, 8]);
});

test('deve retornar array vazio se a entrada for vazia', () => {
  expect(quicksort([])).toEqual([]);
});