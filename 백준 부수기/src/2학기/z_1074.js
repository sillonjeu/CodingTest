const inputs = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

function zOrder(N, r, c) {
    if (N == 0) return 0;
    let half = 1 << (N - 1); // 2^(N-1), 배열의 반 크기
    let quadrantSize = half * half; // 현재 사분면의 크기

    if (r < half) {
        if (c < half) {
            // 1사분면
            return zOrder(N - 1, r, c);
        } else {
            // 2사분면
            return quadrantSize + zOrder(N - 1, r, c - half);
        }
    } else {
        if (c < half) {
            // 3사분면
            return 2 * quadrantSize + zOrder(N - 1, r - half, c);
        } else {
            // 4사분면
            return 3 * quadrantSize + zOrder(N - 1, r - half, c - half);
        }
    }
}

const [N, r, c] = inputs[0].split(" ").map(Number); 

console.log(zOrder(N, r, c));