import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Stack;
import java.util.StringTokenizer;

public class 창고다각형2304 {
  static int N, maxspot, maxheight;
  static int[] Larr;
  static int[] Harr;
  static Stack<Integer> Rstack;
  static Stack<Integer> Lstack;

  static void pushstack(int mh, int ms) {
    // 가장 큰 기둥 기준 왼쪽 check
    for (int i = 0; i < ms; i++) {
      if (i == 0 || Harr[i] > Harr[Lstack.peek()]) {
        Lstack.push(i);
      }
    }
    // 가장 큰 기둥 기준 오른쪽 check
    for (int i = N - 1; i > ms; i--) {
      if (i == N - 1 || Harr[i] > Harr[Rstack.peek()]) {
        Rstack.push(i);
      }
    }
  }

  static int resultstack() {
    int result = maxheight;
    // 왼쪽부터 계산하기
    int Lspot = Larr[maxspot];
    while (!Lstack.empty()) {
      result += Harr[Lstack.peek()] * (Lspot - Larr[Lstack.peek()]);
      Lspot = Larr[Lstack.peek()];
      Lstack.pop();
    }
    // 오른쪽 계산하기
    int Rspot = Larr[maxspot] + 1;
    while (!Rstack.empty()) {
      result += Harr[Rstack.peek()] * (Larr[Rstack.peek()] + 1 - Rspot);
      Rspot = Larr[Rstack.peek()] + 1;
      Rstack.pop();
    }
    return result;
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // 기둥의 개수를 나타내는 정수 N
    N = Integer.parseInt(br.readLine());
    // N번 만큼 왼쪽 면의 위치인 정수 L과 높이를 나타내는 정수 H 입력받기
    // 입력 받으면서 가장 높은 기둥 찾기

    ArrayList<int[]> list = new ArrayList<>();
    for (int i = 0; i < N; i++) {
      StringTokenizer st1 = new StringTokenizer(br.readLine());
      int L = Integer.parseInt(st1.nextToken());
      int H = Integer.parseInt(st1.nextToken());
      int[] put = { L, H };
      list.add(put);
    }
    list.sort(new Comparator<int[]>() {
      public int compare(int[] a, int[] b) {
        return Integer.compare(a[0], b[0]);
      }
    });

    maxheight = 0;
    Larr = new int[N];
    Harr = new int[N];
    for (int i = 0; i < N; i++) {
      Larr[i] = list.get(i)[0];
      Harr[i] = list.get(i)[1];
      if (Harr[i] > maxheight) {
        maxheight = Harr[i];
        maxspot = i;
      }
    }
    Rstack = new Stack<>();
    Lstack = new Stack<>();
    pushstack(maxheight, maxspot);
    System.out.println(resultstack());
  }
}
