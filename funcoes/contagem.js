function contagem(dados) {
  if (!Array.isArray(dados)) {
    throw new TypeError('O parâmetro deve ser um array.');
  }
  return dados.filter(valor => typeof valor === 'number' && Number.isInteger(valor)).length;
}

module.exports = contagem;