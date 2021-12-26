namespace HelloWorld
{
    class Hello
    {
        static void Main(string[] args)
        {
            var message = "Hello World";
            var myNick = "Zero";
            System.Console.WriteLine($"{message}, {myNick}!".Replace(myNick, "Eliaz"));
        }
    }
}
