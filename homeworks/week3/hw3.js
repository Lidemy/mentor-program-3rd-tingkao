function isPrime(n) {
  let answer = true;
  if (n <= 1) {
    answer = false;
  } else if (n > 2) {
    for (let i = 2; i < n; i += 1) {
      if ((n % i) === 0) {
        answer = false;
      }
    }
  }
  return answer;
}

module.exports = isPrime;
