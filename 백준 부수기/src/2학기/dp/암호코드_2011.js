const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('').map(Number);

const l = input.length;
const dp = new Array(l + 1).fill(0);

if (input[0] === 0) {
    console.log(0);
} else {
    input.unshift(0); // 인덱싱을 위해 추가한 0
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= l; i++) {
        const cur = input[i];
        const cur2 = input[i - 1] * 10 + input[i];
        
        if (cur >= 1 && cur <= 9) {
            dp[i] += dp[i - 1];
        }
        if (cur2 >= 10 && cur2 <= 26) {
            dp[i] += dp[i - 2];
        }
        dp[i] %= 1000000;
    }

    console.log(dp[l]);
}