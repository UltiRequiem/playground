def get_odds_numbers(maxium):
    return [item for item in range(maxium) if item % 2]


if __name__ == "__main__":
    print(get_odds_numbers(8))
