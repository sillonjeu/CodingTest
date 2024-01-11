const fs = require('fs');
let [firstLine, ...gridLines] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, m] = firstLine.split(' ').map(Number);
let graph = gridLines.map(line => line.split(' ').map(Number));

// 8방향 탐색을 위한 배열
const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
const dy = [0, -1, -1, -1, 0, 1, 1, 1];
let vis = Array.from({ length: n }, () => Array(m).fill(false));
let isPeak;

// BFS 함수: 주어진 좌표(yy, xx)에서 시작하여 산봉우리인지 확인
function BFS(yy, xx) {
    let q = [];
    q.push({ y: yy, x: xx });
    vis[yy][xx] = true;

    while (q.length > 0) {
        let { x, y } = q.shift();

        for (let i = 0; i < 8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            // 격자 범위를 벗어나면 무시
            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
            // 주변에 더 높은 격자가 있으면 산봉우리가 아님
            if (graph[yy][xx] < graph[ny][nx]) isPeak = false;
            // 이미 방문했거나, 다른 높이의 격자면 무시
            if (vis[ny][nx] || graph[yy][xx] != graph[ny][nx]) continue;
            
            q.push({ y: ny, x: nx });
            vis[ny][nx] = true;
        }
    }
}

// 산봉우리 개수를 세는 변수
let cnt = 0;
// 모든 격자를 순회하며 산봉우리 확인
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        // 이미 방문했거나 높이가 0인 격자는 무시
        if (vis[i][j] || !graph[i][j]) continue;
        isPeak = true;
        BFS(i, j);
        // 산봉우리라면 카운트 증가
        if (isPeak) cnt++;
    }
}

console.log(cnt);