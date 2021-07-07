def make_multiplier_of(n: int):
    def multiplier(x: int) -> int:
        return x * n

    # multiplier = lambda x: x * n

    return multiplier


THREE_TIMES = make_multiplier_of(3)

FIVE_TIMES = make_multiplier_of(5)

if __name__ == "__main__":
    print(THREE_TIMES(9))
    print(FIVE_TIMES(3))
    print(FIVE_TIMES(THREE_TIMES(2)))
