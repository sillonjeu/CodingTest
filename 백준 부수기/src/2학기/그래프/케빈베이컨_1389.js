const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

class Graph {
  constructor() {
    this.graph = {};
  }
  addVertex(vertex) {
    if (!this.graph[vertex]) {
      this.graph[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.graph[vertex1].includes(vertex2)) {
      this.graph[vertex1].push(vertex2);
    }
    if (!this.graph[vertex2].includes(vertex1)) {
      this.graph[vertex2].push(vertex1);
    }
  }
}

const [N, M] = inputs[0].split(" ").map(Number);
const graph = new Graph();

for (let i = 1; i <= M; i++) {
  const [A, B] = inputs[i].split(" ").map(Number);
  graph.addVertex(A);
  graph.addVertex(B);
  graph.addEdge(A, B);
}

let minKevinBacon = Infinity;
let person = 0;

for (let i = 1; i <= N; i++) {
  const kevinBacon = bfs(graph, i, N);
  if (kevinBacon < minKevinBacon) {
    minKevinBacon = kevinBacon;
    person = i;
  }
}

console.log(person);

function bfs(graph, startNode, N) {
  let visited = new Array(N + 1).fill(false);
  let distance = new Array(N + 1).fill(0);
  let needVisit = [];

  needVisit.push([startNode, 0]); // 시작 노드와 거리
  visited[startNode] = true;

  while (needVisit.length !== 0) {
    const [node, dist] = needVisit.shift();

    if (graph.graph[node]) {
      graph.graph[node].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          distance[neighbor] = dist + 1;
          needVisit.push([neighbor, dist + 1]);
        }
      });
    }
  }
  // 모든 최단 경로의 합계를 반환
  return distance.reduce((acc, cur) => acc + cur, 0);
}
