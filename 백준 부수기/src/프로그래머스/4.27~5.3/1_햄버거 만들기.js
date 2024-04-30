function solution(ingredient) {
    var answer = 0;
    let stack = [];
    
    for(let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]); 
        
        if(stack.length < 4 || stack[stack.length - 1] != 1) {
            continue;
        } else if(stack[stack.length - 1] == 1){
            let num = stack.length - 1;
            if(stack[num - 1] == 3 && stack[num - 2] == 2 && stack[num - 3] == 1) {
                answer++;
                stack.splice(num - 3, 4);
            }
        }
    }
    
    return answer;
}