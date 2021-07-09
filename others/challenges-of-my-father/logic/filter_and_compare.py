class ShoppingCar:
    def __init__(self, _product, _price, _count):
        self.product = _product
        self.price = _price
        self.count = _count


class Sales:
    def __init__(self, _product, _count, _percent):
        self.product = _product
        self.percent = _percent
        self.count = _count


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
    val = compare(row.product)
    total = row.count * row.price
    print("Sin Descuento: ", total)
    for item in val:
        if row.count >= item.count:
            previus_val = row.count * row.price
            total = previus_val - (previus_val * item.percent / 100)
    return total


def calculate(array_shoppingcar):
    for item in array_shoppingcar:
        total = check_disscount(item)
        print(total)


if __name__ == "__main__":
    SHOPPING_CAR = [
        ShoppingCar("leche", 3, 9),
        ShoppingCar("atun", 5.5, 5),
        ShoppingCar("arroz", 3.5, 3),
        ShoppingCar("yogurt", 6, 12),
    ]

    calculate(SHOPPING_CAR)
