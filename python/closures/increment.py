def increment_by(num):
    def increment(n):
        return n + num

    return increment


INCREMENT_BY_10 = increment_by(10)

ONE_HUNDRED = INCREMENT_BY_10(90)

if __name__ == "__main__":
    print(ONE_HUNDRED)
