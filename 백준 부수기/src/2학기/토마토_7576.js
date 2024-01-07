const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N, H] = inputs[0].split(" ").map(Number);

// 3차원 배열 초기화
let arr = [];
for (let h = 0; h < H; h++) {
  let layer = [];
  for (let n = 1 + h * N; n <= h * N + N; n++) {
    layer.push(inputs[n].split(" ").map(Number));
  }
  arr.push(layer);
}

// 방향 벡터: 위, 아래, 왼쪽, 오른쪽, 앞, 뒤
const dx = [0, 0, 0, 0, 1, -1];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [1, -1, 0, 0, 0, 0];

// BFS를 위한 큐
let queue = [];

// 모든 토마토가 이미 익었는지 확인
let allRipeInitially = true;
let unripeCount = 0;

for (let h = 0; h < H; h++) {
  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      if (arr[h][n][m] === 0) {
        allRipeInitially = false;
        unripeCount++;
      } else if (arr[h][n][m] === 1) {
        queue.push([h, n, m, 0]); // z, x, y, day
      }
    }
  }
}

if (allRipeInitially) {
  console.log(0);
  return;
}

// BFS 실행
let days = 0;
while (queue.length > 0) {
  const [z, x, y, day] = queue.shift();
  days = Math.max(days, day);

  for (let i = 0; i < 6; i++) {
    const nz = z + dz[i];
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && nz >= 0 && nz < H && arr[nz][nx][ny] === 0) {
      arr[nz][nx][ny] = 1;
      unripeCount--;
      queue.push([nz, nx, ny, day + 1]);
    }
  }
}

// 모든 토마토가 익었는지 확인
console.log(unripeCount === 0 ? days : -1);