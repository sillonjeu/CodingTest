import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class 참외밭2477 {
  static int K; 
  static int x_sizemax = 0; static int y_sizemax = 0;
  static int x_min = 501; static int x_max = -1;
  static int y_min = 501; static int y_max = -1;
  static int maxsize;
  static int minsize;
  static ArrayList<int[]> List;

  // 작은 사각형 크기 구하기
  public static int minsize() {
    int[] x = new int[2];
    int[] y = new int[2]; 
    int min;

    int count_x = 0; int count_y = 0;
    for (int[] arr : List) {
      // 가로 길이 구하기
      if(arr[0] < x_max && arr[0] > x_min) {
        x[count_x] = arr[1];
        count_x++; 
      }
      // 세로 길이 구하기
      if(arr[1] < y_max && arr[1] > y_min) {
        y[count_y] = arr[0];
        count_y++;
      }
    }
    min = Math.abs(x[0] - x[1]) * Math.abs(y[0] - y[1]);
    return min;
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // 참외의 개수 K
    K = Integer.parseInt(br.readLine());

    // 육각형 정보 받기
    // 동(1) 서(2) 남(3) 북(4)
    List = new ArrayList<>();
    int x = 0;
    int y = 0;
    for (int i = 0; i < 6; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine(), " ");
      int dir = Integer.parseInt(st.nextToken());
      int size = Integer.parseInt(st.nextToken());

      // 좌표 찍기
      // 큰 사각형 넓이를 구하기 위해 가장 큰 변 빼놓기
      if (dir == 1) {
        x += size;
        if(size > x_sizemax) { x_sizemax = size; }
      }
      if (dir == 2) {
        x -= size;
        if(size > x_sizemax) { x_sizemax = size; }
      }
      if (dir == 3) {
        y -= size;
        if(size > y_sizemax) { y_sizemax = size; }
      }
      if (dir == 4) {
        y += size;
        if(size > y_sizemax) { y_sizemax = size; }
      }

      // 작은 크기 사각형 구하기 위해 따로 빼두기
      if(x >= x_max) { x_max = x; }
      if(x <= x_min) { x_min = x; }
      if(y >= y_max) { y_max = y; }
      if(y <= y_min) { y_min = y; }

      int[] add = { x, y };
      List.add(add);
    }
    // 큰 사각형 넓이 구하기
    maxsize = x_sizemax * y_sizemax;
    minsize = minsize();    
    
    System.out.println((maxsize - minsize) * K);
  }
}
