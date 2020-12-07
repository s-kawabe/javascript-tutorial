# Javascriptの非同期処理
- 通信が発生する処理で発生
- 実行完了を待たない
- 並行して次の処理を実行する
- 思い処理、時間のかかる通信中にユーザに越の処理を許可する

**しかし**
- 実行完了までデータが存在しない...
- *非同期の実行完了を制御する必要がある*
1. Promise
2. async/await


## Promise
```javascript
var fetch = require('node-fetch');

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
});
```

## Await
Promiseよりも記述がシンプル
非同期処理を伴う関数→**async**をつける <br>
非同期処理を伴う関数の実行時→**await**をつける
```javascript
var fetch = require('node-fetch');

// 非同期処理をおこなう関数を宣言
const getGitUserName2 = async () => {
  const message = 'GitHubユーザ名：';
  const url = 'https://api.github.com/users/s-kawabe';

  // await ○○ → ○○の処理の実行完了を待つ
  const json = await fetch(url)
    .then(res => {
      console.log('非同期処理成功！');
      return res.json()
    }).catch(error => {
      console.error('非同期処理失敗...');
      return null
    });
  
  const username = json.login;
  console.log(message + username);
}

// 呼び出し側はこれだけ！
getGitUserName2();
```