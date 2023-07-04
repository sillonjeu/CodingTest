import java.io.*;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class 치킨배달15686 {
  static int N, M;
  static int[][] arr;
  static ArrayList<int[]> chickenList;
  static ArrayList<int[]> houseList;
  static boolean[] selected;
  static int answer = Integer.MAX_VALUE;

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringBuilder sb = new StringBuilder();
    StringTokenizer st = new StringTokenizer(br.readLine(), " ");

    // N, M 입력받기
    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());

    arr = new int[N][N];
    chickenList = new ArrayList<>();
    houseList = new ArrayList<>();

    // 2차원 배열 입력받기
    for (int i = 0; i < N; i++) {
      StringTokenizer st1 = new StringTokenizer(br.readLine(), " ");
      for (int j = 0; j < N; j++) {
        arr[i][j] = Integer.parseInt(st1.nextToken());
        if (arr[i][j] == 2) {
          int[] coordinate = { i, j };
          chickenList.add(coordinate);
        } else if (arr[i][j] == 1) {
          int[] coordinate = { i, j };
          houseList.add(coordinate);
        }
      }
    }

    selected = new boolean[chickenList.size()];
    chooseChicken(0, 0);

    sb.append(answer);

    bw.write(sb.toString());
    bw.flush();
    bw.close();
    br.close();
  }

  // 폐업시킬 치킨 집 선택하는 함수
  public static void chooseChicken(int start, int count) {
    if (count == M) {
      int chickenDistance = calculateChickenDistance();
      answer = Math.min(answer, chickenDistance);
      return;
    }
    for (int i = start; i < chickenList.size(); i++) {
      selected[i] = true;
      chooseChicken(i + 1, count + 1);
      selected[i] = false;
    }
  }

  // 선택된 치킨 집으로부터의 거리 합을 계산하는 함수
  public static int calculateChickenDistance() {
    int totalDistance = 0;

    for (int[] house : houseList) {
      int minDistance = Integer.MAX_VALUE;

      for (int i = 0; i < chickenList.size(); i++) {
        if (selected[i]) {
          int[] chicken = chickenList.get(i);
          int distance = Math.abs(house[0] - chicken[0]) + Math.abs(house[1] - chicken[1]);
          minDistance = Math.min(minDistance, distance);
        }
      }
      totalDistance += minDistance;
    }

    return totalDistance;
  }
}