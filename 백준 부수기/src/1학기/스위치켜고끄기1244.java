import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 스위치켜고끄기1244 {
  static int Sw;
  static int[] arr;

  public static void changeSwitch(int gender, int num) {
    if (gender == 1) {
      // 남학생
      for (int i = num - 1; i < Sw; i += num) {
        arr[i] = 1 - arr[i]; // 0을 1로, 1을 0으로 바꿈
      }
    } else if (gender == 2) {
      // 여학생
      num -= 1; // 스위치 번호와 배열 인덱스의 차이를 보정
      arr[num] = 1 - arr[num]; // 받은 번호의 스위치 상태를 변경

      int left = num - 1;
      int right = num + 1;

      // 가장 많은 스위치를 포함하는 대칭 구간 찾기
      while (left >= 0 && right < Sw && arr[left] == arr[right]) {
        arr[left] = 1 - arr[left];
        arr[right] = 1 - arr[right];
        left--;
        right++;
      }
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();

    // 스위치 개수 입력받기
    Sw = Integer.parseInt(br.readLine());
    // 각 스위치의 상태 입력받기
    StringTokenizer st = new StringTokenizer(br.readLine(), " ");
    arr = new int[Sw];
    for (int i = 0; i < Sw; i++) {
      arr[i] = Integer.parseInt(st.nextToken());
    }
    // 학생 수 입력 받기
    int St = Integer.parseInt(br.readLine());
    for (int i = 0; i < St; i++) {
      StringTokenizer st1 = new StringTokenizer(br.readLine(), " ");
      int gender = Integer.parseInt(st1.nextToken());
      int num = Integer.parseInt(st1.nextToken());
      // 스위치 상태 변경
      changeSwitch(gender, num);
    }

    // 스위치 상태 출력
    for (int i = 0; i < Sw; i++) {
      sb.append(arr[i]).append(" ");
      if ((i + 1) % 20 == 0 || i == Sw - 1) {
        sb.append("\n");
      }
    }
    System.out.print(sb);
  }
}