function numeroprimo(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new TypeError('O parâmetro deve ser um número inteiro.');
  }
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = numeroprimo;