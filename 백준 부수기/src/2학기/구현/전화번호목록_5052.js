let fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
	.toString()
	.split("\n");

let idx = 0;
let number = +input[idx++];

while (number--) {
	let num = +input[idx++];
	let arr = [...Array(num)].map(() => input[idx++]).sort();
	let len = 0;
	let result = "YES";

	for (let i = 0; i < num; i++) {
		if (arr[i].slice(0, len) === arr[i - 1]) {
			result = "NO";
			break;
		}
		len = arr[i].length;
	}
	console.log(result);
}