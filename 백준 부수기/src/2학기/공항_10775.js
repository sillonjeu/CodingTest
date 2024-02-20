const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [G, P, ...gate] = fs.readFileSync(filePath).toString().trim().split("\n");
const root = Array.from({ length: +G + 1 }, (_, i) => i);

const find = (x) => {
  if (x === root[x]) return x;
  return (root[x] = find(root[x]));
};

const union = (x, y) => {
  x = find(x);
  y = find(y);
  if (x != y) root[y] = x;
};

const solution = () => {
  let answer = 0;

  for (let g = 0; g < gate.length; g++) {
    let r = find(+gate[g]);

    if (r <= 0) break;
    union(r - 1, r);
    answer++;
  }

  console.log(answer);
};

solution();