function solution(k, tangerine) {
    var answer = 0;
    // 배열 초기 설정
    let arr = [];
    let map = new Map();
    let num = 0;
    // 배열 안에 값 넣고 두 번째 요소가 큰애 위주로 정렬
    for(let i = 0; i < tangerine.length; i++) {
    if(map.has(tangerine[i])) {
        // 'map'에서 키의 인덱스를 가져와서 'arr'을 업데이트한다.
        let index = map.get(tangerine[i]);
        arr[index][1] += 1;
    } else {
        // 'map'과 'arr'에 새로운 키와 값을 추가한다.
        map.set(tangerine[i], num);
        num++;
        arr.push([tangerine[i], 1]);
        }
    }
    arr.sort((a, b) => {
        return b[1] - a[1];
    }) 

    // 쭉 보면서 sum이 더 커지면 반환
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(sum >= k) {
            break;
        } else {
            sum += arr[i][1];
            answer++;
        }
    }
    return answer;
}