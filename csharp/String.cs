namespace Strings
{
    class Hello
    {
        static void Main(string[] args)
        {
            string myName = "Eliaz";
            string nickname = "Zero";
            string myLastNames = "Bobadilla Camarena".ToUpper();
            string myFullName = $"{nickname} Sebastian {myLastNames}".Replace(nickname, myName);

            // Common Tradition to put the last names Uppercased
            System.Console.WriteLine($"My name is {myFullName}.");
            System.Console.WriteLine($"My nickname is {nickname} Requiem.");
        }
    }
}
