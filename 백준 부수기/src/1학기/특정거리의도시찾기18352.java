import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class 특정거리의도시찾기18352 {
  static int N, M, K, X;
  static ArrayList<Integer>[] adjList;

  public static void bfs(int start) {
    int[] distance = new int[N + 1];
    boolean[] visited = new boolean[N + 1];
    Queue<Integer> queue = new LinkedList<>();

    queue.offer(start);
    visited[start] = true;
    distance[start] = 0;

    while (!queue.isEmpty()) {
      int current = queue.poll();

      for (int next : adjList[current]) {
        if (!visited[next]) {
          visited[next] = true;
          distance[next] = distance[current] + 1;
          queue.offer(next);
        }
      }
    }

    ArrayList<Integer> answer = new ArrayList<>();
    for (int i = 1; i <= N; i++) {
      if (distance[i] == K) {
        answer.add(i);
      }
    }

    if (answer.isEmpty()) {
      System.out.println(-1);
    } else {
      for (int city : answer) {
        System.out.println(city);
      }
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // 도시의 개수(정점) N, 도로의 개수(간선) M, 거리 정보 K, 출발 도시의 번호 X
    StringTokenizer st = new StringTokenizer(br.readLine(), " ");
    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());
    K = Integer.parseInt(st.nextToken());
    X = Integer.parseInt(st.nextToken());

    adjList = new ArrayList[N + 1];
    for (int i = 0; i <= N; i++) {
      adjList[i] = new ArrayList<>();
    }

    for (int i = 0; i < M; i++) {
      st = new StringTokenizer(br.readLine(), " ");
      int v1 = Integer.parseInt(st.nextToken());
      int v2 = Integer.parseInt(st.nextToken());
      adjList[v1].add(v2);
    }
    bfs(X);
  }
}