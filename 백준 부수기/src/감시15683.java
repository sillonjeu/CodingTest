import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 감시15683 {
  static int N, M;
  static int[][] arr;

  public static int findemptyroom() {
    for(int i = 0; i < N; i++) {
      for(int j = 0; j < M; j++) {
        if(arr[i][j] != 0 || arr[i][j] != 6) { checkcctv(arr[i][j], i , j); }
      }
    }

    return 0;
  }
  // 1번이 한방향만, 2번이 180도, 3번이 90도, 4번이 3방향, 5번이 4방향
  public static void checkcctv(int spot, int x, int y) {
    int someArray;
    int (* const arr)[N][M] = &someArray;

    if(spot == 1) {
      int result = 0;
      // 상
      if(x - 1 >= 0) {
        int count = 0;
        for(int[] cal : arr){

        }
        for(int i = x-1; i >= 0; i--) {
          if(arr[i][y] == 6) {break;}
          if(arr[i][y] != 7) {arr[i][y] = 7; count++;}; 
        }
        if(result < count) { result = count;}
      }
      // 하
      if(x + 1 < N) {
        
      }
      // 좌
      if(y - 1 >= 0) {
        
      }
      // 우
      if(y + 1 < M) {

      }
    }
    if(spot == 2) {}
    if(spot == 3) {}
    if(spot == 4) {}
    if(spot == 5) {}
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // 세로 크기 N, 가로 크기 M 입력 받기
    StringTokenizer st = new StringTokenizer(br.readLine(), " ");
    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());

    // arr에 정보 넣어주기
    arr = new int[N][M];
    for(int i = 0; i < N; i++) {
      StringTokenizer st1 = new StringTokenizer(br.readLine(), " ");
      for(int j = 0; j < M; j++) {
        arr[i][j] = Integer.parseInt(st1.nextToken());
      }
    }
    
    int result = findemptyroom();
    System.out.println(result);
  }
}
