function fibonacci(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new TypeError('O parâmetro deve ser um número inteiro.');
  }
  if (n <= 0) return [];
  if (n === 1) return [0];

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

module.exports = fibonacci;