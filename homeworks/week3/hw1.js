function stars(n) {
  const array = [];
  for (let i = 1; i <= n; i += 1) {
    const num = i;
    let total = '';
    for (let a = 0; a < num; a += 1) {
      total += '*';
    }
    array.push(total);
  }
  return array;
}

module.exports = stars;
