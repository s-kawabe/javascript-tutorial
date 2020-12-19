# Array
## 中身がオブジェクトの配列をループさせて中身を取得するとき[Object object]と出てしまう時
```javascript
const obj1 = [
  {name:'hoge',gender:'man',age:25},
  {name:'fuga',gender:'woman',age:30},
  {name:'foo',gender:'man',age:15},
  {name:'bar',gender:'woman',age:40}
]

let result = [];

for(let i = 0; i < obj1.length; i++) {
  if(obj1[i].age >= 20) {
    result.push(obj1[i]);
  }
}

// "0:[object Object]" こんな感じで出てしまう...
for(let index in result) {
  console.log(`${index}:${result[index]}`);
}

// "0:{'name':'hoge','gender':'man','age':25}" 🤔
for(let index in result) {
  console.log(`${index}:${JSON.stringify(result[index])}`);
}
```