import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class 키로거5397 {
  
  static Stack<Character> leftStack;
  static Stack<Character> rightStack;

  public static void main(String[] args) throws NumberFormatException, IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();

    // 테스트 케이스 입력
    int T = Integer.parseInt(br.readLine());

    // 비밀번호 찾기
    for (int i = 0; i < T; i++) {
      String pw = br.readLine();
      char[] digits = pw.toCharArray();
      leftStack = new Stack<>();
      rightStack = new Stack<>();

      // 각각의 문자별로 비밀번호 찾기 로직 수행
      for (int j = 0; j < digits.length; j++) {
        char c = digits[j];
        if (c == '<') {
          if (!leftStack.isEmpty()) {
            rightStack.push(leftStack.pop());
          }
        } else if (c == '>') {
          if (!rightStack.isEmpty()) {
            leftStack.push(rightStack.pop());
          }
        } else if (c == '-') {
          if (!leftStack.isEmpty()) {
            leftStack.pop();
          }
        } else {
          leftStack.push(c);
        }
      }

      // 답 sb에 추가하기
      while (!leftStack.isEmpty()) {
        rightStack.push(leftStack.pop());
      }
      while (!rightStack.isEmpty()) {
        sb.append(rightStack.pop());
      }
      sb.append("\n");
    }

    // 답 출력
    System.out.print(sb);
  }
}