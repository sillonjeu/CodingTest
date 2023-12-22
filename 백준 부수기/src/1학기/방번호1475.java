import java.io.*;
import java.util.*;

public class 방번호1475 {
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String N = br.readLine();
    br.close();
    char[] digits = N.toCharArray(); 
    double[] array = new double[10]; 

    for (int i = 0; i < digits.length; i++) {
        array[Character.getNumericValue(digits[i])]++;
    }

    double max = 0;
    double find69 = Math.ceil((array[6] + array[9]) / 2);
    for(int i = 0; i < array.length; i++) {
        if(i == 6 || i == 9) {continue;}
        if(max < array[i]) {max = array[i];}
    }
    if(max < find69) {max = find69;}
    
    System.out.println((int)max);
  }
}
