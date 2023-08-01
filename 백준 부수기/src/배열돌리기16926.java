import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 배열돌리기16926 {
  static int N, M, R;
  static int[][] arr; 

  static void spinarr(int r) {
    int count = Math.min(N, M) / 2;
    while(r > 0) {
      for(int i = 0; i < count; i++) {
        // 처음 시작하는 부분 따로 빼두기 -> 나중에 넣어주기
        int start = arr[i][i];
        // 윗쪽
        for(int j = i; j < M - i - 1; j++) {
          arr[i][j] = arr[i][j+1];
        }
        // 오른쪽
        for(int j = i; j < N - i - 1; j++) {
          arr[j][M-1-i] = arr[j+1][M-1-i];
        }
        // 아랫쪽
        for(int j = i; j < M - i - 1; j++) {
          arr[N-1-i][M-1-j] = arr[N-1-i][M-1-j-1]; 
        }
        // 왼쪽
        for(int j = i; j < N - i - 1; j++) {
          arr[N-1-j][i] = arr[N-1-j-1][i];
        }
        arr[i + 1][i] = start;
      }
      r--;
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();

    // 배열의 크기 N x M, 회전의 수 R 입력 받기
    StringTokenizer st = new StringTokenizer(br.readLine());
    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());
    R = Integer.parseInt(st.nextToken());
    // 배열 입력 받기
    arr = new int[N][M];
    for(int i = 0; i < N; i++) {
      st = new StringTokenizer(br.readLine());
      for(int j = 0; j < M; j++) {
        arr[i][j] = Integer.parseInt(st.nextToken());
      }
    }
    // R번 만큼 배열 돌리기
    spinarr(R);
    // 정답 출력하기
    for(int i = 0; i < N; i++) {
      for(int j = 0; j < M; j++) {
        sb.append(arr[i][j]).append(" ");
      }
      sb.append("\n");
    }
    System.out.print(sb);
  }
}