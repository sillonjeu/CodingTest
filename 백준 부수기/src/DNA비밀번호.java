import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class DNA비밀번호 {
  static int S, P; // 전체 문자열 길이 S, 부분 문자열 길이 P
  static char[] DNA; // 배열
  static int A, C, G, T; // 각각 문자열 안에 변수 수
  static int result; // 결과

  public static void main(String[] args) throws NumberFormatException, IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    StringTokenizer st = new StringTokenizer(br.readLine());
    S = Integer.parseInt(st.nextToken());
    P = Integer.parseInt(st.nextToken());

    String input = br.readLine();
    DNA = input.toCharArray();

    st = new StringTokenizer(br.readLine());
    A = Integer.parseInt(st.nextToken());
    C = Integer.parseInt(st.nextToken());
    G = Integer.parseInt(st.nextToken());
    T = Integer.parseInt(st.nextToken());
    result = 0;

    // 첫 번째 윈도우를 초기화
    for (int i = 0; i < P; i++) {
      if (DNA[i] == 'A')
        A--;
      if (DNA[i] == 'C')
        C--;
      if (DNA[i] == 'G')
        G--;
      if (DNA[i] == 'T')
        T--;
    }
    if (A <= 0 && C <= 0 && G <= 0 && T <= 0) {
      result++;
    }
    // 슬라이딩 윈도우를 이용하여 문자열을 순회
    for (int i = P; i < S; i++) {
      if (DNA[i - P] == 'A')
        A++;
      if (DNA[i - P] == 'C')
        C++;
      if (DNA[i - P] == 'G')
        G++;
      if (DNA[i - P] == 'T')
        T++;

      if (DNA[i] == 'A')
        A--;
      if (DNA[i] == 'C')
        C--;
      if (DNA[i] == 'G')
        G--;
      if (DNA[i] == 'T')
        T--;

      if (A <= 0 && C <= 0 && G <= 0 && T <= 0) {
        result++;
      }
    }
    bw.write(String.valueOf(result));
    bw.flush();
    bw.close();
    br.close();
  }
}
