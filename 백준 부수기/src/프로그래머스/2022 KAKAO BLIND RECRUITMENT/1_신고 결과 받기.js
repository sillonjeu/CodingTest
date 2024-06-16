function solution(id_list, report, k) {
    var answer = [];
    let arr = {};
    let set = new Set(); 
    let map = new Map();
    let result = new Map();
    
    for(let i = 0; i < id_list.length; i++) {
        result.set(id_list[i], 0);
    }
    
    for(let i = 0; i < report.length; i++) {
        if(set.has(report[i])) {
            continue;
        } 
        set.add(report[i]);
        let [A, B] = report[i].split(" ");
        if (!arr[B]) {
            arr[B] = []; 
        }
        arr[B].push(A); 
        if(map.has(B)) {
            map.set(B, map.get(B) + 1);
        } else {
            map.set(B, 1);
        }
    }
    
    for (let [key, value] of map) {
        if (value >= k) {
            for(let i = 0; i < arr[key].length; i++) {
                result.set(arr[key][i], result.get(arr[key][i]) + 1);
            }
        }
    }
    
    for (let [key, value] of result) {
        answer.push(value);
    }
    
    return answer;
}