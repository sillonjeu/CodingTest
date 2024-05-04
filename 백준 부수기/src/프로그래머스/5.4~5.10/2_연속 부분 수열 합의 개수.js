function solution(elements) {
    var answer = 0;
    let set = new Set();
    
    // i가 연속 부분 수열 길이 정하기
    for(let i = 1; i <= elements.length; i++) {
        // j 부터 시작
        for(let j = 0; j < elements.length; j++) {
            let result = 0;
            for(let z = 0; z < i; z++) {
                result += elements[(j + z) % elements.length];
            }
            if(!set.has(result)) {
                set.add(result);
            }
        }
    }
    return set.size;
}