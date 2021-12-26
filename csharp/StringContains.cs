namespace StrigContains
{
    class Run
    {
        static void Main(string[] args)
        {
            string songLyrics = "You said goodbye, and I say hello", strToSearch = "goodbye", secondStrToSearch = "greetings";
            if (songLyrics.Contains(strToSearch)) System.Console.WriteLine($"The Lyrics of the song contains '{strToSearch}'.");
            System.Console.WriteLine($"Is {songLyrics.Contains(secondStrToSearch)} that the Lyrics of the song contains '{secondStrToSearch}'.");
        }

    }
}
