import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 로봇청소기14503 {
  static int N, M, r, c, d;
  static int[][] arr;
  static int[] dx = {-1, 0, 1, 0}; // 북(0), 동(1), 남(2), 서(3) 순서
  static int[] dy = {0, 1, 0, -1};

  static int cleaning() {
    int result = 0;
    int x = r;
    int y = c;
    int di = d;

    while(true) {
    boolean flag = false;
    // 해당장소 청소 안했으면 청소해주기
    if(arr[x][y] == 0) {
      arr[x][y] = 2;
      result++;
    }
    // 회전하기
    for(int i = 0; i < 4; i++) {
      di = (di + 3) % 4; // 왼쪽 방향(반시계방향으로 90도 회전한 방향)으로 회전
      int nx = x + dx[di];
      int ny = y + dy[di];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[nx][ny] == 0) { // 청소할 수 있는 공간이면 전진
        x = nx;
        y = ny;
        flag = true;
        break;
      }
    }
    if (!flag) {
      int back = (di + 2) % 4; // 현재 바라보는 방향을 유지하면서 후진
      x += dx[back];
      y += dy[back];
      if (arr[x][y] == 1) { // 후진하려는 공간이 벽이면 작동을 멈춤
        break;
      }
    }
  }
    return result;
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    // N(세로) x M(가로) 입력 받기
    StringTokenizer st = new StringTokenizer(br.readLine());
    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());
    // 시작하는 칸의 좌표(r,c)랑 바라보는 방향 d 입력
    // 0(북쪽) 1(동쪽) 2(남쪽) 3(서쪽) 0 -> 3 -> 2 -> 1
    st = new StringTokenizer(br.readLine());
    r = Integer.parseInt(st.nextToken());
    c = Integer.parseInt(st.nextToken());
    d = Integer.parseInt(st.nextToken());
    // 배열에 값 넣어주기 
    // 1(벽) 0(청소 안함)
    arr = new int[N][M];
    for(int i = 0; i < N; i++) {
      st = new StringTokenizer(br.readLine());
      for(int j = 0; j < M; j++) {
        arr[i][j] = Integer.parseInt(st.nextToken());
      }
    }
    System.out.println(cleaning());
  }
}
