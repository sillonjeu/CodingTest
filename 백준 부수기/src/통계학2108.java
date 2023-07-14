import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class 통계학2108 {
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();

    // 수의 개수 N 입력받기. 항상 홀수임
    int N = Integer.parseInt(br.readLine());
    int[] arr = new int[N];
    // 오름차순 정렬
    Arrays.sort(arr);

    // 산술평균
    int sum = 0;
    for (int i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    sb.append(sum / N).append("/n");

    // 중앙값
    sb.append(arr[N / 2]).append("/n");

    // 최빈값
    int count = 0;
    int num1 = 0;
    int num2 = 0;
    int checknum = 0;
    for (int i = 0; i < arr.length; i++) {
      if (i == 0) {
        num1 = arr[0];
      }
      checknum++;
      if (i < arr.length - 1) {
        if (arr[i] != arr[i + 1]) {
          if (checknum > count) {
            count = checknum;
            num2 = num1;
            num1 = arr[i];
          } else if (checknum == count) {
            if (arr[i] < num1) {
              num2 = num1;
              num1 = arr[i];
            }
            if (arr[i] > num1 && arr[i] < num2) {
              num2 = arr[i];
            }
          }
          checknum = 0;
        }
      }

    }
    sb.append(num2).append("/n");
    // 범위
    sb.append(arr[N - 1] - arr[0]).append("/n");
    System.out.print(sb);
  }
}
