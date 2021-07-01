def run():
    val = int(input('Enter: '))
    print(get_odds_numbers(val))

def get_odds_numbers(maxium):
    for number in range(1, maxium + 1):
        if number % 2 != 0:
            print(number)

if __name__ == '__main__':
    run()
