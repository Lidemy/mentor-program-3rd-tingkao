function printFactor(n) {
  const array = [];
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      array.push(i);
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
  }
}
printFactor(10);
