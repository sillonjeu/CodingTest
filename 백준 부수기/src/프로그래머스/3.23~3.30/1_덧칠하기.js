function solution(n, m, section) {
    var answer = 0;
    let flag = 0; 
    let start = false;
    for(let i = 0; i <= n; !start ? i++ : (i += m)) {
        start = false;
        if(section.includes(i)) {
            answer++;
            start = true;     
        } 
    }
    return answer;
}