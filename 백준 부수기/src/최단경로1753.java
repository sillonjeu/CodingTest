import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class 최단경로1753 {
  public static final int INF = Integer.MAX_VALUE; // 무한 설정
  public static int V, E, K; // 노드 개수, 간선 개수, 시작 노드 번호
  public static ArrayList<ArrayList<Node>> graph;
  public static int[] d;

  public static void dijkstra(int start) {
    PriorityQueue<Node> pq = new PriorityQueue<>(V, Comparator.comparingInt(Node::getDistance));
    pq.offer(new Node(start, 0));
    d[start] = 0;

    while (!pq.isEmpty()) { // 큐가 안 비어있으면
      Node node = pq.poll(); // 최단 거리가 짧은 노드에 대한 정보 꺼내기
      int dist = node.getDistance(); // 이때까지 비용
      int now = node.getIndex(); // 현재 노드

      if (d[now] < dist)
        continue; // 이미 처리된 노드면 무시
      for (int i = 0; i < graph.get(now).size(); i++) {
        Node otherNode = graph.get(now).get(i);
        int cost = d[now] + otherNode.getDistance();
        if (cost < d[otherNode.getIndex()]) {
          d[otherNode.getIndex()] = cost;
          pq.offer(new Node(otherNode.getIndex(), cost));
        }
      }
    }
  }

  static class Node implements Comparable<Node> {
    private int index;
    private int distance;

    Node(int index, int distance) {
      this.index = index;
      this.distance = distance;
    }

    public int getDistance() {
      return distance;
    }

    public int getIndex() {
      return index;
    }

    public int compareTo(Node o) {
      return o.distance - this.distance;
    }
  }

  public static void main(String[] args) throws NumberFormatException, IOException {

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    StringTokenizer st = new StringTokenizer(br.readLine(), " ");
    V = Integer.parseInt(st.nextToken());
    E = Integer.parseInt(st.nextToken());
    K = Integer.parseInt(br.readLine());

    // 그래프 초기화
    graph = new ArrayList<>(V + 1);
    for (int i = 0; i <= V; i++) {
      graph.add(new ArrayList<>());
    }

    // 간선들 정보 입력
    for (int i = 0; i < E; i++) {
      StringTokenizer st1 = new StringTokenizer(br.readLine(), " ");
      int u = Integer.parseInt(st1.nextToken());
      int v = Integer.parseInt(st1.nextToken());
      int w = Integer.parseInt(st1.nextToken());
      graph.get(u).add(new Node(v, w));
    }

    d = new int[V + 1];
    Arrays.fill(d, INF);

    // 다익스트라 알고리즘 실행
    dijkstra(K);

    // 결과 출력
    try (BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out))) {
      for (int i = 1; i <= V; i++) {
        if (d[i] == INF)
          bw.write("INF\n");
        else
          bw.write(d[i] + "\n");
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}