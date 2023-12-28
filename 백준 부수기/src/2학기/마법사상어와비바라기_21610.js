// 런타임 에러 뜬다;

const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = inputs[0].split(" ").map(Number);

// 격자의 물의 양을 저장하는 배열
let arr1 = [];
for (let i = 1; i <= N; i++) {
  arr1.push(inputs[i].split(" ").map(Number));
}

// 구름의 위치를 저장하는 배열
let arr2 = Array.from(Array(N), () => Array(N).fill(false));
arr2[N - 1][0] = true;
arr2[N - 1][1] = true;
arr2[N - 2][0] = true;
arr2[N - 2][1] = true;

// 방향에 따른 이동 (dx, dy)
const moves = [
  [0, -1], // 1
  [-1, -1], // 2
  [-1, 0], // 3
  [-1, 1], // 4
  [0, 1], // 5
  [1, 1], // 6
  [1, 0], // 7
  [1, -1], // 8
];

// 대각선 확인하기
const diagMoves = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

// 좌표를 격자 내로 조정하는 함수
const adjust = (value) => (value + N) % N;

// 구름 이동 및 비 내리기
const moveClouds = (d, s) => {
  let newClouds = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (arr2[r][c]) {
        // 구름 이동
        let newR = adjust(r + moves[d - 1][0] * s);
        let newC = adjust(c + moves[d - 1][1] * s);
        newClouds.push([newR, newC]);
        // 비 내리기
        arr1[newR][newC]++;
      }
    }
  }
  // 구름 이동 후 초기화
  arr2 = Array.from(Array(N), () => Array(N).fill(false));
  newClouds.forEach(([r, c]) => (arr2[r][c] = true));
  return newClouds;
};

// 물복사버그 마법
const waterCopyMagic = (clouds) => {
  for (let [r, c] of clouds) {
    let extraWater = 0;
    diagMoves.forEach(([dr, dc]) => {
      let diagR = r + dr;
      let diagC = c + dc;
      if (
        diagR >= 0 &&
        diagR < N &&
        diagC >= 0 &&
        diagC < N &&
        arr1[diagR][diagC] > 0
      ) {
        extraWater++;
      }
    });
    arr1[r][c] += extraWater;
  }
};

// 새로운 구름 생성
const createClouds = (oldClouds) => {
  let newCloudsMap = Array.from(Array(N), () => Array(N).fill(false));
  oldClouds.forEach(([r, c]) => (newCloudsMap[r][c] = true));

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (arr1[r][c] >= 2 && !newCloudsMap[r][c]) {
        arr2[r][c] = true;
        arr1[r][c] -= 2;
      } else {
        arr2[r][c] = false;
      }
    }
  }
};

// 주어진 M번의 이동 실행
for (let i = N + 1; i <= N + M; i++) {
  const [d, s] = inputs[i].split(" ").map(Number);
  // 구름 이동 및 비 내리기
  let clouds = moveClouds(d, s);
  // 물복사버그 마법
  waterCopyMagic(clouds);
  // 새로운 구름 생성
  createClouds(clouds);
}

// 최종 물의 양 계산
const totalWater = arr1.flat().reduce((acc, val) => acc + val, 0);
console.log(totalWater);