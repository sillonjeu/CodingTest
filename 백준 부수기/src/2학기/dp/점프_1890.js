const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 게임판의 크기 N을 읽어옴
let n = Number(input[0]);
// 게임판 데이터를 저장할 2차원 배열 초기화
let arr = new Array(n).fill(new Array(n));
for (let i = 0; i < arr.length; i++) {
  arr[i] = input[i + 1].split(" ").map(Number);
}
// 동적 계획법을 위한 배열 dp를 초기화
let dp = new Array(n);
for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array(n).fill(BigInt(0));
}
// 시작 지점은 1로 설정 (경로의 수)
dp[0][0] = BigInt(1);

// 게임판을 순회하면서 각 칸에서 도달할 수 있는 경로의 수 계산
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let num = arr[i][j];
    // 현재 칸에서 이동할 수 없으면 계속 진행
    if (num === 0) continue;
    // 아래쪽으로 이동 가능한 경우 경로의 수를 업데이트
    if (i + arr[i][j] < n) {
      dp[i + arr[i][j]][j] += dp[i][j];
    }
    // 오른쪽으로 이동 가능한 경우 경로의 수를 업데이트
    if (j + arr[i][j] < n) {
      dp[i][j + arr[i][j]] += dp[i][j];
    }
  }
}
// 결과 출력 (오른쪽 아래 칸까지 도달하는 경로의 수)
console.log(dp[n - 1][n - 1].toString());