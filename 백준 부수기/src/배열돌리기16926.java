import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 배열돌리기16926 {
  static int N, M, R;
  static int[][] arr; 

  static void spinarr(int r) {
    while(r > 0) {
      
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
      for(int j = 0; i < M; j++) {
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
