// function solution(order) {
//     var answer = 0;
//     let isstacked = Array.from({length : order.length + 1}, () => false);
    
//     let stack = [];
//     let now = 0;
//     let count = 1;
//     while(true) {
//         if(count == order[now]) {
//             answer++;
//             now++;
//             count++;
//             console.log("답 하나 늘리기");
//         } else if(!isstacked[order[now]]) {
//             isstacked[count] = true;
//             stack.push(count);
//             count++;
//             console.log("스택에 넣기");
//         } else if(stack[stack.length - 1] == order[now]) {
//             stack.splice(stack.length - 1, 1);
//             answer++;
//             now++;
//             console.log("스택에서 빼기");
//         } else {
//             console.log("끝남");
//             break;
//         }
//     }
    
//     return answer;
// }

function solution(order) {
    let truck = 0;
    let main_trail_index = 1;
    const sub_trail = [];

    for(const o of order) {
        while(main_trail_index <= o) {
            sub_trail.push(main_trail_index++);
        }
        if(sub_trail.at(-1) !== o) break;
        sub_trail.pop();
        truck++;
    }
    return truck;
}
