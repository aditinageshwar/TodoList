import java.util.Scanner;
class test
{
   public static void main(String args[])
   {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter String to check: ");
      String str = sc.next();

      int i,j;
      for(i=0, j=str.length()-1; i<j; i++,j--)
      {
        if(str.charAt(i) != str.charAt(j))
        {
          System.out.println("String is not palindrome");
          break;   
        }
      }
      if(i==j)
      System.out.println("String is palindrome");
   } 
}