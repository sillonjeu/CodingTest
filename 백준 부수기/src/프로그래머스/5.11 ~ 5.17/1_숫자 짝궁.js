function solution(X, Y) {
    var answer = [];
    
    let x = X.split(""); 
    let y = Y.split("");
    let x_map = new Map();
    let y_map = new Map();
    
    x.sort((a, b) => b - a);
    y.sort((a, b) => b - a);
    
    for(let i = 0; i < x.length; i++) {
        if(!x_map.has(x[i])) {
            x_map.set(x[i], 1);
        } else {
            x_map.set(x[i], x_map.get(x[i]) + 1);
        }
    }
    for(let i = 0; i < y.length; i++) {
        if(!y_map.has(y[i])) {
            y_map.set(y[i], 1);
        } else {
            y_map.set(y[i], y_map.get(y[i]) + 1);
        }
    }
    
    if(x.length > y.length) {
        for(let i = 0; i < x.length; i++) {
            if(!x_map.has(x[i]) || !y_map.has(x[i])) {
                continue;
            } else if(x_map.get(x[i]) > 0 && y_map.get(x[i]) > 0) {
                if(x[i] == 0 && answer.length == 0) {
                    answer.push(0);
                    break;
                } 
                answer.push(x[i]);
                x_map.set(x[i], x_map.get(x[i]) - 1);
                y_map.set(x[i], y_map.get(x[i]) - 1);
            }
        }
    } else {
        for(let i = 0; i < y.length; i++) {
            if(!x_map.has(y[i]) || !y_map.has(y[i])) {
                continue;
            } else if(x_map.get(y[i]) > 0 && y_map.get(y[i]) > 0) {
                if(y[i] == 0 && answer.length == 0) {
                    answer.push(0);
                    break;
                } 
                answer.push(y[i]);
                x_map.set(y[i], x_map.get(y[i]) - 1);
                y_map.set(y[i], y_map.get(y[i]) - 1);
            } 
        }
    }
    if(answer.length == 0) {
        return "-1";
    } else {
        return answer.join('');   
    }
}