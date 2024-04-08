function solution(t, p) {
    var answer = 0;
    let arr = t.split("");
    let check = p.split("");
    
    console.log(arr);
    
    for(let i = 0; i < arr.length - check.length; i++) {
        let flag = true;
        if(arr[i] == "0") {
            continue;
        }
        
        for(let j = 0; j < check.length; j++) {
            if(parseInt(arr[i + j] < parseInt(check[j]))) {
                flag = true;
                break;
            } else if(parseInt(arr[i + j]) > parseInt(check[j])) {
                flag = false;
                break;
            }
        }
        
        if(flag) {
            console.log(i);
            answer++;
        } 
    }
    return answer;
}