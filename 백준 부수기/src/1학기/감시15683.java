import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class 감시15683 {
  static int N, M;
  static int[][] office;
  static List<CCTV> cctvList;
  static int minBlindSpot;

  static class CCTV {
    int type;
    int x;
    int y;

    public CCTV(int type, int x, int y) {
      this.type = type;
      this.x = x;
      this.y = y;
    }
  }

  public static void calculateBlindSpot() {
    int[][] copy = new int[N][M];
    for (int i = 0; i < N; i++) {
      System.arraycopy(office[i], 0, copy[i], 0, M);
    }

    for (CCTV cctv : cctvList) {
      int x = cctv.x;
      int y = cctv.y;

      if (cctv.type == 1) {
        watch(copy, x, y, getDirection(x, y, 0));
      } else if (cctv.type == 2) {
        watch(copy, x, y, getDirection(x, y, 0));
        watch(copy, x, y, getDirection(x, y, 2));
      } else if (cctv.type == 3) {
        watch(copy, x, y, getDirection(x, y, 0));
        watch(copy, x, y, getDirection(x, y, 1));
      } else if (cctv.type == 4) {
        watch(copy, x, y, getDirection(x, y, 0));
        watch(copy, x, y, getDirection(x, y, 1));
        watch(copy, x, y, getDirection(x, y, 2));
      } else if (cctv.type == 5) {
        watch(copy, x, y, getDirection(x, y, 0));
        watch(copy, x, y, getDirection(x, y, 1));
        watch(copy, x, y, getDirection(x, y, 2));
        watch(copy, x, y, getDirection(x, y, 3));
      }
    }

    int blindSpot = 0;
    for (int i = 0; i < N; i++) {
      for (int j = 0; j < M; j++) {
        if (copy[i][j] == 0) {
          blindSpot++;
        }
      }
    }
    minBlindSpot = Math.min(minBlindSpot, blindSpot);
  }

  public static int getDirection(int x, int y, int direction) {
    return (direction + office[x][y]) % 4;
  }

  public static void watch(int[][] copy, int x, int y, int direction) {
    int dx = 0;
    int dy = 0;

    if (direction == 0) {
      dx = -1;
    } else if (direction == 1) {
      dy = 1;
    } else if (direction == 2) {
      dx = 1;
    } else if (direction == 3) {
      dy = -1;
    }

    while (true) {
      x += dx;
      y += dy;

      if (x < 0 || x >= N || y < 0 || y >= M || copy[x][y] == 6) {
        break;
      }

      if (copy[x][y] == 0) {
        copy[x][y] = -1;
      }
    }
  }

  public static void generateCCTVCombination(int depth) {
    if (depth == cctvList.size()) {
      calculateBlindSpot();
      return;
    }

    CCTV cctv = cctvList.get(depth);
    int x = cctv.x;
    int y = cctv.y;

    int type = cctv.type;
    if (type == 2) {
      for (int i = 0; i < 2; i++) {
        office[x][y] = i;
        generateCCTVCombination(depth + 1);
        office[x][y] = type;
      }
    } else if (type == 5) {
      office[x][y] = 0;
      generateCCTVCombination(depth + 1);
      office[x][y] = type;
    } else {
      for (int i = 0; i < 4; i++) {
        office[x][y] = i;
        generateCCTVCombination(depth + 1);
        office[x][y] = type;
      }
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    StringTokenizer st = new StringTokenizer(br.readLine());
    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());

    office = new int[N][M];
    cctvList = new ArrayList<>();

    for (int i = 0; i < N; i++) {
      st = new StringTokenizer(br.readLine());
      for (int j = 0; j < M; j++) {
        office[i][j] = Integer.parseInt(st.nextToken());
        if (office[i][j] != 0 && office[i][j] != 6) {
          cctvList.add(new CCTV(office[i][j], i, j));
        }
      }
    }

    minBlindSpot = Integer.MAX_VALUE;
    generateCCTVCombination(0);
    System.out.println(minBlindSpot);
  }
}