// let input = require("fs").readFileSync("./input.txt").toString().split("\n");

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let firstLine = input[0].split(" ");
var n = parseInt(firstLine[0]); // 트럭의 수
var w = parseInt(firstLine[1]); // 다리의 길이
var L = parseInt(firstLine[2]); // 다리의 최대 하중

let truckWeights = input[1].split(" ").map(Number);

class Queue {
    constructor() {
        this.items = [];
        this.totalWeight = 0;
    }

    enqueue(truckWeight) {
        this.items.push(truckWeight);
        this.totalWeight += truckWeight;
    }

    dequeue() {
        this.totalWeight -= this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getTotalWeight() {
        return this.totalWeight;
    }
}

let queue = new Queue();
let time = 0;
let index = 0;

while (index < n) {
    // 다리에서 트럭이 빠져나가는 경우
    if (queue.items.length === w) {
        queue.dequeue();
    }

    // 새 트럭이 다리에 올라갈 수 있는 경우
    if (queue.getTotalWeight() + truckWeights[index] <= L) {
        queue.enqueue(truckWeights[index]);
        index++;
    } else {
        // 올라갈 수 없다면, 다리가 비워질 때까지 가상의 트럭(무게 0)을 추가
        queue.enqueue(0);
    }

    time++;
}

// 마지막 트럭이 다리를 건너는 시간 추가
time += w;

console.log(time);