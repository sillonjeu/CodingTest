function solution(k, score) {
    let answer = [];
    let arr = [];

    score.map((s) => {
        if (arr.length != k) {
            arr.unshift(s);
            arr.sort((a, b) => b - a);
            answer.push(arr.at(-1));
        } else {
            arr.unshift(s);
            arr.sort((a, b) => b - a);
            arr.pop();
            answer.push(arr.at(-1));
        }
    })
    return answer;
}