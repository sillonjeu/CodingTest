import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Scanner;

public class 키로거5397 {

  static ArrayList<char[]> password;
  static int curser;

  // 비밀번호 찾기 로직
  public static void checkdigit(char d) {
    
    // 커서 뒤로 보내기
    if(d == '<') {
      if(curser != 0 && !password.isEmpty()) {
        curser--;
      }
    }
    // 커서 앞으로 보내기
    if(d == '>') {
      if(curser != password.size() && !password.isEmpty()) {
        curser++;
      }
    }
    // 지우기
    if(d == '-') {
      if(curser > 0 && !password.isEmpty()) {

      }
    }
    // 나머지
    if(d != '<' && d != '-' && d != '>') {
      char[] arr = { d , (char)curser };
      password.append(arr);
    }
  }

  public static void main(String[] args) throws NumberFormatException, IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();

    // 테스트 케이스 입력
    int T = Integer.parseInt(br.readLine());

    // 비밀번호 찾기
    password = new ArrayList<char[]>();
    for(int i = 0; i < T; i++) {
      String pw = br.readLine();
      char[] digits = pw.toCharArray();
      curser = 0;
      
      // 각각의 문자별로 비밀번호 찾기 로직 수행
      for(int j = 0; j < digits.length; j++) {
        checkdigit(digits[j]);
      }
      // 답 sb에 추가하기
      for(char arr[] : password) {
        sb.append(arr[0]); 
      }
      sb.append("\n");
    }
    // 답 출력
    System.out.println(sb);
  }
}
