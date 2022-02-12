namespace Strings
{
    class Hello
    {
        static void Main(string[] args)
        {
            string text = System.IO.File.ReadAllText("csharp/String.cs");

            System.Console.WriteLine("Contents of WriteText.txt = {0}", text);
        }
    }
}
