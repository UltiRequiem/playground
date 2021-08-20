namespace StrigContains
{
    class Run
    {
        static void Main(string[] args)
        {
            string songLyrics = "You say goodbye, and I say hello";

            string strToSearch = "goodbye";

            if (songLyrics.Contains(strToSearch))
            {
                System.Console.WriteLine($"The Lyrics of the song contains '{strToSearch}'.");
            }

            string secondStrToSearch = "greetings";
            System.Console.WriteLine($"Is {songLyrics.Contains(secondStrToSearch)} that the Lyrics of the song contains '{secondStrToSearch}'.");
        }

    }
}
