function solution(X, Y) {
    var answer = [];
    
    let x = X.split("").map(Number); 
    let y = Y.split("").map(Number);
    
    x.sort((a, b) => b - a);
    y.sort((a, b) => b - a);
    
    let num = 0;
    if(x.length > y.length) {
        for(let i = 0; i < x.length; i++) {
            if(x[i] == y[num]) {
                answer.push(x[i]);
                num++;
            }
        }
    } else {
        for(let i = 0; i < y.length; i++) {
            if(y[i] == x[num]) {
                answer.push(y[i]);
                num++;
            }
        }
    }
    
    return answer;
}