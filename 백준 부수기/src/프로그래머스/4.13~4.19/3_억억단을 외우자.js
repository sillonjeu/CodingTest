// // 소인수분해가 정답? 근데 이걸 어케하지
// function solution(e, starts) {
//     var answer = [];
//     let dp = [];
//     let max = 1;
//     let spot = 1;
    
//     const findnum = (num) => {
//         let now = num;
//         let arr = []; 
//         if(num == 1) {
//             dp.push(spot);
//         } else {
//             for(let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
//                 if(now < i) {
//                     break;
//                 }
//                 let count = 0;
//                 while(now % i == 0) {
//                     count++;
//                     now = Math.floor(now / i);
//                 }
//                 if(count != 0) {
//                     arr.push(count);
//                 }
//             } 
//             let result = 1;
//             if(arr.length == 0) {
//                 if(max <= 2) {
//                     max = 2;
//                     spot = num;
//                 } 
//                 dp.push(spot);
//             } else {
//                     for(let i = 0; i < arr.length; i++) {
//                         result = result * (arr[i] + 1);
//                     }
//                 if(max <= result) {
//                     max = result;
//                     spot = num;
//                 } 
//                 dp.push(spot);
//             }
//         }
//     }
    
//     for(let i = e; i >= 1; i--) {
//         findnum(i);
//     }
    
//     let fin = [];
//     for(let i = dp.length - 1; i >= 0; i--) {
//         fin.push(dp[i]);
//     }
    
//     for(let i = 0; i < starts.length; i++) {
//         answer.push(fin[starts[i] - 1]);
//     }
    
    
//     return answer;
// }

function solution(e, starts) {
	// 1) e이하의 자연수이기 때문에 e만큼 배열 생성
    const numsArr = new Array(e+1).fill(0);

    /*
      2) 약수의 개수를 한번에 count하는 반복문
    	 인덱스 번호를 자연수로 정하고, 해당 자연수에 대한 약수를 
         반복문을 통해 하나씩 증가시킨다.
    */
    for(let i = 1; i <= e; i++) {
        for(let j = i; j <= e;j += i) {
            // 3) 해당 자연수(j)의 배수를 찾아 1씩 증가 하므로 약수의 개수를 하나씩 늘려간다.
            numsArr[j] += 1;
        }
    }
    
    // 4) 범위의 Max값을 담는 배열 생성
    const maxArr = new Array(e+1).fill(e);
   
    // 5) 범위별 Max값을 구하는 반복문
    for(let i=e-1; i>0; i--) {
    
        /* 
          6) maxArr에 담긴 값은 Max값의 자연수(인덱스) 이므로 
             numsArr에서 자연수의 약수 개수를 가져온다.
        */
        if(numsArr[i] >= numsArr[maxArr[i+1]]) {
        
            // 7) 약수의 개수가 크면 해당 자연수(인덱스)를 현재 maxArr에 담는다.
            maxArr[i] = i;

        } else {
            // 8) 약수의 개수가 작으면 앞으 자연수(index)를 현재 maxArr에 담는다.
            maxArr[i] = maxArr[i+1];
        }
    }
    
    // 9) 범위별 Max값이 구해져 있으므로 가져와 return 한다. 
    return starts.map(s => maxArr[s]);
}