function reverse(str) {
  const array = str.split('');
  let result = '';
  for (let i = array.length - 1; i >= 0; i -= 1) {
    result += array[i];
  }
  return result;
}

console.log(reverse('hello'));
