function solution(queue1, queue2) {
    var answer = -1;
    
    // 찾아야 하는 번호 정하기
    let findnum = 0;
    for(let i = 0; i < queue1.length; i++) {
        findnum += queue1[i] + queue2[i];
    }
    findnum /= 2;
    
    // 한 줄로 찾도록 하나의 배열에 때려넣기
    let arr = [];
    for(let i = 0; i < queue1.length; i++) {
        arr.push(queue1[i]);
    }
    for(let i = 0; i < queue2.length; i++) {
        arr.push(queue2[i]);
    }
    
    // 조건을 만족했으면 여기서 몇번 해야하는지 찾기 
    // 1. 배열의 앞쪽에 뭐가 있으면 다른쪽 뒤로 다 보내기
    // 2. 배열의 뒤쪽에 뭐가 있으면 해당 부분을 다 다른쪽으로 옮겨야함. 그리고 1번 동작
    // 3. 1번 2번 둘다 해당될 경우(낑겨 있으면) 
    const checkQ = (start, end) => {
        let mid = queue1.length; 
        let result = 0;
        
        
        
    }
    
    // 하나의 배열에 때려넣기
    // i는 찾을 배열의 길이, j는 시작 인덱스
    for(let i = 0; i < arr.length - 1; i++) {
        let start = 0;
        let end = start + i;
        let checknum = 0;
        
        for(let j = start; j < end; j++) {
            checknum += arr[j % arr.length];
        }
        
        while(start < arr.length) {
            if(checknum == findnum) {
                checkQ(start, end);
            }
            checknum -= arr[start];
            start++;
            end++;
            checknum += arr[end % arr.length];
        }
    }
    return answer;
}