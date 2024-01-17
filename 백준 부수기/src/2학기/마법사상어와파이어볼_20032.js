const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = inputs[0].split(" ").map(Number);

// 각각 배열 칸 자체를 격자로 초기화해서 객체 두개 들어갈시에 판별
let arr = Array.from({ length: N }, () => Array(N).fill(null).map(() => []));

class Fireball {
  constructor(m, s, d) {
    this.m = m; // 질량
    this.s = s; // 속력
    this.d = d; // 방향
  }
}

// 각각 0~7 방향
const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];

// 주어지는 파이어볼 초기화 및 넣기 
for (let i = 1; i <= M; i++) {
  const [r, c, m, s, d] = inputs[i].split(" ").map(Number);
  arr[r - 1][c - 1].push(new Fireball(m, s, d));
}

// K번 명령 수행
for (let i = 0; i < K; i++) {
  // 테스트용 배열 하나 더 만들어서 마지막에 arr값을 이걸로 바꿔줌
  let temp = Array.from({ length: N }, () => Array(N).fill(null).map(() => []));

  // 파이어볼 이동
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      // 파이어볼 객체가 들어있는 경우에만 forEach 수행
      arr[x][y].forEach(fb => {
        // 토러스 형태(격자가 이어지는 형태) 때문에 1000 * N 해주기
        let nx = (x + dx[fb.d] * fb.s + 1000 * N) % N;
        let ny = (y + dy[fb.d] * fb.s + 1000 * N) % N;
        temp[nx][ny].push(new Fireball(fb.m, fb.s, fb.d));
      });
    }
  }

  // 파이어볼 합치기 및 분할
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      // 만약 하나의 배열칸 안에 객체가 두개 이상 들어있으면 수행
      if (temp[x][y].length > 1) {
        let totalM = 0, totalS = 0;
        let even = true, odd = true;
        // 마찬가지로 파이어볼 들어있는 배열 칸에만 수행
        temp[x][y].forEach(fb => {
          totalM += fb.m;
          totalS += fb.s;
          if (fb.d % 2 === 0) odd = false;
          else even = false;
        });

        let nm = Math.floor(totalM / 5);
        let ns = Math.floor(totalS / temp[x][y].length);
        // 5개로 분할해주고 해당 칸은 비워주기 
        temp[x][y] = [];

        // 질량이 0 이상인 경우에만 파이어볼이 쪼개짐
        if (nm > 0) {
          for (let nd = 0; nd < 8; nd += 2) {
            // 전부 다 짝수이거나 홀수면 0,2,4,6 아니면 1,3,5,7로 쪼개짐
            if (even || odd) temp[x][y].push(new Fireball(nm, ns, nd));
            else temp[x][y].push(new Fireball(nm, ns, nd + 1));
          }
        }
      }
    }
  }
  // 이렇게 하면 arr에 temp값 씌워짐
  arr = temp;
}

// 질량 합 계산
let result = 0;
arr.forEach(row => {
  row.forEach(cell => {
    cell.forEach(fb => {
      result += fb.m;
    });
  });
});
console.log(result);