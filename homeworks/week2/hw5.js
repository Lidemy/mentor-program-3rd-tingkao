function join(str, concatStr) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i === 0) {
      result += str[i];
    } else {
      result += concatStr + str[i];
    }
  }
  return result;
}


function repeat(str, times) {
  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += str;
  }
  return result;
}

console.log(join(['a', 'b', 'c'], '!'));
console.log(repeat('a', 5));
