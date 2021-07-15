class ShoppingCar:
    def __init__(self, product, price, count):
        self.product = product
        self.price = price
        self.count = count


class Sales:
    def __init__(self, product, count, percent):
        self.product = product
        self.percent = percent
        self.count = count


SALES = [
    Sales("leche", 3, 1),
    Sales("leche", 5, 2),
    Sales("atun", 5, 3),
    Sales("arroz", 10, 5),
    Sales("yogurt", 10, 5),
]


def compare(product):
    return [item for item in SALES if product == item.product]


def check_disscount(row):
    total = row.count * row.price
    print("Sin Descuento: ", total)
    for item in compare(row.product):
        if row.count >= item.count:
            previus_val = row.count * row.price
            total = previus_val - (previus_val * item.percent / 100)
    return total


def calculate(array_shoppingcar):
    for item in array_shoppingcar:
        print(check_disscount(item))


if __name__ == "__main__":
    SHOPPING_CAR = [
        ShoppingCar("leche", 3, 9),
        ShoppingCar("atun", 5.5, 5),
        ShoppingCar("arroz", 3.5, 3),
        ShoppingCar("yogurt", 6, 12),
    ]

    calculate(SHOPPING_CAR)
