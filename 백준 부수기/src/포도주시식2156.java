import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class 포도주시식2156 {
    public static int[] arr;
    public static Integer[] dp;
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());

        dp = new Integer[n+1];
        arr = new int[n+1];

        for(int i = 1; i < n+1; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }

        dp[0] = 0;
        dp[1] = arr[1];
        if(n > 1) {dp[2] = arr[1] + arr[2];}

        System.out.println(findmax(n));
    }

    public static int findmax(int n) {
        if(dp[n] == null) {
            dp[n] = Math.max(Math.max(findmax(n-2), findmax(n-3) + arr[n-1]) + arr[n], findmax(n-1));
        }
        return dp[n];
    }
}
