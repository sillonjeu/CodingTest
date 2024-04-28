// 1. babbling[i]일 때 pronunciation 전부 비교
// 2. babbling[i]가 연속된 문자일 경우 해당 글자 제외
// 3. babbling[i]와 pronunciation 전부 비교하여 발음할 수 있는 글자가 있을 때 babbling[i]를 다른문자로 치환한다.
// 4. 해당 문자가 있는 것만 정규식 사용 후 개수 filter

function solution(babbling) {
    let answer = 0;
    let pronunciation = ["aya", "ye", "woo", "ma"]

    // 1)
    for(let i = 0; i < babbling.length; i++) {
        for(let j = 0; j< pronunciation.length; j++) {
            // 2)
            if(babbling[i].includes(pronunciation[j].repeat(2))) {
                break;
            }
            // 3)
            babbling[i] = babbling[i].split(pronunciation[j]).join('!');
        }
    }

    // 4)
    answer = babbling.filter(e => {
        // ^ 문자열의 시작
        // $ 문자열의 끝
        // !가 최소 한 번이상 연속으로 나오는지 확인
        return /(^!+$)/.test(e)
    }).length;

    return answer;
}