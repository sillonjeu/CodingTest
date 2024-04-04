function solution(weights) {
    var answer = 0;
    let balanceMap = new Map();
    
    // 각 무게에 대해 가능한 모든 균형 상태를 계산하고 Map에 저장
    weights.forEach(weight => {
        const balances = [weight, weight * 2 / 3, weight * 2 / 4, weight * 3 / 2, weight * 3 / 4, weight * 4 / 2, weight * 4 / 3];
        balances.forEach(b => {
            if (balanceMap.has(b)) {
                balanceMap.set(b, balanceMap.get(b) + 1);
            } else {
                balanceMap.set(b, 1);
            }
        });
    });
    
    // Map을 사용하여 가능한 짝꿍 수를 계산
    weights.forEach(weight => {
        if (balanceMap.has(weight)) {
            // 같은 무게에 대한 균형은 1:1 비율로만 가능하므로, -1 처리
            answer += balanceMap.get(weight) - 1;
        }
    });
    
    // 각 짝이 두 번씩 계산되므로 최종 결과를 2로 나눔
    return answer / 2;
}
