function solution(arrayA, arrayB) {
    var answer = 0;
    let num = 0;
    
    // 먼저 정렬하고,
    arrayA.sort((a, b) => {
        return a - b;
    })
    arrayB.sort((a, b) => {
        return a - b;
    })
   
    
    // A 배열부터 찾아보기
    let arr = [];
    for(let i = 1; i <= Math.sqrt(arrayA[0]); i++) {
        if(arrayA[0] % i == 0) {
            arr.push(i);
            if(i != arrayA[0] / i) {
                arr.push(arrayA[0] / i);
            }
        } 
    }
    let Aarr = [];
    for(let i = 1; i < arr.length; i++) {
        let flag = true;
        for(let j = 1; j < arrayA.length; j++) {
            if(arrayA[j] % arr[i] != 0) {
                flag = false;
                break;
            }
        }
        if(flag) {
            Aarr.push(arr[i]);
        }
    }
    for(let i = 0; i < Aarr.length; i++) {
        let flag = true;
        for(let j = 0; j < arrayB.length; j++) {
            if(arrayB[j] % Aarr[i] == 0) {
                flag = false;
                break;
            }
        }
        if(flag && Aarr[i] > answer) {
            answer = Aarr[i];
        }
    }
    
    // B 배열
    arr = [];
    for(let i = 1; i <= Math.sqrt(arrayB[0]); i++) {
        if(arrayB[0] % i == 0) {
            arr.push(i);
            if(i != arrayB[0] / i) {
                arr.push(arrayB[0] / i);
            }
        } 
    }
    let Barr = [];
    for(let i = 1; i < arr.length; i++) {
        let flag = true;
        for(let j = 1; j < arrayB.length; j++) {
            if(arrayB[j] % arr[i] != 0) {
                flag = false;
                break;
            }
        }
        if(flag) {
            Barr.push(arr[i]);
        }
    }
    for(let i = 0; i < Barr.length; i++) {
        let flag = true;
        for(let j = 0; j < arrayA.length; j++) {
            if(arrayA[j] % Barr[i] == 0) {
                flag = false;
                break;
            }
        }
        if(flag && Barr[i] > answer) {
            answer = Barr[i];
        }
    }
    return answer;
}

// function solution(arrayA, arrayB) {
//     const aResult = getAnswer(arrayA, arrayB)
//     const bResult = getAnswer(arrayB, arrayA)

//     return aResult > bResult ? aResult : bResult
// }

// function getAnswer (A, B) {
//     A.sort((a, b) => a - b)
//     for (let i = A[0]; i > 1; i--) {
//         if (A.every(a => a % i === 0) && !B.some(b => b % i === 0)) return i
//     }
//     return 0
// }