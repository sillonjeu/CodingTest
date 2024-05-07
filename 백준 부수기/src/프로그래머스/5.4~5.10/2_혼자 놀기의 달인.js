// function solution(cards) {
//     var answer = 0;
//     let ischecked = Array.from({length : cards.length}, () => false);
//     let arr = [];
//     let arrnum = 0;
    
//     const findnum = (index, start) => {
//         const cardValue = cards[index]; // 카드의 값 사용
//         const nextIndex = cardValue - 1; // 다음 인덱스 계산
//         if(!ischecked[nextIndex]) {
//             ischecked[nextIndex] = true; // 방문 표시
//             if (!Array.isArray(arr[start])) {
//                 arr[start] = []; // start 위치에 배열이 없으면 새로 만들기
//             }
//             arr[start].push(cardValue);
//             findnum(nextIndex, start);
//         } else {
//             arrnum++;
//         }
//     }
    
//     for(let i = 0; i < cards.length; i++) {
//         if(!ischecked[i]) {
//             ischecked[i] = true;
//             arr.push([cards[i]]);
//             findnum(i, arrnum);
//         }
//     }
    
//     console.log(arr);
    
//     return answer;
// }

function solution(cards) {
    const n = cards.length;
    const visited = new Array(n).fill(false);
    const cycleSizes = [];

    function findCycle(start) {
        let current = start;
        const seen = new Set();
        while (!seen.has(current)) {
            if (visited[current]) {
                return 0; // 이미 방문한 노드를 만나면 순환을 계산하지 않음
            }
            seen.add(current);
            visited[current] = true;
            current = cards[current] - 1; // 다음 카드로 이동
        }
        return seen.size; // 이 순환의 크기 반환
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const cycleSize = findCycle(i);
            if (cycleSize > 0) {
                cycleSizes.push(cycleSize);
            }
        }
    }

    // 크기가 가장 큰 두 그룹을 찾아서 점수 계산
    if (cycleSizes.length < 2) {
        return 0; // 두 개의 그룹이 존재하지 않으면 점수는 0
    }
    cycleSizes.sort((a, b) => b - a); // 내림차순 정렬
    return cycleSizes[0] * cycleSizes[1]; // 가장 큰 두 개의 그룹 크기를 곱함
}
