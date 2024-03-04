function solution(targets) {
    var answer = 0;
    
    // 첫 번째 인덱스가 작고, 길이가 짧은 순서대로 정렬
    targets.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    let arr = [];
    targets.forEach((item) => {
        // 이미 앞에 꺼에 얘가 포함되어 있을 경우 num 기준을 바꾼다.
        if(item[1] < num) {
            num = item[1]; 
        } 
        // 새로 추가된 애가 num 기준을 벗어나면, 미사일을 쏘고 arr를 초기화 한다.
        else if(item[0] >= num) {
            arr.splice(0);
            answer++;
            num = item[1];
        }
        // 체크한 애를 배열에 추가
        arr.push(item);
    })
    // 배열이 끝났는데 arr에 남아있으면 마지막으로 미사일을 한 번 더 쏜다.
    if(arr.length) {
        answer++;
    }
    return answer;
}