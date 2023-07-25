import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedHashSet;
import java.util.StringTokenizer;

public class 수강신청13414 {
  public static void main(String[] args) throws NumberFormatException, IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());
    int K = Integer.parseInt(st.nextToken());
    int L = Integer.parseInt(st.nextToken());
    int count = 0;

    LinkedHashSet<String> set = new LinkedHashSet<>();

    for (int i = 0; i < L; i++) {
      String str = br.readLine();
      if (set.contains(str))
        set.remove(str);
      set.add(str);
    }
    for (String x : set) {
      count++;
      System.out.println(x);
      if (count == K)
        break;
    }
  }
}