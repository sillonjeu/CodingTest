import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 오목2615 {
  static int[][] arr;
  static boolean flag = false;
  static StringBuilder sb = new StringBuilder();

  static void findOMok() {

    for (int i = 0; i < 19; i++) {
      for (int j = 0; j < 19; j++) {
        if (arr[i][j] != 0) {
          // 오른쪽 dir 0
          if (j <= 14 && arr[i][j] == arr[i][j + 1]) {
            check(i, j, 0, 1, arr[i][j]);
          }
          // 대각선 아래 왼쪽 dir 1
          if (j >= 4 && i <= 14 && arr[i][j] == arr[i + 1][j - 1]) {
            check(i, j, 1, 1, arr[i][j]);
          }
          // 아래 dir 2
          if (i <= 14 && arr[i][j] == arr[i + 1][j]) {
            check(i, j, 2, 1, arr[i][j]);
          }
          // 대각선 아래 오른쪽 dir 3
          if (j <= 14 && i <= 14 && arr[i][j] == arr[i + 1][j + 1]) {
            check(i, j, 3, 1, arr[i][j]);
          }
        }
      }
    }
  }

  static void check(int x, int y, int dir, int count, int Omok) {
    if (dir == 0) {
      if (y < 18 && arr[x][y] == arr[x][y + 1]) {
        check(x, y + 1, dir, count + 1, Omok);
      }
    }
    if (dir == 1) {
      if (y > 0 && x < 18 && arr[x][y] == arr[x + 1][y - 1]) {
        check(x + 1, y - 1, dir, count + 1, Omok);
      }
    }
    if (dir == 2) {
      if (x < 18 && arr[x][y] == arr[x + 1][y]) {
        check(x + 1, y, dir, count + 1, Omok);
      }
    }
    if (dir == 3) {
      if (x < 18 && y < 18 && arr[x][y] == arr[x + 1][y + 1]) {
        check(x + 1, y + 1, dir, count + 1, Omok);
      }
    }
    if(count == 5) {
      flag = true;
      sb.append(Omok).append("\n").append(x-3).append(" ").append(y-3);
    } else if(count < 5) {
      flag = false;
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    // 바둑판 19 * 19, 0은 빈거, 1은 검정색, 2는 흰색
    arr = new int[19][19];
    for (int i = 0; i < 19; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      for (int j = 0; j < 19; j++) {
        arr[i][j] = Integer.parseInt(st.nextToken());
      }
    }
    findOMok();
    if(!flag) {
      System.out.println(0);
    } else {
      System.out.println(sb);
    }
  }
}
