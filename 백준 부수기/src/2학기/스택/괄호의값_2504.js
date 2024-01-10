const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let s = Array.from(inputs[0]);
let stack = [];
let result = 0;
let temp = 1;
let isValid = true;

for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
        stack.push(s[i]);
        temp *= 2;
    } else if (s[i] === '[') {
        stack.push(s[i]);
        temp *= 3;
    } else if (s[i] === ')') {
        if (stack.length === 0 || stack[stack.length - 1] !== '(') {
            isValid = false;
            break;
        }
        if (s[i - 1] === '(') {
            result += temp;
        }
        stack.pop();
        temp /= 2;
    } else if (s[i] === ']') {
        if (stack.length === 0 || stack[stack.length - 1] !== '[') {
            isValid = false;
            break;
        }
        if (s[i - 1] === '[') {
            result += temp;
        }
        stack.pop();
        temp /= 3;
    }
}

if (stack.length !== 0) {
    isValid = false;
}

console.log(isValid ? result : 0);