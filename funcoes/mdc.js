function mdc(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b)) {
    throw new TypeError('Os parâmetros devem ser números inteiros.');
  }
  let aAbs = Math.abs(a);
  let bAbs = Math.abs(b);
  while (bAbs !== 0) {
    const resto = aAbs % bAbs;
    aAbs = bAbs;
    bAbs = resto;
  }
  return aAbs;
}

module.exports = mdc;