namespace Strings
{
    class Hello
    {
        static void Main(string[] args)
        {
            var (myName, nickname, myLastNames) = ("Eliaz", "Zero", "Bobadilla Camarena".ToUpper());
            var myFullName = $"{nickname} Sebastian {myLastNames}".Replace(nickname, myName);

            // Common Tradition to put the last names Uppercased
            System.Console.WriteLine($"My name is {myFullName}.");
            System.Console.WriteLine($"My nickname is {nickname} Requiem.");
        }
    }
}
