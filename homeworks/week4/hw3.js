const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  request.get('https://lidemy-book-store.herokuapp.com/books', (req, res) => {
    const obj = JSON.parse(res.body);
    for (let i = 0; i < 20; i += 1) {
      const answer = `${obj[i].id} ${obj[i].name}`;
      console.log(answer);
    }
  });
} else if (process.argv[2] === 'read' && process.argv[3]) {
  request.get('https://lidemy-book-store.herokuapp.com/books', (req, res) => {
    const obj = JSON.parse(res.body);
    let answer = '';
    for (let i = 0; i < 20; i += 1) {
      if (obj[i].id === Number(process.argv[3])) {
        answer = `${obj[i].id} ${obj[i].name}`;
        break;
      } else {
        answer = '找不到此書，再試試其他 id。';
      }
    }
    return console.log(answer);
  });
} else if (process.argv[2] === 'delete' && process.argv[3]) {
  let deleteBook = '';
  request.get(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, (req, res) => {
    const obj = JSON.parse(res.body);
    deleteBook = obj.name;
  });
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, () => {
    console.log(`成功刪除 ${deleteBook}`);
  });
} else if (process.argv[2] === 'create' && process.argv[3]) {
  request.post({
    url: 'https://lidemy-book-store.herokuapp.com/books',
    form: {
      name: process.argv[3],
    },
  }, (req, res) => {
    console.log(res.statusCode);
  });
} else if (process.argv[2] === 'update' && process.argv[3] && process.argv[4]) {
  request.patch({
    url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    form: {
      name: process.argv[4],
    },
  }, (req, res) => {
    console.log(res.statusCode);
  });
}
