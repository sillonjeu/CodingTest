function solution(beginning, target) {
    var answer = 0;
    
    // 행부터 보기
    for(let i = 0; i < beginning.length; i++) {
        if(beginning[i][0] != target[i][0]) {
            answer++;
            for(let j = 0; j < beginning.length; j++) {
                beginning[i][j] = (beginning[i][j] == 0 ? 1 : 0);
            }
        }
    }
    
    for(let i = 0; i < beginning.length; i++) {
        if(beginning[0][i] != target[0][i]) {
            answer++;
            for(let j = 0; j < beginning.length; j++) {
                beginning[j][i] = (beginning[j][i] == 0 ? 1 : 0);
            }
        }
    }
    
    for(let i = 0; i < beginning.length; i++) {
        for(let j = 0; j < beginning.length; j++) {
            if(beginning[i][j] != target[i][j]) {
                answer = -1;
                break;
            }
        }
    }
    
    return answer;
}