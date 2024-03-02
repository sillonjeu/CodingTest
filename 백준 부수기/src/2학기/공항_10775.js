const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [G, P, ...gate] = fs.readFileSync(filePath).toString().trim().split("\n");
const root = Array.from({ length: +G + 1 }, (_, i) => i);

// 주어진 요소의 루트를 찾는 함수. 경로 압축 최적화를 사용하여, 탐색 과정에서 만나는 모든 요소의 루트를 직접 연결
const find = (x) => {
  if (x === root[x]) return x;
  return (root[x] = find(root[x]));
};

// 두 요소가 속한 집합을 합치는 함수. 두 요소의 루트를 찾아서, 다르면 한쪽의 루트를 다른 쪽의 루트에 연결.
const union = (x, y) => {
  x = find(x);
  y = find(y);
  if (x != y) root[y] = x;
};

const solution = () => {
  let answer = 0; // 도킹에 성공한 비행기 수를 저장하는 변수입니다.

  // 모든 게이트를 순회하면서 각 비행기가 도킹할 수 있는지 확인
  for (let g = 0; g < gate.length; g++) {
    let r = find(+gate[g]); // 현재 비행기가 도킹하려는 게이트의 루트를 찾기

    if (r <= 0) break; // 루트가 0 이하이면, 더 이상 도킹할 수 있는 게이트가 없으므로 반복을 중단
    union(r - 1, r); // 현재 게이트의 루트를 하나 줄인 값과 현재 게이트를 합치기. 다음 비행기가 가능한 경우 한 칸 앞의 게이트를 사용하도록 합니다.
    answer++; 
  }

  console.log(answer);
};

solution();