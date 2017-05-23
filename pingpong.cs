using System;

public class PingPong
{
  public static void Main()
  {
    Console.WriteLine("Let's play PingPong! Give us a number: ");

    int yourNumber = int.Parse(Console.ReadLine());
    for (int index = 0; index <= yourNumber; index ++)
      {
        if (index % 15 == 0 || index % 5 == 0 && index % 3 == 0) {
        Console.WriteLine("PingPong");
        }
        else if (index % 5 == 0) {
        Console.WriteLine("Pong");
        }
        else if (index % 3 == 0) {
          Console.WriteLine("Ping");
        }
        else {
        Console.WriteLine(index);
        }
      }
  }
}
