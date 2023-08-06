import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 로봇청소기14503 {
  static int N, M, r, c, d;
  static int[][] arr;

  static int cleaning() {
    int result = 0;
    int x = r;
    int y = c;
    int di = d;
    boolean flag = false;

    while(true) {
      // 해당장소 청소 안했으면 청소해주기
      if(arr[x][y] == 0) {
        arr[x][y] = 2;
        result++;
      }
      // 회전하기
      for(int i = 1; i <= 3; i++) {
        // 북
        if(spin(di, i) == 0 && x > 0 && arr[x-1][y] == 0) { 
          x = x - 1; di = 0; flag = true; break;
        }
        // 서
        if(spin(di, i) == 3 && y > 0 && arr[x][y-1] == 0) {
          y = y - 1; di = 3; flag = true; break;
        }
        // 남
        if(spin(di, i) == 2 && x < N - 1 && arr[x+1][y] == 0) { 
          x = x + 1; di = 2; flag = true; break;
        }
        // 동
        if(spin(di, i) == 1 && y < M - 1 && arr[x][y+1] == 0) {
          y = y + 1; di = 1; flag = true; break;
        }
      }
      // 빈 칸이 없으면
      if(!flag) {
        if(di == 0 && x < N - 1 && arr[x+1][y] != 1) { x = x + 1; flag = true;}
        if(di == 3 && y < M - 1 && arr[x][y+1] != 1) { y = y + 1; flag = true;}
        if(di == 2 && x > 0 && arr[x-1][y] != 1) { x = x - 1; flag = true;}
        if(di == 1 && y > 0 && arr[x][y-1] != 1) { y = y - 1; flag = true;}
      }
      if(!flag) {
        break;
      }
    }
    return result;
  }

  static int spin(int d, int count) {
    int result = d; 
    for(int i = 0; i < count; i++) {
      if(result == 0) { result = 3;}
      else if(result == 1) { result = 0;}
      else if(result == 2) { result = 1;}
      else if(result == 3) { result = 2;}
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
