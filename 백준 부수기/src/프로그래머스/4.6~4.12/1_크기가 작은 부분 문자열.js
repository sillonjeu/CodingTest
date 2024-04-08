function solution(t, p) {
    var answer = 0;
    let arr = t.split("");
    let check = p.split("");
    
    for(let i = 0; i <= arr.length - check.length; i++) {
        let flag = true;
        for(let j = 0; j < check.length; j++) {
            if(parseInt(arr[i + j]) < parseInt(check[j])) {
                flag = true;
                break;
            } else if(parseInt(arr[i + j]) > parseInt(check[j])) {
                flag = false;
                break;
            }
        }
        if(flag) {
            answer++;
        } 
    }
    return answer;
}