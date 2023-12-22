import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 폴리오미노1343 {
  static String[] arr;

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();

    String input = br.readLine();
    StringTokenizer st = new StringTokenizer(input, "X");
    int count = 0; arr = new String[st.countTokens()];
    while(st.hasMoreTokens()) {
      arr[count] = st.nextToken();
      count++;
    }
    count = 0;
  
    st = new StringTokenizer(input, ".");
    while(st.hasMoreTokens()) {
      String X = st.nextToken();

      if(input.startsWith(".")) {
        sb.append(arr[count]);
        count++;
      }

      // 4의 배수일때 AAAA...
      if(X.length() % 4 == 0) {
        int size = X.length() / 4;
        for(int i = 0; i < size; i++) {
          sb.append("AAAA");
        }
      }
      // 4로 나눴을때 2 남으면 AAAA...BB , 그리고 그냥 BB
      else if(X.length() % 4 == 2) {
        int size = X.length() / 4;
        for(int i = 0; i < size; i++) {
          sb.append("AAAA");
        }
        sb.append("BB");
      }
      // 그 나머지 모든 것
      else {
        sb.setLength(0);
        sb.append("-1");
        break;
      }
      // 토큰 하나 판단했으면 arr에서 뽑아서 ..붙여주기
      if(count < arr.length) {
        sb.append(arr[count]);
        count++;
      }
    }
    System.out.println(sb);
  }
}


// import java.util.*;
 
// public class 폴리오미노1343 {
 
//     public static void main(String args[]) {
//         Scanner sc = new Scanner(System.in);
//         String s = sc.next();
//         sc.close();
 
//         String res = "";
//         res = poliomino(s);
//         System.out.println(res);
//     }
 
//     private static String poliomino(String s) {
//         String ans = "";
//         String A = "AAAA", B = "BB";
        
//         s = s.replaceAll("XXXX", A);
//         ans = s.replaceAll("XX", B);
        
//         if(ans.contains("X")) {
//             ans = "-1";
//         }
//         return ans;
//     }
// }