const inputs = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

const [N, K] = inputs[0].split(" ").map(Number);

let numcheck = N;
let bottleCount = 0; // 추가해야 하는 물병의 수

while (true) {
    let count = 0, tempNumcheck = numcheck;
    // 이진수 변환하여 1의 개수를 센다 (비어있지 않은 물병의 수 계산)
    while (tempNumcheck) {
        if (tempNumcheck % 2 === 1) count++;
        tempNumcheck = Math.floor(tempNumcheck / 2);
    }

    // 1의 개수 (현재 비어있지 않은 물병의 수)가 K 이하면 루프 종료
    if (count <= K) break;

    // K를 넘는 경우, 가장 작은 물병을 추가해서 1의 개수를 줄임
    numcheck++;
    bottleCount++;
}

console.log(bottleCount);
