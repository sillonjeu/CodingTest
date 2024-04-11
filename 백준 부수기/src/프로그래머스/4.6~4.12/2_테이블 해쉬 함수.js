function solution(data, col, row_begin, row_end) {
    let answer = 0;
    let S_i = [];
    
    // col번째 컬럼을 기준으로 오름차순, 같으면 1번째 컬럼을 기준으로 내림차순
    data.sort((a, b) => {
        const startDiff = a[col - 1] - b[col - 1];
        return startDiff !== 0 ? startDiff : b[0] - a[0];
    });
    
    // 정렬된 데이터에서 나머지들의 합 계산
    for (let i = row_begin - 1; i < row_end; i++) {
        let tempSum = 0; 
        for (let j = 0; j < data[i].length; j++) {
            tempSum += data[i][j] % (i + 1);
        }
        S_i.push(tempSum);
    }
    
    // 비트 계산하기 위해 비트용 배열 생성
    let bit = Array.from({ length: S_i.length }, () => Array(20).fill(0));
    for (let i = 0; i < S_i.length; i++) {
        let num = 0;
        let check = S_i[i];
        // 2의 제곱승의 끝까지 일단 구하기
        while (2 ** (num + 1) <= S_i[i]) {
            num++;
        }
        // 2의 제곱승 끝에서부터 계산
        for (let j = num; j >= 0; j--) {
            if (check >= (2 ** j)) {
                bit[i][j] = 1;
                check -= (2 ** j);
            }
        }
    }
    // 차례대로 XOR 계산 
    let result = bit[0];
    if (bit.length > 1) {
        for (let i = 1; i < bit.length; i++) {
            for (let j = 0; j < bit[i].length; j++) {
                result[j] ^= bit[i][j];
            }
        }
    }
    // 마지막 계산
    for (let i = 0; i < result.length; i++) {
        if (result[i] == 1) {
            answer += 2 ** i;
        }
    }
    return answer;
}
