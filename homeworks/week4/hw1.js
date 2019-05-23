const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books', (req, res) => {
  const obj = JSON.parse(res.body);
  for (let i = 0; i < 10; i += 1) {
    const answer = `${obj[i].id} ${obj[i].name}`;
    console.log(answer);
  }
});
