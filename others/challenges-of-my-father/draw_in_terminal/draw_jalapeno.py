def run():
    draw_rhombus(8, "*")


def draw_rhombus(value: int, symbol: str):
    lines = []

    for i in range(value + 1):
        line = ""
        for _ in range(i):
            line = line + symbol
        lines.append(formater(line, value))

    for line in lines:
        print(line)

    for line in lines[::-1]:
        print(line)


def formater(line: str, value: int):
    for _ in range(round((value - len(line)) / 2)):
        line = " " + line
    return line


if __name__ == "__main__":
    run()
