import java.util.Scanner;

public class 공통부분문자열5582 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String a = scanner.next();
        String b = scanner.next();

        int[][] dp = new int[4001][4001];
        int res = -1;

        for (int i = 0; i < a.length(); i++) {
            for (int j = 0; j < b.length(); j++) {
                if (a.charAt(i) == b.charAt(j)) {
                    dp[i + 1][j + 1] = dp[i][j] + 1;
                } else {
                    dp[i + 1][j + 1] = 0;
                }
                res = Math.max(res, dp[i + 1][j + 1]);
            }
        }

        System.out.println(res);
    }
}