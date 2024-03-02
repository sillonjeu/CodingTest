function solution(name, yearning, photo) {
    var answer = [];
    let score = [];
    for(let i = 0; i < name.length; i++) {
        score[name[i]] = yearning[i];
    }
    for(let i = 0; i < photo.length; i++) {
        let result = 0;
        for(let j = 0; j < photo[i].length; j++) {
            if(name.includes(photo[i][j])) {
                result += score[photo[i][j]];  
            }
        }
        answer.push(result);
    }
    return answer;
}