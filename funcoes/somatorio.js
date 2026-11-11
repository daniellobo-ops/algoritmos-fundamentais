function somatorio(numeros) {
  if (!Array.isArray(numeros)) {
    throw new TypeError('O parâmetro deve ser um array.');
  }
  return numeros.reduce((acc, curr) => acc + curr, 0);
}

module.exports = somatorio;