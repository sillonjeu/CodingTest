// 빈병 바꿔주는 수 a, 주는 콜라 병 수 b, 가지고 있는 빈병의 개수 n
function solution(a, b, n) {
    var answer = 0;
    
    while(n >= a) {
        answer += Math.floor(n / a) * b;
        n = (Math.floor(n / a) * b) + (n % a);
    }
    return answer;
}