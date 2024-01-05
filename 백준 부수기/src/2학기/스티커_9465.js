const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let T = parseInt(inputs[0]); // 테스트 케이스 개수 T

let i = 1;
while (T-- > 0) {
  const n = parseInt(inputs[i++]); // 열 정보 n
  const dp = Array.from({ length: 2 }, () => new Array(n + 1).fill(0));

  const stickers = [
    inputs[i++].split(" ").map(Number),
    inputs[i++].split(" ").map(Number),
  ];

  // 초기값 설정
  dp[0][1] = stickers[0][0];
  dp[1][1] = stickers[1][0];

  for (let j = 2; j <= n; j++) {
    dp[0][j] = Math.max(dp[1][j - 1], dp[1][j - 2]) + stickers[0][j - 1];
    dp[1][j] = Math.max(dp[0][j - 1], dp[0][j - 2]) + stickers[1][j - 1];
  }
  console.log(Math.max(dp[0][n], dp[1][n]));
}