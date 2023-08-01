import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 이동하기11048 {
  static int N, M;
  static int[][] arr;
  static Integer[][] dp;

  static int finddp(int N, int M) {
    if(dp[N][M] == null) {
      dp[N][M] = Math.max(Math.max(finddp(N-1, M), finddp(N, M-1)) + arr[N][M], finddp(N-1, M-1) + arr[N][M]);
    }
    return dp[N][M];
  }

  public static void main(String[] args) throws NumberFormatException, IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // 미로의 크기 N x M을 입력 받는다.
    StringTokenizer st = new StringTokenizer(br.readLine());
    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());

    // arr에 사탕 개수 집어 넣기
    arr = new int[N+1][M+1];
    for(int i = 1; i < N+1; i++) {
      st = new StringTokenizer(br.readLine());
      for(int j = 1; j < M+1; j++) {
        arr[i][j] = Integer.parseInt(st.nextToken());
      }
    }
    
    // dp 처음에 초기화 해주기
    dp = new Integer[N+1][M+1];
    dp[1][1] = arr[1][1];
    for(int i = 0; i < M+1; i++) { dp[0][i] = 0; }
    for(int i = 0; i < N+1; i++) { dp[i][0] = 0; }
    System.out.println(finddp(N, M));
  }
}
