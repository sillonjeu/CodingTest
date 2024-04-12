function solution(n, l, r) {
    var answer = 0;
    
    const checkone = start => {
        if(start % 5 == 2) { 
            return 0;
        } else if(start > 5) {
            checkone(Math.floor(start / 5));
        } else {
            answer++;
        }
    }
    for(let i = l-1; i < r; i++) {
        checkone(i);
    }
    return answer;
}

// 1

// 11011 -> 3

// 11011 11011 00000 11011 11011 -> 3, 8, 11,12,13,14,15, 18, 23

// 11011 11011 00000 11011 11011
// 11011 11011 00000 11011 11011
// 00000 00000 00000 00000 00000
// 11011 11011 00000 11011 11011
// 11011 11011 00000 11011 11011
