function solution(n, roads, sources, destination) {
    var answer = [];
    let arr = [];

    for (let i = 0; i < roads.length; i++) {
        if (!arr[roads[i][0]]) arr[roads[i][0]] = new Set();
        if (!arr[roads[i][1]]) arr[roads[i][1]] = new Set();
    }

    // roads 배열을 사용하여 양방향 도로 연결 추가
    for (let i = 0; i < roads.length; i++) {
        arr[roads[i][0]].add(roads[i][1]);
        arr[roads[i][1]].add(roads[i][0]);
    }
    
    console.log(arr);
    
    return answer;
}