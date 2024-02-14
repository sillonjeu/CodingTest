const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

// 가능한 경우의 수를 저장할 변수
let answer = 0;

// 7개의 위치를 선택하는 함수를 호출
select7([], 0);

// 최종 결과(가능한 경우의 수)를 출력
console.log(answer);

// 깊이 우선 탐색(DFS)을 수행하는 함수
function dfs(group) {
  // 상, 하, 좌, 우 이동을 위한 배열
  const next = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];
  // 방문 여부를 기록하는 2차원 배열
  const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
  // 선택된 위치를 방문한 것으로 표시
  for (let [y, x] of group) {
    visited[y][x] = true;
  }
  // 첫 번째 위치를 시작점으로 설정
  const [y, x] = group[0];
  visited[y][x] = false;
  // DFS를 위한 스택
  const stack = [[y, x]];
  // 방문한 위치의 수
  let pass = 0;
  // 스택이 비어있지 않은 동안 반복
  while (stack.length !== 0) {
    const [a, b] = stack.pop();
    // 상, 하, 좌, 우 방향으로 이동
    for (let [a2, b2] of next) {
      if (a + a2 >= 0 && a + a2 < 5 && b + b2 >= 0 && b + b2 < 5) {
        if (visited[a + a2][b + b2]) {
          stack.push([a + a2, b + b2]);
          visited[a + a2][b + b2] = false;
        }
      }
    }
    pass++
  }
  // 모든 위치를 방문했다면 true를 반환
  if (pass === 7) return true;
  return false;
}

// 7개의 위치를 선택하는 함수
function select7(stack, number) {
  const len = stack.length;
  // 선택된 S의 개수가 4개 미만이면 반환
  if (len - number > 3) {
    return;
  }
  // 7개의 위치가 모두 선택되었다면
  if (len === 7) {
    // S의 개수가 4개 이상이고, DFS 결과가 true라면 경우의 수를 1 증가
    if (number >= 4) {
      if (dfs([...stack])) {
        answer++;
      }
    }
    return;
  }
  // 다음 위치를 선택하기 위한 반복문
  const [a, b] = stack[len - 1] || [-1, -1];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      // 이전에 선택된 위치보다 뒤에 있는 위치를 선택
      if ((i === a && j > b) || i > a) {
        if (input[i][j] === "S") {
          // S를 선택한 경우
          select7([...stack, [i, j]], number + 1);
        } else {
          // Y를 선택한 경우
          select7([...stack, [i, j]], number);
        }
      }
    }
  }
}
