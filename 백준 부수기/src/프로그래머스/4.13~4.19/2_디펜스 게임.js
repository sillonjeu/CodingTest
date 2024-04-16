// function solution(n, k, enemy) {
//     var answer = 0;
//     let dp = Array(enemy.length).fill(false);
//     let stack = []; 
    
//     stack.push([n, k, 0]);
    
//     const game = (num, count, d) => {
//         if(num - enemy[d] >= 0) {
//             dp[d] = true;
//             if(d + 1 <= enemy.length - 1) {
//                 stack.push([num - enemy[d], count, d + 1]);
//             }
//         } if(count - 1 >= 0) {
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
    
//     return answer;
// }

function solution(n, k, enemy) {
    var answer = 0;
    
    const game = (start) => {
        if(start < enemy.length - 1) {
            let flag = enemy[start] > enemy[start + 1] ? true : false;
            if(flag && k >= 1) {
                k -= 1;
                answer = start + 1;
                game(start + 1);
            } else if(n - enemy[start] >= 0) {
                n -= enemy[start];
                answer = start + 1;
                game(start + 1);
            } else if(k >= 1) {
                k -= 1;
                answer = start + 1;
                game(start + 1);
            }
        } else {
            if(k >= 1 || n - enemy[start] >= 0) {
                answer = enemy.length;
            }
        }
    } 
    game(0);
    
    console.log(answer);
    return answer;
}

solution(7, 3, [5, 5, 5, 5, 2, 3, 1]); // 5
solution(1, 6, [2, 2, 2, 2, 3, 3, 1]); // 7
solution(10, 1, [2, 2, 2, 2, 2, 10]); // 6
solution(10, 1, [2, 2, 2, 2, 10]); // 5