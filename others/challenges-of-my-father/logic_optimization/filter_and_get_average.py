from functools import reduce


class All:
    def __init__(self, name, course, grade):
        self.name = name
        self.course = course
        self.grade = grade


STUDENTS = [
    All("Sebas", "c#", 11),
    All("Tilsa", "python", 15),
    All("Sebas", "javascript", 16),
    All("Tilsa", "go", 13),
    All("Sebas", "Ruby", 12),
    All("Miriam", "java", 17),
    All("Miriam", "c++", 14),
    All("Elias", "javascript", 19),
    All("Tilsa", "javascript", 3),
]


def calculate():
    names = []
    _ = list(
        filter(
            lambda x: names.append(x.name) is None if x.name not in names else False,
            STUDENTS,
        )
    )

    for name in names:
        items = list(filter(lambda item: name == item.name, STUDENTS))
        average = reduce(lambda x, y: x + y, map(lambda x: x.grade, items)) / len(items)
        print(f"El promedio de {name} es {average}")


if __name__ == "__main__":
    calculate()
