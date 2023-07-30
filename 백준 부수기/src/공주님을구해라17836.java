import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class 공주님을구해라17836 {
    static int[][] distance;
    static boolean[][] visited;
    static Queue<Integer> queueX;
    static Queue<Integer> queueY;

  // 다이렉트로 공주 찾기
  static int findPrincess() {
    int result;
    distance = new int[N+1][M+1];
    visited = new boolean[N+1][M+1];
    queueX = new LinkedList<>();
    queueY = new LinkedList<>();

    queueX.offer(1);
    queueY.offer(1);
    visited[1][1] = true;
    distance[1][1] = 0;

    while(!queueX.isEmpty() && !queueY.isEmpty()) {
      int currentX = queueX.poll();
      int currentY = queueY.poll();

      // 상
      if(currentY - 1 > 0 && arr[currentX][currentY - 1] != 1 && !visited[currentX][currentY - 1]) {
        visited[currentX][currentY - 1] = true;
        distance[currentX][currentY - 1] = distance[currentX][currentY] + 1;
        queueX.offer(currentX); queueY.offer(currentY - 1);
      }
      // 하
      if(currentY < M && arr[currentX][currentY + 1] != 1 && !visited[currentX][currentY + 1]) {
        visited[currentX][currentY + 1] = true;
        distance[currentX][currentY + 1] = distance[currentX][currentY] + 1;
        queueX.offer(currentX); queueY.offer(currentY + 1);
      }
      // 좌
      if(currentX - 1 > 0 && arr[currentX - 1][currentY] != 1 && !visited[currentX - 1][currentY]) {
        visited[currentX - 1][currentY] = true;
        distance[currentX - 1][currentY] = distance[currentX][currentY] + 1;
        queueX.offer(currentX - 1); queueY.offer(currentY);
      }
      // 우
      if(currentX < N && arr[currentX + 1][currentY] != 1 && !visited[currentX + 1][currentY]) {
        visited[currentX + 1][currentY] = true;
        distance[currentX + 1][currentY] = distance[currentX][currentY] + 1;
        queueX.offer(currentX + 1); queueY.offer(currentY);
      }
    }

    if(!visited[N][M]) {
      result = 10001;
    } else {
      result = distance[N][M];
    }
    return result;
  }
  // 검 찾고 공주 찾기
  static int findSword() {
    int result;
    
    if(!visited[S][W]) {
      result = 10001;
    } else {
      result = distance[S][W] + Math.abs(S - N) + Math.abs(W - M);
    }
    return result;
  }

  static int N, M, T, result;
  static int S, W;
  static int[][] arr;
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // 성의 크기 N(세로) * M(가로), 제한 시간 T 입력 받기
    StringTokenizer st = new StringTokenizer(br.readLine());
    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());
    T = Integer.parseInt(st.nextToken());
    // 초기 설정 해주고, 2차원 배열에 값 집어 넣기
    arr = new int[N+1][M+1];
    for(int i = 0; i < N+1; i++) {arr[i][0] = 1;}
    for(int i = 0; i < M+1; i++) {arr[0][i] = 1;}

    for(int i = 1; i < N+1; i++) {
      st = new StringTokenizer(br.readLine());
      for(int j = 1; j < M+1; j++) {
        arr[i][j] = Integer.parseInt(st.nextToken());
        // 검 위치 미리 찾아놓기
        if(arr[i][j] == 2) {
          S = i; W = j;
        }
      } 
    }
    result = Math.min(findPrincess(), findSword());
    if(result > T) {
      System.out.println("Fail");
    } else {
      System.out.println(result);
    }
  }
}
