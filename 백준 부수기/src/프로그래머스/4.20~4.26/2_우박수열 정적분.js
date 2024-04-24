function solution(k, ranges) {
    var answer = [];
    
    let size = [];
    let spot = [];
    spot.push(k);
    
    let result = k;
    while(result != 1) {
        // 짝수면
        if(result % 2 == 0) {
            result /= 2;
        } else {
            result = result * 3 + 1;
        }
        spot.push(result);
        size.push(Math.abs((spot[spot.length - 1] - spot[spot.length - 2]) / 2) + Math.min(spot[spot.length - 1], spot[spot.length - 2]));
    }
    
    
    for(let i = 0; i < ranges.length; i++) {
        let start = ranges[i][0];
        let end = spot.length - 1 + ranges[i][1];
        
        if(start > end) {
            answer.push(-1);
        } else if(start == end) {
            answer.push(0); 
        } else {
            let cal = 0;
            for(let j = start; j < end; j++) {
                cal += size[j];
            }
            answer.push(cal);
        }
    }
    
    return answer;
}