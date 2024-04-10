function solution(storey) {
    var answer = 0;
    let arr = storey.toString().split("").map(Number);
    
    for(let i = arr.length - 1; i > 0; i--) {
        // 해당 값이 10이면 1 올려주기
        if(arr[i] == 10) {
            arr[i] = 0;
            arr[i-1] += 1;
        }
        // 0 ~ 4면 그냥 내리기
        if(arr[i] >= 0 && arr[i] <= 4) {
            answer += arr[i];
            // 6 ~ 9면 반올림
        } else if(arr[i] >= 6 && arr[i] <= 9){
            answer += 10 - arr[i];
            arr[i-1] += 1;
            // 5일 경우에는 다음 수가 마지막이거나, 4 이하면 그냥 내리고
            // 아니면 그냥 올리기
        } else {
            if(i == 1 || arr[i-1] <= 4) {
                answer += 5;
            }
            else if(arr[i-1] >= 5) {
                answer += 5;
                arr[i-1] += 1;
            }
        }
    }
    // 그리고 마지막 인덱스에서 10이면 1만 더하고
    // 마지막에서도 5이하면 그냥 내리고 6 이상이면 반올림하기
    if(arr[0] == 10) {
        answer += 1;
    } else if(arr[0] <= 5){
        answer += arr[0];
    } else {
        answer += 10 - arr[0] + 1;
    }
    return answer;
}

// console.log("16", solution(16)); // 6
// console.log("2554", solution(2554)); // 16
// console.log("678", solution(678)); // 8
// console.log("999", solution(999)); // 2
// console.log("155", solution(155)); // 11
// console.log("154", solution(154)); // 10
// console.log("545", solution(545)); // 14