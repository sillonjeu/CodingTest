const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const m = parseInt(input[1]);
const obstacles = [];

for (let i = 0; i < m; i++) {
  const [row, col] = input[i + 2].split(" ").map(Number);
  obstacles.push({ row, col });
}

function countWays(n, m, obstacles) {
  const MOD = 1e9 + 7;
  let dp = Array.from({ length: n }, () => new Array(m).fill(0));

  // 첫 번째 행 초기화
  dp[0].fill(1);

  // 장애물 처리
  obstacles.forEach(obstacle => {
      dp[obstacle.row][obstacle.col] = -1;
  });

  // 각 행에 대하여
  for (let i = 1; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (dp[i][j] === -1) continue; // 장애물이 있는 경우

          // 위에서 아래로
          if (dp[i - 1][j] !== -1) {
              dp[i][j] = (dp[i][j] + dp[i - 1][j]) % MOD;
          }

          // 왼쪽 대각선
          if (j > 0 && dp[i - 1][j - 1] !== -1) {
              dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MOD;
          }

          // 오른쪽 대각선
          if (j < m - 1 && dp[i - 1][j + 1] !== -1) {
              dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % MOD;
          }
      }
  }

  let result = 0;
  for (let j = 0; j < m; j++) {
      if (dp[n - 1][j] !== -1) {
          result = (result + dp[n - 1][j]) % MOD;
      }
  }
  return result;
}
console.log(countWays(n, m, obstacles).toString());