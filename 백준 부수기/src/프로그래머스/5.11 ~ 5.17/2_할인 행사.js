function solution(want, number, discount) {
    var answer = 0;
    let map = new Map();
    
    // 다 더해서 10이니까 0부터 9까지 일단 넣고 생각
    let start = 0;
    let end = 9;
    for(let i = 0; i < 10; i++) {
        if(map.has(discount[i])) {
            map.set(discount[i], map.get(discount[i]) + 1);
        } else {
            map.set(discount[i], 1);
        }
    }
    
    // 길이가 다할 때 까지 반복
    while(end < discount.length) {
        let flag = true;
        // 처음이면 마지막 부분 더해주기
        if(!start == 0) {
            if(map.get(discount[end])) {
                map.set(discount[end], map.get(discount[end]) + 1);
            } else {
                map.set(discount[end], 1);
            }
        }
        // map에서 찾아서 없거나 기준치 이하면 틀림
        for(let i = 0; i < want.length; i++) {
            if(!map.has(want[i]) || map.get(want[i]) < number[i]) {
                flag = false;
                break;
            }
        }
        // 정답이면 답 더해주기
        if(flag) {
            answer++;
        }
        // 마지막으로 순차 돌기 전에 시작 부분 더해주기
        map.set(discount[start], map.get(discount[start]) - 1); 
        start++;
        end++;
    }
    
    return answer;
}