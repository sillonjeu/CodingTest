// 배열 to string 할때.. arr.join("") 쓰면 됨
function solution(food) {
    let result = [];
    let reverse = [];
    
    for(let i = 1; i < food.length; i++) {
        if(food[i] >= 2) {
            for(let j = 0; j < Math.floor(food[i] / 2); j++) {
                result.push(i);
            }
        }
    }
    for(let i = result.length - 1; i >= 0; i--) {
        reverse.push(result[i]);
    }
    return result.join("") + 0 + reverse.join("");
}