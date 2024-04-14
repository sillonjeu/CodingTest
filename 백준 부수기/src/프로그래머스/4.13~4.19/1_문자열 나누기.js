function solution(s) {
    var answer = 0;
    let arr = s.split("");
    
    // 문자열이 잘렸거나 처음이면 false
    let flag = false;
    // 첫 번째 글자
    let first = 'A';
    // 첫 번째 글자가 나오는 수랑 나머지 글자가 나오는 수
    let count = 0;
    let another = 0;
    
    for(let i = 0; i < arr.length; i++) {
        // 첫 번째면 넣기
        if(!flag) {
            flag = true;
            first = arr[i];
            count++;
            // 첫 번째가 나오면 해당 수 +1
        } else if (first == arr[i]) {
            count++;
            // 나머지 수가 나오면 나머지 수 +1
        } else if (first != arr[i]) {
            another++;
            // 그리고 같아지면 answer +1
            if(another == count) {
                answer++;
                flag = false;
                count = 0;
                another = 0;
            } 
        } 
    }
    // 끝났는데 둘다 0으로 초기화 안되어있으면 answer +1
    if(another != 0 || count != 0) {
        answer++;
    }
    return answer;
}