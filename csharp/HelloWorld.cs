namespace HelloWorld
{
    class Hello
    {
        static void Main(string[] args)
        {
            string message = "Hello World";
            string myNick = "Zero";
            System.Console.WriteLine($"{message}, {myNick}!".Replace(myNick, "Eliaz"));
        }
    }
}
