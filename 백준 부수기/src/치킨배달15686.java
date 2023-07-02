import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.StringTokenizer;

public class 치킨배달15686 {
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringBuilder sb = new StringBuilder();
    StringTokenizer st = new StringTokenizer(br.readLine(), " ");

    // N, M 입력받기
    int N = Integer.parseInt(st.nextToken());
    int M = Integer.parseInt(st.nextToken());

    int[][] arr = new int[N][N];
    ArrayList<int[]> list2 = new ArrayList<>();
    ArrayList<int[]> list1 = new ArrayList<>();
    ArrayList<int[]> result = new ArrayList<>();
    ArrayList<int[]> result2 = new ArrayList<>();

    // 2차원 배열
    for (int i = 0; i < N; i++) {
      StringTokenizer st1 = new StringTokenizer(br.readLine(), " ");
      for (int j = 0; j < N; j++) {
        arr[i][j] = Integer.parseInt(st1.nextToken());

        if (arr[i][j] == 2) {
          int[] coordinated = { i, j };
          list2.add(coordinated);
        } else if (arr[i][j] == 1) {
          int[] coordinated = { i, j };
          list1.add(coordinated);
        }
      }
    }

    // 2에서부터 1들의 거리 합한 것
    for (int[] List2 : list2) {
      int x = List2[0];
      int y = List2[1];
      int cal = 0;
      for (int[] List1 : list1) {
        cal += Math.abs(List1[0] - x) + Math.abs(List1[1] - y);
      }
      int[] Result = { cal, x, y, 0 };
      result.add(Result);
    }

    for(int[] List1 : list1) {
      int x = List1[0];
      int y = List1[1];
      int cal = 100;
      for(int[] Result : result) {
        if (cal >= Math.abs(List1[0] - x) + Math.abs(List1[1] - y)) {
          cal = Math.abs(List1[0] - x) + Math.abs(List1[1] - y);
        }
      }
    }

    Collections.sort(result, new Comparator<int[]>() {
      @Override
      public int compare(int[] arr1, int[] arr2) {
        return arr2[0] - arr1[0];
      }
    });
    // for (int[] coordinates : result) {System.out.println("(" + coordinates[0] +
    // ", " + coordinates[1] + ", " + coordinates[2] +")");}

  }
}
