function solution(book_time) {
    const timeToMinutes = time => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
};

// 시작 시간과 종료 시간을 모두 고려하여 정렬
book_time.sort((a, b) => {
    const startDiff = timeToMinutes(a[0]) - timeToMinutes(b[0]);
    return startDiff !== 0 ? startDiff : timeToMinutes(a[1]) - timeToMinutes(b[1]);
});
    
    var answer = 0;
    let First_totalMinutes;
    let Second_totalMinutes;
    let arr = [];
    
    for(let i = 0; i < book_time.length; i++) {
        First_totalMinutes = parseInt(book_time[i][0].split(":")[0], 10) * 60 + parseInt(book_time[i][0].split(":")[1], 10)
        Second_totalMinutes = parseInt(book_time[i][1].split(":")[0], 10) * 60 + parseInt(book_time[i][1].split(":")[1], 10)
        if(arr.length == 0) {
            answer++;
            arr.push([Second_totalMinutes + 10]);
        } else {
            let flag = false;
            for(let j = 0; j < arr.length; j++) {
                if(arr[j][arr[j].length - 1] <= First_totalMinutes) {
                    arr[j].push(Second_totalMinutes + 10);
                    flag = true;
                    break;
                }
            }
            if(!flag) {
                answer++;
                arr.push([Second_totalMinutes + 10]);
            } 
        }
    }
    return answer;
}