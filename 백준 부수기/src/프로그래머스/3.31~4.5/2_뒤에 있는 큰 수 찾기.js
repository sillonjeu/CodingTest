function solution(numbers) {
    var answer = [];
    let result = []; 
    let stack = [];
    
    for(let i = numbers.length - 1; i >= 0; i--) {
        // 스택이 비어있으면 채워주기
        if(stack.length == 0) {
            stack.push(numbers[i]);
            answer.push(-1);
            // 만약 들어온 애가 스택에 있는거보다 크거나 같으면 지워가면서 큰거 찾을때 까지 지워야됨
        } else if(numbers[i] >= stack[stack.length - 1]) {
            let flag = false;
            for(let j = stack.length - 1; j >= 0; j--) {
                if(numbers[i] >= stack[j]) {
                    stack.splice(j, 1);
                } else if(numbers[i] < stack[j]) {
                    answer.push(stack[j]);
                    stack.push(numbers[i]);
                    flag = true;
                    break;
                }
            }
            // 다 지웠는데도 없으면 -1 넣어줘야함
            if(!flag) {
                answer.push(-1);
                stack.push(numbers[i]);
            }
            // 만약 들어온 애가 stack에 있는거보다 작으면 바로 넣기
        } else if(numbers[i] < stack[stack.length - 1]) {
            answer.push(stack[stack.length - 1]);
            stack.push(numbers[i]);
        }
    }
    // 마지막에 stack 자체가 반대로 쌓이니까 반대로 해주기
    for(let i = answer.length - 1; i >= 0; i--){
        result.push(answer[i]);
    }
    return result;
}