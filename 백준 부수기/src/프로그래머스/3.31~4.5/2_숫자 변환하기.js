function solution(x, y, n) {
    let dp = Array.from({ length: y + 1 }, () => 1000001);
    dp[y] = 0;
    let find = [];
    
    const findx = start => {
        // n으로 빼기
        if(start - n >= x) {
            if(dp[start] + 1 < dp[start - n]) {
                dp[start - n] = dp[start] + 1;
                find.push(start - n);
            } 
        // 2로 나누기
        } if(start % 2 == 0 && start / 2 >= x) {
            if(dp[start] + 1 < dp[parseInt(start / 2)]) {
                dp[parseInt(start / 2)] = dp[start] + 1;
                find.push(parseInt(start / 2));
            } 
        // 3으로 나누기
        } if(start % 3 == 0 && start / 3 >= x) {
            if(dp[start] + 1 < dp[parseInt(start / 3)]) {
                dp[parseInt(start / 3)] = dp[start] + 1;
                find.push(parseInt(start / 3));
            }
        }
    }
    find.push(y);
    while(find.length != 0) {
        let go = find[0];
        find.shift();
        findx(go);
    }
    return dp[x] == 1000001 ? -1 : dp[x];
}