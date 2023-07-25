import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 수강과목17845 {
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());

    int n = Integer.parseInt(st.nextToken()), k = Integer.parseInt(st.nextToken());

    int[] priority = new int[k + 1];
    int[] time = new int[k + 1];
    int[][] bag = new int[k + 1][n + 1];

    for (int i = 1; i <= k; i++) {
      st = new StringTokenizer(br.readLine());
      priority[i] = Integer.parseInt(st.nextToken());
      time[i] = Integer.parseInt(st.nextToken());
    }

    // 배낭 문제
    for (int i = 1; i <= k; i++) {
      for (int j = 1; j <= n; j++) {
        if (time[i] <= j) {
          bag[i][j] = Math.max(bag[i - 1][j], bag[i - 1][j - time[i]] + priority[i]);
        } else {
          bag[i][j] = bag[i - 1][j];
        }
      }
    }
    System.out.println(bag[k][n]);
  }
}