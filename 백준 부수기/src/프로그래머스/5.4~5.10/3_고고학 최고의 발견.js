// function solution(clockHands) {
//     var answer = 0;
//     let x_num = clockHands.length; 
//     let y_num = clockHands[0].length;
    
//     // 상 하 좌 우 본인
//     // 상이랑 좌는 건드리면 안되고, 하랑 우는 건드려도 됨
//     let dx = [1, -1, 0, 0, 0];
//     let dy = [0, 0, -1, 1, 0];
    
//     const check = (x, y) => {
//         let flag = true;
//         for(let i = 0; i < dx.length; i++) {
//             let zx = x + dx[i];
//             let zy = y + dy[i];
            
//             // 상 일떄는 0이면 건드리면 안됨
//             // 하는 마지막 줄일때 최대 3번 건드릴 수 있음 -> 마지막 줄 전일때 0 아닌지 확인
//             // 좌는 최대 2번, 마지막 행이면 1번 건드릴 수 있음. 2나 3이면 건드려도 됨
//             // 우는 최대 마지막 열이면 최대 3번, 행까지 마지막이면 2번 건드릴 수 있음 -> 마지막 열이기만 하면 0 아닌지, 마지막 행까지면 0,1 아닌지 확인
//             // 본인은 최대 3번 건드릴 수 있음. 2나 3이면 건드려도 됨
//             if(zx >= 0 && zx < x_num && zy >= 0 && zy < y_num) {
//                 if(i == 0 && clockHands[zx][zy] == 0) {
//                     flag = false;
//                     break;
//                 }
//                 if(i == 1 && x == x_num - 2 && clockHands[zx][zy] == 0) {
//                     flag = false;
//                     break;
//                 }
//                 if(i == 2 && (clockHands[zx][zy] == 1) || (clockHands[zx][zy] == 0)) {
//                     flag = false;
//                     break;
//                 }
//                 if(i == 3 && zy == y_num - 1 && (clockHands[zx][zy] == 0)) {
//                     flag = false;
//                     break;
//                 } else if(i == 3 && zy == y_num - 1 && zx == x_num - 1 && zy == y_num && (clockHands[zx][zy] == 0 || clockHands[zx][zy] == 1)) {
//                     flag = false;
//                     break;
//                 }
//                 if(i == 4 && (clockHands[zx][zy] == 1) || (clockHands[zx][zy] == 0)) {
//                     flag = false;
//                     break;
//                 }
//             }            
//         }
        
//         // 돌려도 되면 돌리기
//         if(flag) {
//             for(let i = 0; i < dx.length; i++) {
//                 let zx = x + dx[i];
//                 let zy = y + dy[i];
//                 if(zx >= 0 && zx < x_num && zy >= 0 && zy < y_num) {
//                     clockHands[zx][zy] = (clockHands[zx][zy] + 1) % 4;
//                 }
//             }
//             return true;
//         }
//         return false;
//     }
    
//     for(let i = 0; i < clockHands.length; i++) {
//         for(let j = 0; j < clockHands[i].length; j++) {
//             if(check(i, j)) {
//                 //console.log(i, j);
//                 answer++;
//                 //console.log(clockHands);
//             }
//         }
//     }

//     return answer;
// }


// 첫번째 행 (row === 0)만 완전탐색으로 0~3번 돌리기
// 두번째 행부터는 board[row-1][col] 위치가 0(위쪽 화살표) 인지 확인 2-1. 만약 0이라면 넘어감 - 돌린다면 해당 위치를 완성할 수 없음 2-2. 만약 0이 아니라면 0으로 맞추기 위해 board[row][col] 칸을 회전
function solution(clockHands) {
    let answer = Infinity;

    const N = clockHands.length;
    const dir = [
        [0, 0],
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    function handleClock(r, c, count, dir = 1) {
        if (r < 0 || c < 0 || r >= N || c >= N) return;
        clockHands[r][c] = (4 + clockHands[r][c] + dir * count) % 4;
    }
    
    function check() {
        let result = true;

        for (let i=0; i<N; i++) {
            for (let j=0; j<N & result; j++) {
                result = clockHands[i][j] === 0;
            }
        }

        return result;
    }
    function go(r, c, count) {
        const nr = (c+1 === N) ? r+1 : r,
              nc = (c+1) % N;

        if (answer <= count) {
            return;
        }
        if (r === N) {
            if (check()) {
                answer = count;
            }
            return;
        }

        const changed = dir.map(([dx, dy]) => [r+dx, c+dy]);

        if (r === 0) {
            for (let move = 0; move<4; move++) {
                changed.forEach(([nx, ny]) => {
                    handleClock(nx, ny, move);
                })
                go(nr, nc, count+move);
                changed.forEach(([nx, ny]) => {
                    handleClock(nx, ny, move, -1);
                })
            }
            return;
        }
        if (clockHands[r-1][c] === 0) {
            go(nr, nc, count);
            return;
        }
        const move = 4 - clockHands[r-1][c];
        changed.forEach(([nx, ny]) => {
            handleClock(nx, ny, move);
        })
        go(nr, nc, count+move);
        changed.forEach(([nx, ny]) => {
            handleClock(nx, ny, move, -1);
        });
    }

    go(0, 0, 0);

    return answer;
}
