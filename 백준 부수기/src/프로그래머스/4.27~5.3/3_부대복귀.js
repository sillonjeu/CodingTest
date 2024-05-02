// function solution(n, roads, sources, destination) {
//     var answer = [];
//     let adjList = [];

//     for(let i = 1; i <= n; i++) {
//         adjList[i] = new Set();
//     }
//     for(let i = 0; i < roads.length; i++) {
//         adjList[roads[i][0]].add(roads[i][1]); 
//         adjList[roads[i][1]].add(roads[i][0]);
//     }
    
//     function bfs(start, target, adjList) {
//         let queue = [start]; // BFS를 위한 큐, 시작 정점 포함
//         let visited = new Array(adjList.length).fill(false); // 방문한 정점 추적
//         let distance = new Array(adjList.length).fill(-1); // 거리 저장

//         visited[start] = true;
//         distance[start] = 0;

//         while (queue.length > 0) {
//             let current = queue.shift();
//             for (let neighbor of adjList[current]) {
//                 if (!visited[neighbor]) {
//                     visited[neighbor] = true;
//                     distance[neighbor] = distance[current] + 1;
//                     queue.push(neighbor);
//                     if (neighbor === target) return distance[target]; // 목표에 도달하면 거리 반환
//                 }
//             }
//         }
//         return distance[target]; // 타겟까지의 거리 반환, 도달할 수 없으면 -1
//     }
    
//     for(let i = 0; i < sources.length; i++) {
//         answer.push(bfs(sources[i], destination, adjList));
//     }
    
//     return answer;
// }

function solution(n, roads, sources, destination) {
    var answer = [];
    let adjList = [];

    // 인접 리스트 초기화
    for(let i = 1; i <= n; i++) {
        adjList[i] = new Set();
    }
    // 양방향 도로 정보 추가
    for(let i = 0; i < roads.length; i++) {
        adjList[roads[i][0]].add(roads[i][1]); 
        adjList[roads[i][1]].add(roads[i][0]);
    }

    function bfs(target, adjList) {
        let queue = [target]; // BFS를 위한 큐, 시작 정점 포함
        let visited = new Array(adjList.length).fill(false); // 방문한 정점 추적
        let distance = new Array(adjList.length).fill(-1); // 거리 저장

        visited[target] = true;
        distance[target] = 0;

        while (queue.length > 0) {
            let current = queue.shift();
            for (let neighbor of adjList[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    distance[neighbor] = distance[current] + 1;
                    queue.push(neighbor);
                }
            }
        }
        return distance; // 모든 노드에 대한 거리 반환
    }

    let distances = bfs(destination, adjList);
    for(let source of sources) {
        answer.push(distances[source]);
    }
    
    return answer;
}
