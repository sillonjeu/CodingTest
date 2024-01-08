const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = inputs[0].split(" ").map(Number);
const coins = inputs.slice(1, n + 1).map(Number);

const dp = Array(k + 1).fill(0);
dp[0] = 1;

for (let coin of coins) {
  for (let j = coin; j <= k; j++) {
    dp[j] += dp[j - coin];
  }
}

console.log(dp[k]);
