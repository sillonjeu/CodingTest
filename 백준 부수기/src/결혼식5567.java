import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class 결혼식5567 {
	static int n, answer = 0;
	static boolean check[];

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		n = Integer.parseInt(in.readLine());
		int m = Integer.parseInt(in.readLine());
		List<Integer> list[] = new ArrayList[n + 1];
		for (int i = 1; i < list.length; i++) {
			list[i] = new ArrayList<>();
		}
		for (int i = 0; i < m; i++) {
			StringTokenizer st = new StringTokenizer(in.readLine());
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			list[a].add(b);
			list[b].add(a);
		}
		check = new boolean[n + 1];
		check[1] = true;
		dfs(1, list, 0);
		for (int i = 2; i < check.length; i++) {
			if(check[i]) answer++;
		}
		System.out.println(answer);
	}

	private static void dfs(int num, List<Integer>[] list, int depth) {
		if (depth == 2) {
			return;
		}
		for (int i = 0; i < list[num].size(); i++) {
			int next = list[num].get(i);
			check[next] = true;
			dfs(next, list, depth + 1);
		}
	}
}