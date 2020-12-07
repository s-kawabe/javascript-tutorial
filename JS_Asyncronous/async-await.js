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