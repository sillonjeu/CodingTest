// function solution(beginning, target) {
//     var answer = 0;
//     let num = beginning[0].length;
    
//     const makearr = flag => {
//         let start = JSON.parse(JSON.stringify(beginning));
//         let end = JSON.parse(JSON.stringify(target));
//         let result = 0;
        
//         // 한번 바꿔보기
//         if(flag) {
//             for(let i = 0; i < start.length; i++) {
//                 start[i][0] = (start[i][0] == 0 ? 1 : 0); 
//             }
//             result++;
//         } 
//             // 행부터 보기
//             for(let i = 0; i < start.length; i++) {
//                 if(start[i][0] != end[i][0]) {
//                     // console.log(flag, i, "행");
//                     result++;
//                     for(let j = 0; j < start.length; j++) {
//                         start[i][j] = (start[i][j] == 0 ? 1 : 0);
//                     }
//                 }
//             }
        
//             // 열 보기
//             for(let i = 1; i < num; i++) {
//                 for(let j = 0; j < start.length; j++) {
//                     if(start[j][i] != end[j][i]) {
//                         // console.log(flag, i, "열");
//                         result++;
//                         for(let z = 0; z < start.length; z++) {
//                             start[z][i] = (start[z][i] == 0 ? 1 : 0);
//                         }
//                     }
//                 }
//             }
        
//         for(let i = 0; i < start.length; i++) {
//             for(let j = 0; j < num; j++) {
//                 if(start[i][j] != end[i][j]) {
//                     // console.log(flag, "틀림");
//                     result = -1;
//                     break;
//                 }
//             }
//         }
        
//         // console.log(flag, result);
//         return result;
//     }

//     return answer = Math.max(makearr(true), makearr(false)) == -1 ? -1 : Math.min(makearr(true), makearr(false));
// }


// 경우의 수 다 찾아보기..?
function solution(beginning, target) {
    const N = beginning.length;
    const M = beginning[0].length;
    let ans = Infinity;
    
    // 경우의 수 4가지
    /*
        1. 각 행의 첫 번째 원소가 서로 다르면 행을 먼저 뒤집는다. 이후 각 열의 첫 번째 원소가 다르면 열을 뒤집는다.
        2. 각 행의 첫 번째 원소가 서로 같으면 행을 먼저 뒤집는다. 이후 각 열의 첫 번째 원소가 다르면 열을 뒤집는다.
        3. 각 열의 첫 번째 원소가 서로 다르면 열을 먼저 뒤집는다. 이후 각 행의 첫 번째 원소가 다르면 행을 뒤집는다.
        4. 각 열의 첫 번째 원소가 서로 같으면 열을 먼저 뒤집는다. 이후 각 행의 첫 번째 원소가 다르면 행을 뒤집는다.
    */
    for (let k = 0; k < 4; k++) {
        let copy = JSON.parse(JSON.stringify(beginning));
        let cnt = 0;

        for (let i = 0; i < N; i++) {
            if ((k < 2 && copy[i][0] != target[i][0]) || (k >= 2 && copy[i][0] == target[i][0])) {
                cnt++;
                for (let j = 0; j < M; j++) {
                    copy[i][j] = 1 ^ copy[i][j];
                }
            }
        }

        for (let j = 0; j < M; j++) {
            if ((k % 2 == 0 && copy[0][j] != target[0][j]) || (k % 2 == 1 && copy[0][j] == target[0][j])) {
                cnt++;
                for (let i = 0; i < N; i++) {
                    copy[i][j] = 1 ^ copy[i][j];
                }
            }
        }

        if (JSON.stringify(copy) == JSON.stringify(target)) {
            ans = Math.min(ans, cnt);
        }
    }
    return ans == Infinity ? -1 : ans;
}
