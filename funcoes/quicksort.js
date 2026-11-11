function quicksort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('O parâmetro deve ser um array.');
  }
  if (arr.length <= 1) return arr;

  const pivo = arr[arr.length - 1];
  const menores = [];
  const maiores = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivo) {
      menores.push(arr[i]);
    } else {
      maiores.push(arr[i]);
    }
  }

  return [...quicksort(menores), pivo, ...quicksort(maiores)];
}

module.exports = quicksort;