package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) > 1 {
		fmt.Printf(" You passed: %s\n", os.Args[1])
		os.Exit(0)
	}

	fmt.Println(" You don't passed any argument!")
}
