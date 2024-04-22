function solution(k, m, score) {
    var answer = 0;
    // 내림차순 정렬하고
    score.sort((a, b) => {
        return b - a;
    })
    // 애초에 정렬하면 젤 뒤에꺼 기준이니까 그거 m번 곱하면 끝
    for(let i = m - 1; i < score.length; i += m) {
       answer += (score[i] * m); 
    }
    return answer;
}