function solution(s) {
    let input = s.split("");
    let map = new Map();
    var answer = [];
    let check = [];
    
    for(let i = 0; i < input.length; i++) {
        if(map.has(input[i])) {
            answer.push(i - map.get(input[i]));
        } else {
            answer.push(-1);
        }
        map.set(input[i], i);
    }
    return answer;
}