import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class 통계학2108 {
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // 수의 개수 N 입력받기. 항상 홀수임
    int N = Integer.parseInt(br.readLine());
    int[] arr = new int[N];
    for (int i = 0; i < N; i++) {
      arr[i] = Integer.parseInt(br.readLine());
    }
    // 오름차순 정렬
    Arrays.sort(arr);

    // 산술평균
    int sum = 0;
    for (int i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    double average = (double) sum / N; // 평균 계산
    double roundedAverage = Math.round(average); // 소숫점 첫째 자리에서 반올림
    System.out.println((int)roundedAverage);

    // 중앙값
    System.out.println(arr[N / 2]);
    
    // 최빈값
    int[] count = new int[8001]; // 숫자의 등장 횟수를 저장하는 배열
    int[] modes = new int[N]; // 최빈값들을 저장하는 배열
    int modeCount = 0; // 최빈값의 개수
    int maxCount = 0; // 최빈값의 등장 횟수

    for (int i = 0; i < arr.length; i++) {
      count[arr[i] + 4000]++; // 숫자의 등장 횟수 증가

      if (count[arr[i] + 4000] > maxCount) {
        modes[0] = arr[i];
        modeCount = 1;
        maxCount = count[arr[i] + 4000];
      } else if (count[arr[i] + 4000] == maxCount) {
        modes[modeCount] = arr[i];
        modeCount++;
      }
    }

    if (modeCount > 1) {
      Arrays.sort(modes, 0, modeCount);
      System.out.println(modes[1]);
    } else {
      System.out.println(modes[0]);
    }
    // 범위
    System.out.println(arr[N - 1] - arr[0]);
  }
}
