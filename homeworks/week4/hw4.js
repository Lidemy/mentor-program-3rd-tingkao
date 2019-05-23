// curl -H 'Accept: application/vnd.twitchtv.v5+json' \
// -H 'Client-ID: cllj3tfcc8wxko2ogr5xrrapogabv9' \
// -X GET 'https://api.twitch.tv/kraken/games/top'

const request = require('request');

// 第一種方法：把要帶到 SERVER 的東西編進網址
// request.get('https://api.twitch.tv/kraken/games/top?Accept=application/vnd.twitchtv.v5+json&client_id=cllj3tfcc8wxko2ogr5xrrapogabv9'
// , function(req, res){
//     let obj = JSON.parse(res.body);
//     for (let i = 0; i < obj.top.length; i += 1){
//         console.log(`${obj.top[i].game._id} ${obj.top[i].game.name}`);
//     }
// })


// 第二種方法：把要帶到 SERVER 的東西用參數帶進去，這邊用 get 是因為該 API 只提供用 get 方式取資料
request.get({
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'cllj3tfcc8wxko2ogr5xrrapogabv9',
  },
}, (req, res) => {
  const obj = JSON.parse(res.body);
  const id = '_id';
  for (let i = 0; i < obj.top.length; i += 1) {
    console.log(`${obj.top[i].game[id]} ${obj.top[i].game.name}`);
  }
});
