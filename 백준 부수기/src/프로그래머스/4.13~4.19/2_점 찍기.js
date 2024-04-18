// x기준 가능성 있는 부분 순회
// y가 가능한 최대 위치 찾기
// y에 점을 찍을 수 있는 좌표 수 Count (x,0을 포함하기 위해 Math.floor(maxY / k) + 1의 +1 처리 )
// Count한 값들 합 계산
function solution(k, d) {
    let result = 0;
    for(let x = 0; x <= d; x = x + k) {
        const maxY = Math.sqrt(Math.pow(d,2) - Math.pow(x,2));
        const yCount = Math.floor(maxY / k) + 1;
        result += yCount;
    }
    return result;
}