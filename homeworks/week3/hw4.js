function isPalindromes(str) {
  const reStr = str;
  let answer = true;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== reStr[str.length - 1 - i]) {
      answer = false;
    }
  }
  return answer;
}

module.exports = isPalindromes;
