function solution(friends, gifts) {
    
    // 2차원 객체 초기화
    let friendGifts = {};
    for (let i = 0; i < friends.length; i++) {
        friendGifts[friends[i]] = {};
        for (let j = 0; j < friends.length; j++) {
            if (i != j) {
                friendGifts[friends[i]][friends[j]] = 0;
            }
        }
    }

    // gifts 배열을 순회하며 선물 횟수 업데이트
    gifts.forEach((item) => {
        const [giver, receiver] = item.split(" ");
        friendGifts[giver][receiver] += 1; 
    });
    
    // 선물 점수 계산해서 입력하기
    let Giftnumber = {};
    for(let i = 0; i < friends.length; i++) {
        Giftnumber[friends[i]] = 0;
    }
    for(let giver in friendGifts) {
        for(let receiver in friendGifts[giver]) {
            Giftnumber[giver] += friendGifts[giver][receiver];
            Giftnumber[receiver] -= friendGifts[giver][receiver];
        }
    }
    
    var answer = 0;
    for (let giver in friendGifts) {
        let check = 0;
        for (let receiver in friendGifts[giver]) {
            if(friendGifts[giver][receiver] > friendGifts[receiver][giver] || (friendGifts[giver][receiver] == friendGifts[receiver][giver]) && (Giftnumber[giver] > Giftnumber[receiver])) {
                check += 1;
            }
        }
        if (check > answer) {
            answer = check;
        }
    }
    return answer;
}
