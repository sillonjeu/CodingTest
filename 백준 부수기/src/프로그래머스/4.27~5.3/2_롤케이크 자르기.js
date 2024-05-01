function solution(topping) {
    var answer = 0;
    let L_dp = []; 
    let R_dp = []; 
    let L_map = new Map();
    let R_map = new Map();
    
    let num = 0;
    for(let i = 0; i < topping.length; i++) {
        if(L_map.has(topping[i])) {
            L_dp.push(num);
        } else {
            L_map.set(topping[i], 1);
            num++;
            L_dp.push(num);
        }
    }
    
    num = 0;
    for(let i = topping.length - 1; i >= 0; i--) {
        if(R_map.has(topping[i])) {
            R_dp.push(num);
        } else {
            R_map.set(topping[i], 1);
            num++;
            R_dp.push(num);
        }
    }
    
    for(let i = 0; i < topping.length - 1; i++) {
        if(L_dp[i] == R_dp[topping.length - 2 - i]) {
            answer++;
        } 
    }
    
    return answer;
}