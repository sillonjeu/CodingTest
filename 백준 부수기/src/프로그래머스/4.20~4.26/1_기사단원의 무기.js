function solution(number, limit, power) {
    var answer = 0;
    
    for(let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {  
                if (j * j === i) {
                    count++;  
                } else {
                    count += 2; 
                }
            }
        }
        if(count > limit) {
            answer += power;
        } else {
            answer += count;
        }
    }
    return answer;
}

// function solution(number, limit, power) {
//     var answer = 0;
    
//     for(let i = 1; i <= number; i++) {
//         let result = [];
//             for (let j = 1; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 result.push(i); 
//                 if (j !== i / j) {
//                     result.push(i / j); 
//                 }
//             }
//         }
//         if(result.length > limit) {
//             answer += power;
//         } else {
//             answer += result.length;
//         }
//     }
//     return answer;
// }