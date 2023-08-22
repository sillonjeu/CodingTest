import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 주식11501 {
  static int T; // 테스트케이스 수 T
  static int[] arr; // 주식 정보를 담은 배열

  public static void main(String[] args) throws NumberFormatException, IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();

    T = Integer.parseInt(br.readLine());
    while (T-- > 0) {
      int N = Integer.parseInt(br.readLine());
      arr = new int[N];

      StringTokenizer st = new StringTokenizer(br.readLine());
      for (int i = 0; i < N; i++) {
        arr[i] = Integer.parseInt(st.nextToken());
      }

      long maxmoney = 0;
      int maxPrice = arr[N - 1];
      
      for (int i = N - 2; i >= 0; i--) {
        if (arr[i] > maxPrice) {
          maxPrice = arr[i];
        } else {
          maxmoney += maxPrice - arr[i];
        }
      }
      
      sb.append(maxmoney).append("\n");
    }
    System.out.print(sb);
  }
}
