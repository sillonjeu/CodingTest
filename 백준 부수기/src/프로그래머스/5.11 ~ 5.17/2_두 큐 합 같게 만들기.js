// function solution(queue1, queue2) {
//     var answer = -1;
    
//     // 찾아야 하는 번호 정하기
//     let findnum = 0;
//     for(let i = 0; i < queue1.length; i++) {
//         findnum += queue1[i] + queue2[i];
//     }
//     findnum /= 2;
    
//     // 한 줄로 찾도록 하나의 배열에 때려넣기
//     let arr = [];
//     for(let i = 0; i < queue1.length; i++) {
//         arr.push(queue1[i]);
//     }
//     for(let i = 0; i < queue2.length; i++) {
//         arr.push(queue2[i]);
//     }
    
//     // 조건을 만족했으면 여기서 몇번 해야하는지 찾기 
//     // 1. 배열의 앞쪽에 뭐가 있으면 다른쪽 뒤로 다 보내기
//     // 2. 배열의 뒤쪽에 뭐가 있으면 해당 부분을 다 다른쪽으로 옮겨야함. 그리고 1번 동작
//     // 3. 1번 2번 둘다 해당될 경우(낑겨 있으면) 
//     const checkQ = (start, end) => {
//         let count = 0;
//         let leftSum = 0;
//         let rightSum = 0;
        
//         for (let i = 0; i < queue1.length; i++) {
//             if (i < start || i > end) {
//                 leftSum += queue1[i % queue1.length];
//             } else {
//                 rightSum += queue1[i % queue1.length];
//             }
//         }
        
//         if (leftSum === findnum && rightSum === findnum) {
//             count = Math.abs(start - end) + 1;
//             if (answer === -1 || count < answer) {
//                 answer = count;
//             }
//         }
//         return count;
//     }
    
//     // 하나의 배열에 때려넣기
//     // i는 찾을 배열의 길이, j는 시작 인덱스
//     for(let i = 0; i < arr.length - 1; i++) {
//         let start = 0;
//         let end = start + i;
//         let checknum = 0;
        
//         for(let j = start; j <= end; j++) {
//             checknum += arr[j % arr.length];
//         }
        
//         while(start < arr.length) {
//             if(checknum === findnum) {
//                 checkQ(start, end);
//             }
//             checknum -= arr[start];
//             start++;
//             end++;
//             if (end < arr.length) {
//                 checknum += arr[end % arr.length];
//             }
//         }
//     }
//     return answer;
// }

function solution(queue1, queue2) {
    const totalSum = queue1.reduce((a, b) => a + b, 0) + queue2.reduce((a, b) => a + b, 0);
    if (totalSum % 2 !== 0) return -1; // 합이 홀수면 두 큐의 합을 같게 만들 수 없으므로 -1 반환

    const target = totalSum / 2;
    let currentSum = queue1.reduce((a, b) => a + b, 0);
    let index1 = 0, index2 = 0; // queue1, queue2의 인덱스
    let moves = 0; // 수행한 작업 횟수

    const n = queue1.length;
    const extendedQueue = queue1.concat(queue2); // 큐를 연결하여 확장

    while (index1 < 2 * n) {
        if (currentSum === target) {
            return moves; // 원하는 합을 찾으면 이동 횟수 반환
        }
        if (currentSum < target) {
            // 현재 합이 목표보다 작으면 queue2에서 원소를 가져옴
            currentSum += extendedQueue[index2 + n];
            index2++;
        } else {
            // 현재 합이 목표보다 크면 queue1에서 원소를 제거
            currentSum -= extendedQueue[index1];
            index1++;
        }
        moves++; // 한 번의 조작을 완료
    }

    return -1; // 루프가 끝날 때까지 조건을 만족하지 못하면 -1 반환
}


