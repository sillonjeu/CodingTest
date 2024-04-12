// function solution(scores) {
//     // 1. 인센티브 못 받는 애들 처내기
//     let me = scores[0][0] + scores[0][1]; 
//         // 오름차순 정렬. 합이 같거나 더 많은 애들은 무조건 뭐가 하나 부족할 수 밖에 없음
//     let bestscore = 0;
//     let arr = [];
//     scores.sort((a, b) => {
//         return b[0] + b[1] - (a[0] + a[1]); // 합이 큰 순서대로 정렬
//     });
    
//     for(let i = 0; i < scores.length; i++) {
//         // 처음에 들어오는 애 기준으로 bestscore 설정
//         if(scores[i][0] + scores[i][1] > bestscore) {
//             bestscore = scores[i][0] + scores[i][1];
//             arr.push([scores[i][0], scores[i][1]]);
//             // 만약 bestscore 보다 2 이상 낮으면 체크하기
//         } else if(scores[i][0] + scores[i][1] < bestscore - 1) {
//             let flag = true;
//             for(let j = 0; j < arr.length; j++) {
//                 // 그리고 bestscore에 해당하는 애들보다 작으면 그 부분은 안넣기
//                 if(arr[j][0] > scores[i][0] && arr[j][1] > scores[i][1]) {
//                     flag = false;
//                     break; 
//                 }
//             }
//             // 만약 아니면 얘도 체크하는 부분으로 넣어야 함
//             if(flag) {
//                 arr.push([scores[i][0], scores[i][1]]);
//             }
//             // bestscore랑 같거나 하나만 차이나면 arr에 집어넣기
//         } else if(scores[i][0] + scores[i][1] >= bestscore - 1) {
//             arr.push([scores[i][0], scores[i][1]]);
//         }
//     }
    
//     // 2. 인센티브 받는 애들 각각 점수 메기기
//     let result = []; 
//     for(let i = 0; i < arr.length; i++) {
//         result.push(arr[i][0] + arr[i][1]);
//     }
    
//     // 3. 메겨진 점수로 최종 등수 메기기
//     if(result.includes(me)) {
//         return result.indexOf(me) + 1;
//     } else {
//         return -1;
//     }
// }

function solution(scores) {
    let answer = 1;
    const target = scores[0];
  
    scores.sort((a, b) => {
      if (a[0] !== b[0]) return b[0] - a[0];
      return a[1] - b[1];
    });
  
    let before = 0;
    for (const s of scores) {
      if (target[0] < s[0] && target[1] < s[1]) return -1;
  
      if (before <= s[1]) {
        if (target[0] + target[1] < s[0] + s[1]) answer++;
        before = s[1];
      }
    }
    return answer;
  }