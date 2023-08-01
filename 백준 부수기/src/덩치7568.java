import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 덩치7568 {
  static int N;
  static int[] arrX;
  static int[] arrY;
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();
    // 전체 사람의 수 N
    N = Integer.parseInt(br.readLine());
    // N 만큼 사람들 정보 입력 받기
    // arrX -> 몸무게, arrY -> 키
    arrX = new int[N]; arrY = new int[N];
    for(int i = 0; i < N; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      arrX[i] = Integer.parseInt(st.nextToken());
      arrY[i] = Integer.parseInt(st.nextToken());
    }
    
    for(int i = 0; i < N; i++) {
      int ranking = 1;
      for(int j = 0; j < N; j++) {
        if(i == j) {continue;}
        if(arrX[i] < arrX[j] && arrY[i] < arrY[j]) {
          ranking++;
        }
      }
      sb.append(ranking).append(" ");
    }
    System.out.print(sb);
  }
}