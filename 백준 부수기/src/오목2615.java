import java.io.*;
import java.util.*;

public class 오목2615 {
  static int[][] arr;
  static int[] dx = { 0, 1, 1, -1 }; // 우, 우하, 하, 좌하
  static int[] dy = { 1, 1, 0, 1 };

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    arr = new int[19][19];

    for (int i = 0; i < 19; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      for (int j = 0; j < 19; j++) {
        arr[i][j] = Integer.parseInt(st.nextToken());
      }
    }

    for (int i = 0; i < 19; i++) {
      for (int j = 0; j < 19; j++) {
        if (arr[i][j] != 0) {
          for (int dir = 0; dir < 4; dir++) {
            if (isFiveInARow(i, j, dir, arr[i][j])) {
              System.out.println(arr[i][j]);
              System.out.println((i + 1) + " " + (j + 1));
              return;
            }
          }
        }
      }
    }
    System.out.println(0);
  }

  static boolean isFiveInARow(int x, int y, int dir, int color) {
    if (inRange(x - dx[dir], y - dy[dir]) && arr[x - dx[dir]][y - dy[dir]] == color) {
      return false; // 시작점의 바로 전 칸이 같은 색상이라면 5개가 아님
    }

    int cnt = 0;
    while (true) {
      if (!inRange(x, y) || arr[x][y] != color)
        break;
      cnt++;
      x += dx[dir];
      y += dy[dir];
    }
    if (cnt == 5) {
      return true; // 정확히 5개의 돌이 연속됨
    }
    return false;
  }

  static boolean inRange(int x, int y) {
    return x >= 0 && y >= 0 && x < 19 && y < 19;
  }
}