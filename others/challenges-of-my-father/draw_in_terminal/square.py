def run():
    num = int(input("Enter a number: "))
    draw_square(num)


def draw_square(number: int) -> None:
    for i in list(range(number)):
        if i == 0 or i == number - 1:
            print("* " * number)
        else:
            print("*", spaces(number), "*")


def spaces(number: int) -> str:
    return " " * (number * 2 - 5)


if __name__ == "__main__":
    run()
