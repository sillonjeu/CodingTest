import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 안전영역2468 {
  static int N;
  static int[][] arr;
  static boolean[][] checkarr;
  static boolean[][] checkground;
  static int maxnum;
  static int maxcount;

  // checkarr에 안전영역 표시하기
  public static void raining(int x) {
    for (int i = 0; i < N; i++) {
      for (int j = 0; j < N; j++) {
        if (arr[i][j] > x) {
          checkarr[i][j] = true;
        }
      }
    }
  }

  // 총 안전영역 개수 구하기
  public static int findsafeground() {
    int countground = 0;

    for (int i = 0; i < N; i++) {
      for (int j = 0; j < N; j++) {
        if (checkarr[i][j] == true && checkground[i][j] == false) {
          checkground[i][j] = true;
          findanotherground(i, j);
          countground++;
        }
      }
    }
    return countground;
  }

  // 안전영역 구한 곳은 체크하기
  public static void findanotherground(int x, int y) {
    // 상 찾기
    if (y - 1 >= 0) {
      if (checkarr[x][y - 1] == true && checkground[x][y - 1] == false) {
        checkground[x][y - 1] = true;
        findanotherground(x, y - 1);
      }
    }
    // 하 찾기
    if (y + 1 < N) {
      if (checkarr[x][y + 1] == true && checkground[x][y + 1] == false) {
        checkground[x][y + 1] = true;
        findanotherground(x, y + 1);
      }
    }
    // 좌 찾기
    if (x - 1 >= 0) {
      if (checkarr[x - 1][y] == true && checkground[x - 1][y] == false) {
        checkground[x - 1][y] = true;
        findanotherground(x - 1, y);
      }
    }
    // 우 찾기
    if (x + 1 < N) {
      if (checkarr[x + 1][y] == true && checkground[x + 1][y] == false) {
        checkground[x + 1][y] = true;
        findanotherground(x + 1, y);
      }
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // 행과 열의 개수를 입력받는 N -> arr 크기 결정
    N = Integer.parseInt(br.readLine());
    arr = new int[N][N];

    // arr에 값 집어넣기
    int maxnum = 0;
    for (int i = 0; i < N; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine(), " ");
      for (int j = 0; j < N; j++) {
        arr[i][j] = Integer.parseInt(st.nextToken());
        // maxnum에 가장 큰 수 집어넣기
        if (maxnum < arr[i][j]) {
          maxnum = arr[i][j];
        }
      }
    }

    // 높이가 1부터 maxnum까지 덮힌다고 가정
    // 아무 영역도 안덮힐 수 있으니 maxcount는 1부터 시작
    maxcount = 1;
    for (int i = 1; i < maxnum + 1; i++) {
      checkarr = new boolean[N][N];
      checkground = new boolean[N][N];
      raining(i);
      int check = findsafeground();
      if(maxcount <= check) {
        maxcount = check;
      }
    }
    System.out.println(maxcount);
  }
}
