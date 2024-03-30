function solution(s, skip, index) {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let main = s.split("");
    let check = skip.split("");
    let result = [];
    
    for(let i = 0; i < main.length; i++) {
        let flag = 0;
        let end = 0;
        
        for(let j = (arr.indexOf(main[i]) + 1) % arr.length; flag != index; j++) {
            if(check.includes(arr[j % arr.length])) {
                continue;
            } else {
                flag++;
                end = j % arr.length;
            }
        }
        result.push(arr[end]);
    }    
    return result.join("");
}