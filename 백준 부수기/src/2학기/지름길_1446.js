const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, d] = inputs[0].split(" ").map(Number);

// 최단 거리를 저장할 배열을 초기화. 모든 값을 무한대로 설정.
let dist = Array.from(Array(d + 1).fill(Infinity));
// 그래프를 나타내는 배열을 초기화. 각 노드마다 연결된 다른 노드와 가중치를 저장.
const graph = Array.from(Array(d + 1), () => []);

for (let i = 0; i < n; i++) {
  const [start, end, w] = inputs[i + 1].split(" ").map(Number);
  // 목표 지점을 넘어가는 경로는 무시
  if (end > d) continue;
  // 이동 거리보다 가중치가 크거나 같은 경로는 무시
  if (end - start <= w) continue;
  graph[start].push([end, w]);
}

let prev = -1;
for (let i = 0; i <= d; i++) {
  // 이전 지점까지의 최단 거리를 업데이트
  if (i) prev = dist[i - 1];
  // 현재 지점까지의 최단 거리를 계산
  dist[i] = Math.min(dist[i], prev + 1);
  // 현재 지점에서 갈 수 있는 다른 지점들을 검사하고, 최단 거리를 업데이트
  for (let [next, cost] of graph[i]) {
    if (dist[next] > dist[i] + cost) {
      dist[next] = dist[i] + cost;
    }
  }
}
console.log(dist[d]);