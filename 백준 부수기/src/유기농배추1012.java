import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class 유기농배추1012 {

  static int[][] arr;
  static boolean[][] visited;
  static int M, N;

  public static void finddfs(int x, int y) {
    // 각각 다 인덱스가 존재하는 경우에만 수행하도록 함
    // 상 찾기
    if (y - 1 >= 0) {
      if (arr[x][y - 1] == 1 && visited[x][y - 1] == false) {
        visited[x][y - 1] = true;
        finddfs(x, y - 1);
      }
    }
    // 하 찾기
    if (y + 1 < N) {
      if (arr[x][y + 1] == 1 && visited[x][y + 1] == false) {
        visited[x][y + 1] = true;
        finddfs(x, y + 1);
      }
    }
    // 좌 찾기
    if (x - 1 >= 0) {
      if (arr[x - 1][y] == 1 && visited[x - 1][y] == false) {
        visited[x - 1][y] = true;
        finddfs(x - 1, y);
      }
    }
    // 우 찾기
    if (x + 1 < M) {
      if (arr[x + 1][y] == 1 && visited[x + 1][y] == false) {
        visited[x + 1][y] = true;
        finddfs(x + 1, y);
      }
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringBuilder sb = new StringBuilder();

    // 테스트 케이스 개수 T
    int T = Integer.parseInt(br.readLine());

    for (int i = 0; i < T; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine(), " ");
      // 가로길이 M, 세로길이 N, 배추의 개수 K
      M = Integer.parseInt(st.nextToken());
      N = Integer.parseInt(st.nextToken());
      int K = Integer.parseInt(st.nextToken());

      // 배열 arr에 배추 1로 넣기
      arr = new int[M][N];
      visited = new boolean[M][N];
      for (int j = 0; j < K; j++) {
        StringTokenizer st1 = new StringTokenizer(br.readLine(), " ");
        int x = Integer.parseInt(st1.nextToken());
        int y = Integer.parseInt(st1.nextToken());
        arr[x][y] = 1;
      }

      // 배열에서 배추를 찾으면 해당 배추를 탐색했는지 여부를 판단하고
      // 탐색하지 않았다면 인접하는 배추들 모두 찾기
      int count = 0; // count로 배추 무리 수 체크
      for (int j = 0; j < M; j++) {
        for (int k = 0; k < N; k++) {
          if (arr[j][k] == 1 && visited[j][k] == false) {
            visited[j][k] = true;
            finddfs(j, k);
            count++;
          }
        }
      }
      sb.append(count).append("\n");
    }
    System.out.print(sb);
  }
}

// 2
// 10 8 17
// 0 0
// 1 0
// 1 1
// 4 2
// 4 3
// 4 5
// 2 4
// 3 4
// 7 4
// 8 4
// 9 4
// 7 5
// 8 5
// 9 5
// 7 6
// 8 6
// 9 6
// 10 10 1
// 5 5