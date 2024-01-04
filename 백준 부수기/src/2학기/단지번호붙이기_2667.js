const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(inputs[0]);

let arr = Array.from({ length: N }, () => new Array(N));
let ischeck = Array.from({ length: N }, () => new Array(N).fill(false));
let checknum = 0;
let resulthouse = 0;
let result = []; 

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const checkhouse = (x, y) => {
  ischeck[x][y] = true;
  checknum++;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if(nx >= 0 && nx < N && ny >= 0 && ny < N && arr[nx][ny] === 1 && !ischeck[nx][ny]) {
        checkhouse(nx, ny);
    }
  }
};

for (let i = 1; i < N + 1; i++) {
  let string = inputs[i];
  arr[i-1] = Array.from(string).map(Number);
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (!ischeck[i][j] && arr[i][j] === 1) {
      checkhouse(i, j);
      result.push(checknum);
      checknum = 0;
      resulthouse++;
    }
  }
}

result.sort((a, b) => a - b);

console.log(resulthouse);
for(let r of result) {
    console.log(r);
}
