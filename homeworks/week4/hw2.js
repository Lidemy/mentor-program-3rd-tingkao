const request = require('request');
const process = require('process');

request('https://lidemy-book-store.herokuapp.com/books', (req, res) => {
  const obj = JSON.parse(res.body);
  if (process.argv[2] === 'list') {
    for (let i = 0; i < 20; i += 1) {
      const answer = `${obj[i].id} ${obj[i].name}`;
      console.log(answer);
    }
  } else if (process.argv[2] === 'read' && process.argv[3]) {
    request.get('https://lidemy-book-store.herokuapp.com/books', (reqR, resR) => {
      const objR = JSON.parse(resR.body);
      let answer = '';
      for (let i = 0; i < 20; i += 1) {
        if (objR[i].id === Number(process.argv[3])) {
          answer = `${objR[i].id} ${objR[i].name}`;
          break;
        } else {
          answer = '找不到此書，再試試其他 id。';
        }
      }
      return console.log(answer);
    });
  }
});
