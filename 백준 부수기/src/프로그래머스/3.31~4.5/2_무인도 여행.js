function solution(maps) {
    var answer = [];
    let arr = [];
    
    for (let i = 0; i < maps.length; i++) {
        arr.push(maps[i].split(""));
    }
    let check = Array.from({ length: arr.length }, () => [...Array(arr[0].length).fill(false)]);
    
    // 상, 하, 좌, 우
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    
    const checkaround = (x, y, num) => {
        for(let i = 0; i < dx.length; i++) {   
            let zx = x + dx[i]; 
            let zy = y + dy[i];
            
            if(zx >= 0 && zx < arr.length && zy >= 0 && zy < arr[0].length && arr[zx][zy] !== "X" && check[zx][zy] !== true) {
                check[zx][zy] = true;
                answer[num] += parseInt(arr[zx][zy]);
                checkaround(zx, zy, num);
            }
        }
    }
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] !== "X" && check[i][j] !== true) {
                check[i][j] = true;
                answer.push(parseInt(arr[i][j]));
                checkaround(i, j, answer.length - 1);
            }
        }
    }
    answer.sort((a, b) => a - b);
    if(answer.length == 0) {
        return [-1];
    }
    return answer;
}