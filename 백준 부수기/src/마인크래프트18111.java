import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 마인크래프트18111 {
  static int N, M, B;
  static int resulttime = Integer.MAX_VALUE;
  static int resultsize = 0;
  static int[][] arr;

  static void checkblock(int height) {
    int time = 0;
    for(int i = 0; i < N; i++) {
      for(int j = 0; j < M; j++) {
        // 높이보다 작으면 채워주기
        if(arr[i][j] < height) {
          time += height - arr[i][j];
        }
        // 높이보다 크면 깎기
        else if (arr[i][j] > height) {
          time += (arr[i][j] - height) * 2;
        }
      }
    }
    if(time <= resulttime) {
      resulttime = time;
      if(height > resultsize) {
        resultsize = height;
      }
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // N(세로) x M(가로)의 땅, 그리고 인벤토리에 B개의 블록이 있다. 
    StringTokenizer st = new StringTokenizer(br.readLine(), " ");
    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());
    B = Integer.parseInt(st.nextToken());

    arr = new int[N][M];
    int allblock = B;
    for(int i = 0; i < N; i++) {
      st = new StringTokenizer(br.readLine());
      for(int j = 0; j < M; j++) {
        arr[i][j] = Integer.parseInt(st.nextToken());
        allblock += arr[i][j];
      }
    }
    int maxheight = allblock / (N * M);
    for(int i = 0; i < maxheight + 1; i++) {
      checkblock(i);
    }
    System.out.println(resulttime + " " + resultsize);
  }
}
