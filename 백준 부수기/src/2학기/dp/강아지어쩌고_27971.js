const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// N: 원하는 강아지의 수 // M: 닫힌 구간 갯수 // 강아지 생성하는 A랑 B.
const [N, M, A, B] = inputs[0].split(" ").map(Number);

let flag = Array.from({length: N+1}, () => true);
for(let i = 1; i < M + 1; i++) {
    const [a, b] = inputs[i].split(" ").map(Number);
    for(let j = a; j <= b; j++) {
        flag[j] = false;
    }
}
let ischeck = Array.from({length: N+1}, () => false);
let arr = Array.from({length: N+1}, () => Infinity);
arr[0] = 0; ischeck[0] = true;


for(let i = 0; i < N; i++) {
    if(i + A <= N && flag[i+A] && ischeck[i]) {
        arr[i + A] = Math.min(arr[i + A], arr[i] + 1);
        ischeck[i + A] = true; 
    }
    if(i + B <= N && flag[i+B] && ischeck[i]) {
        arr[i + B] = Math.min(arr[i + B], arr[i] + 1);
        ischeck[i + B] = true;
    }
}

if(ischeck[N]) {
    console.log(arr[N]);
}
else {
    console.log("-1");
}