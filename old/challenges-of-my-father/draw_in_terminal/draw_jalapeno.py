def run():
    print(draw_rhombus(8, "*"))


def draw_rhombus(value, symbol):
    lines = []
    for i in range(1, value+1):
        line = ""
        for _ in range(0, i):
            line = line + symbol
        lines.append(formater(line, value))

    for line in lines:
        print(line)

    for line in lines[::-1]:
        print(line)


def formater(line, value):
    val = round((value - len(line))/2)
    for _ in range(0, val):
        line = " " + line
    return line


if __name__ == '__main__':
    run()
