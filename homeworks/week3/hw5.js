function add(a, b) {
  let mark = 0;
  let sum = 0;
  const answer = [];
  const aArray = a.split('');
  const bArray = b.split('');
  let longer = a.length;
  if (a.length >= b.length) {
    for (let i = b.length; i < longer; i += 1) {
      bArray.splice(0, 0, '0');
    }
  } else {
    longer = b.length;
    for (let i = a.length; i < longer; i += 1) {
      aArray.splice(0, 0, '0');
    }
  }
  for (let i = 0; i < longer; i += 1) {
    sum = 0;
    sum = Number(aArray[longer - 1 - i]) + Number(bArray[longer - 1 - i]) + mark;
    sum += '';
    if (sum >= 10) {
      answer.splice(0, 0, sum[1]);
      mark = 1;
    } else {
      answer.splice(0, 0, sum);
      mark = 0;
    }
  }
  if (mark === 1) {
    answer.splice(0, 0, 1);
  }
  return answer.join('');
}
module.exports = add;
