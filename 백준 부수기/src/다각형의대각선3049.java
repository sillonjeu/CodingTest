import java.io.BufferedReader;
import java.io.InputStreamReader;

public class 다각형의대각선3049 {
    public static int dp_cal[];
    public static int dp_result[];
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        System.out.println((N * (N -1) * (N-2) * (N-3)) / 24); 

        // int N = Integer.parseInt(br.readLine());
        // dp_cal = new int [N+1];
        // dp_cal[0] = 1;
        // dp_cal[1] = 4;
        
        // finddp(N);

        // dp_result = new int [N+1];
        // dp_result[0] = 0;
        // dp_result[1] = 1;

        // System.out.println(findresult(N-3));
    }

    // public static void finddp(int N) {
    //     for(int i = 2; i < N+1; i++) {
    //         dp_cal[i] = dp_cal[i-1] + i * 3;
    //     }
    // }

    // public static int findresult(int N) {
    //     for(int i = 2; i < N+1; i++) {
    //         dp_result[i] = dp_result[i-1] + dp_cal[i-1];
    //     }
    //     return dp_result[N];
    // }
}
