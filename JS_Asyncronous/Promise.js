var fetch = require('node-fetch');
const { resolve } = require('path');

// const getGitUserName = () => {
//   const url = 'https://api.github.com/users/s-kawabe'
  
//   // GitHubAPIをfetchメソッドで実行
//   fetch(url).then(res => res.json())
//     .then(json => {
//       console.log('非同期処理成功！');
//       return json.login
//     }).catch(error => {
//       console.error('非同期処理失敗...');
//       return null
//     })
// };

// const message = 'GitHubユーザ名：';
// const username = getGitUserName();
// console.log(message + username);

// ↑コレだとデータ取得前にconsole.logが走ってしまい
// ユーザ名；undefines となる...

const getGitUserName = () => {
  return new Promise((resolve, reject) => {
    const url = 'https://api.github.com/users/s-kawabe'
  
    // GitHubAPIをfetchメソッドで実行
    fetch(url).then(res => res.json())
      .then(json => {
        console.log('非同期処理成功！');
        return resolve(json.login)
      }).catch(error => {
        console.error('非同期処理失敗...');
        return reject(null)
    })
  })
};

const message = 'GitHubユーザ名：';
getGitUserName().then(username => {
  console.log(message + username)
}) ;

