const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const arr = input.map((i) => +i);
const longest = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  let cnt = 0;
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) cnt = Math.max(cnt, longest[j]);
  }
  longest[i] = cnt + 1;
}

console.log(N - Math.max(...longest));