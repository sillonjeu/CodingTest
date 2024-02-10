const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let currentInput = 0;
function readLine() {
    return inputs[currentInput++];
}

// 메인 함수
function main() {
    T = parseInt(readLine());
    while (T--) {
        let ans = [0, 0, 0, 0, 0];

        N = parseInt(readLine());

        // ADDH 실행
        ans[0] += Math.floor(N / 60);
        N %= 60;

        // 조건문
        if (N <= 35) {
            if (N % 10 > 5) {
                ans[1] += Math.floor(N / 10) + 1;
                ans[4] += 10 - N % 10;
            } else {
                ans[1] += Math.floor(N / 10);
                ans[3] += N % 10;
            }
        } else {
            ans[0]++;
            if (N % 10 >= 5) {
                ans[2] += 6 - (Math.floor(N / 10) + 1);
                ans[4] += 10 - N % 10;
            } else {
                ans[2] += 6 - Math.floor(N / 10);
                ans[3] += N % 10;
            }
        }
        // 출력
        console.log(ans.join(" "));
    }
}
main();