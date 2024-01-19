const inputs = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

// M(세로) * N(가로)
const [M, N] = inputs[0].split(" ").map(Number);
// arr에 집어넣기
let arr = [];
for (let i = 1; i <= M; i++) {
    arr.push(inputs[i].split(" ").map(Number));
}

// dp 배열 초기화 (아직 방문하지 않았다는 것을 -1로 표시)
let dp = Array.from(Array(M), () => Array(N).fill(-1));

// 위, 오른쪽, 아래, 왼쪽
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

// DFS와 DP를 사용한 함수
function dfs(x, y) {
    // 도착점에 도달한 경우
    if (x === M - 1 && y === N - 1) {
        return 1;
    }

    // 이미 방문한 경우, 저장된 값을 반환
    if (dp[x][y] !== -1) {
        return dp[x][y];
    }

    dp[x][y] = 0; // 현재 위치 초기화

    // 상하좌우 탐색
    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        // 지도 범위 내에 있고, 다음 위치의 높이가 현재 위치보다 낮은 경우
        if (nx >= 0 && nx < M && ny >= 0 && ny < N && arr[nx][ny] < arr[x][y]) {
            dp[x][y] += dfs(nx, ny); // 해당 경로의 수를 더함
        }
    }
    return dp[x][y];
}

console.log(dfs(0, 0)); // 시작 위치에서 DFS 실행