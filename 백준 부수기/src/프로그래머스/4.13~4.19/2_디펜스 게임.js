// function solution(n, k, enemy) {
//     var answer = 0;
//     let dp = Array(enemy.length).fill(false);
//     let stack = []; 
    
//     stack.push([n, k, 0]);
    
//     const game = (num, count, d) => {
//         if(num - enemy[d] >= 0) {
//             dp[d] = true;
//             // 이게 더 작으면 병사로 막기
//             if(d + 1 <= enemy.length - 1 && enemy[d] <= enemy[d + 1]) {
//                 stack.push([num - enemy[d], count, d + 1]);
//                 // 아니면 무적권 쓰기
//             } else if(d + 1 <= enemy.length - 1 && count - 1 >= 0) {
//                 stack.push([num, count - 1, d + 1]);
//                 // 무적권 없으면 병사로 막기
//             } else {
//                 stack.push ([num - enemy[d], count, d + 1]);
//             }
//             // 병사로 못막을때 무적권 있으면 그걸로 막기
//         } else if(count - 1 >= 0) {
//             dp[d] = true; 
//             if(d + 1 <= enemy.length - 1) {
//                 stack.push([num, count - 1, d + 1]);   
//             }
//         }
//     }
    
//     while(stack.length > 0) {
//         game(stack[0][0], stack[0][1], stack[0][2]);
//         stack.splice(0, 1);
//     }
    
//     for(let i = 0; i < dp.length; i++) {
//         if(dp[i]) {
//             answer++;
//         } else {
//             break;
//         }
//     }
//     console.log(answer);
//     return answer;
// }

// function solution(n, k, enemy) {
//     var answer = 0;
    
//     const game = (start) => {
//         if(start < enemy.length - 1) {
//             let flag = enemy[start] > enemy[start + 1] ? true : false;
//             if(flag && k >= 1) {
//                 k -= 1;
//                 answer = start + 1;
//                 game(start + 1);
//             } else if(n - enemy[start] >= 0) {
//                 n -= enemy[start];
//                 answer = start + 1;
//                 game(start + 1);
//             } else if(k >= 1) {
//                 k -= 1;
//                 answer = start + 1;
//                 game(start + 1);
//             }
//         } else {
//             if(k >= 1 || n - enemy[start] >= 0) {
//                 answer = enemy.length;
//             }
//         }
//     } 
    
//     game(0);
    
//     return answer;
// }

function solution(n, k, enemy) {
    // 이분 탐색을 진행하기 위한 left, mid, right 변수 선언
    let [left, right] = [0, enemy.length]
    let mid = Math.floor((left+right)/2)
    while(left <= right) {
        // 해당 탐색에서 사용될 길이 내림차 순(k 소진을 위함)
        const curSlice = enemy.slice(0, mid).sort((a,b) => b-a)
        let noDie = k
        // 전쟁 후 남을 상대 병사의 수
        const curEnemy = curSlice.reduce((acc, cur) => {
            // 무적권이 있다면
            if(noDie > 0) {
                noDie--
                return acc
            }
            return acc + cur
        }, 0)
        // 상대 병사를 무적권 한도 내에 모두 무찌를 수 있는가?
        if(n-curEnemy >= 0 && noDie >= 0) {
            left = mid + 1
        } else {
            right = mid - 1
        }
        mid = Math.floor((left+right)/2)
    }
    return left-1
}


// solution(7, 3, [5, 5, 5, 5, 2, 3, 1]); // 5
// solution(1, 6, [2, 2, 2, 2, 3, 3, 1]); // 7
// solution(10, 1, [2, 2, 2, 2, 2, 10]); // 6
// solution(10, 1, [2, 2, 2, 2, 10]); // 5
// solution(5, 2, [99, 1, 99]); // 3
// solution(7, 1, [2, 1, 5, 1]); // 4
// solution(7, 2, [2, 1, 99, 99]); // 4