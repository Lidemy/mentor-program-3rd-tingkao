function capitalize(str) {
  const first = str[0].toUpperCase();
  let others = '';
  for (let i = 0; i < str.length - 1; i += 1) {
    others += str[i + 1];
  }
  return first + others;
}

console.log(capitalize('hello'));
