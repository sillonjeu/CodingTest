import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class 숫자야구2503 {
  static int N, a, s, b;
  static ArrayList<int[]> numbers;

  public static void checkNumbers(int a, int s, int b) {
    int A, B, C; // array 값들
    // 비교할 값들
    int x = a / 100;
    int y = (a - x * 100) / 10;
    int z = (a - x * 100 - y * 10);

    for (int i = 0; i < numbers.size(); i++) {
      A = numbers.get(i)[0];
      B = numbers.get(i)[1];
      C = numbers.get(i)[2];

      int strikeCount = 0;
      int ballCount = 0;

      if (A == x)
        strikeCount++;
      if (B == y)
        strikeCount++;
      if (C == z)
        strikeCount++;

      if (x == B || x == C)
        ballCount++;
      if (y == A || y == C)
        ballCount++;
      if (z == A || z == B)
        ballCount++;

      if (strikeCount != s || ballCount != b) {
        numbers.remove(i);
        i--;
      }
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    numbers = new ArrayList<>();

    for (int i = 1; i <= 9; i++) {
      for (int j = 1; j <= 9; j++) {
        for (int k = 1; k <= 9; k++) {
          if (i != j && i != k && j != k) {
            int[] add = { i, j, k };
            numbers.add(add);
          }
        }
      }
    }

    N = Integer.parseInt(br.readLine());

    for (int i = 0; i < N; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      a = Integer.parseInt(st.nextToken());
      s = Integer.parseInt(st.nextToken());
      b = Integer.parseInt(st.nextToken());
      checkNumbers(a, s, b);
    }
    System.out.println(numbers.size());
  }
}