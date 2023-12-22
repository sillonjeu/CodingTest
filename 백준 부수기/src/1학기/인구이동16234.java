import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class 인구이동16234 {
  static int N, L, R;
  static int count, result;
  static int[][] arr;
  static boolean[][] flagground;
  static ArrayList<int[]> choiceground;

  public static boolean findpeople() {
    boolean flag = false;

    flagground = new boolean[N][N];

    for (int i = 0; i < N; i++) {
      for (int j = 0; j < N; j++) {
        if (!flagground[i][j]) {
          count = 1;
          result = 0;
          choiceground = new ArrayList<int[]>();
          checkground(i, j);
          if (result != 0) {
            int cal = result / count;
            for (int[] Array : choiceground) {
              arr[Array[0]][Array[1]] = cal;
              flag = true;
            }
          }
        }
      }
    }
    return flag;
  }

  public static void checkground(int x, int y) {
    // 상
    if (x - 1 >= 0) {
      if ((Math.abs(arr[x][y] - arr[x - 1][y])) >= L && (Math.abs(arr[x][y] - arr[x - 1][y]) <= R)
          && flagground[x - 1][y] == false) {
        count++;
        flagground[x - 1][y] = true;
        if (flagground[x][y] == false) {
          flagground[x][y] = true;
          result += (arr[x][y] + arr[x - 1][y]);
          int[] cal2 = { x, y };
          choiceground.add(cal2);
        } else {
          result += arr[x - 1][y];
        }
        int[] cal = { x - 1, y };
        choiceground.add(cal);
        checkground(x - 1, y);
      }
    }
    // 하
    if (x + 1 < N) {
      if ((Math.abs(arr[x][y] - arr[x + 1][y])) >= L && (Math.abs(arr[x][y] - arr[x + 1][y]) <= R)
          && flagground[x + 1][y] == false) {
        count++;
        flagground[x + 1][y] = true;
        if (flagground[x][y] == false) {
          flagground[x][y] = true;
          result += (arr[x][y] + arr[x + 1][y]);
          int[] cal2 = { x, y };
          choiceground.add(cal2);
        } else {
          result += arr[x + 1][y];
        }
        int[] cal = { x + 1, y };
        choiceground.add(cal);
        checkground(x + 1, y);
      }
    }
    // 좌
    if (y - 1 >= 0) {
      if ((Math.abs(arr[x][y] - arr[x][y - 1])) >= L && (Math.abs(arr[x][y] - arr[x][y - 1]) <= R)
          && flagground[x][y - 1] == false) {
        count++;
        flagground[x][y - 1] = true;
        if (flagground[x][y] == false) {
          flagground[x][y] = true;
          result += (arr[x][y] + arr[x][y - 1]);
          int[] cal2 = { x, y };
          choiceground.add(cal2);
        } else {
          result += arr[x][y - 1];
        }
        int[] cal = { x, y - 1 };
        choiceground.add(cal);
        checkground(x, y - 1);
      }
    }
    // 우
    if (y + 1 < N) {
      if ((Math.abs(arr[x][y] - arr[x][y + 1])) >= L && (Math.abs(arr[x][y] - arr[x][y + 1]) <= R)
          && flagground[x][y + 1] == false) {
        count++;
        flagground[x][y + 1] = true;
        if (flagground[x][y] == false) {
          flagground[x][y] = true;
          result += (arr[x][y] + arr[x][y + 1]);
          int[] cal2 = { x, y };
          choiceground.add(cal2);
        } else {
          result += arr[x][y + 1];
        }
        int[] cal = { x, y + 1 };
        choiceground.add(cal);
        checkground(x, y + 1);
      }
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // 첫째 줄에 N(나라 크기), L(최소), R(최대) 입력받기
    StringTokenizer st = new StringTokenizer(br.readLine(), " ");
    N = Integer.parseInt(st.nextToken());
    L = Integer.parseInt(st.nextToken());
    R = Integer.parseInt(st.nextToken());

    arr = new int[N][N];
    // 나라 정보 입력 받기
    for (int i = 0; i < N; i++) {
      StringTokenizer st1 = new StringTokenizer(br.readLine(), " ");
      for (int j = 0; j < N; j++) {
        arr[i][j] = Integer.parseInt(st1.nextToken());
      }
    }

    // 일단 무한대로 돌리기
    int final_Result = 0;
    while (true) {
      boolean Result = findpeople();
      if (!Result) {
        break;
      }
      final_Result++;
    }
    System.out.println(final_Result);
  }
}