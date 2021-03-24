def run():
    val = int(input('Enter a number: '))
    print(draw_square(10))


def draw_square(number):
    for i in list(range(number)):
        if i == 0 or i == number-1:
            print("* "*number)
        else:
            print("*", spaces(number), "*")


def spaces(number):
    return " "*(number * 2 - 5)


if __name__ == "__main__":
    run()
