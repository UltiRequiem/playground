namespace Numbers
{
    class Run
    {
        static void Main(string[] args)
        {
            var (a, b) = (60, 18);

            // Some mathematic operaions
            System.Console.WriteLine($"The sum of {a} and {b} is {a + b}.");
            System.Console.WriteLine($"The division of {a} and {b} is {a / b}.");
            System.Console.WriteLine($"The multiplication of {a} and {b} is {a * b}.");
            System.Console.WriteLine($"The subtraction of {a} and {b} is {a - b}.");
        }
    }
}
