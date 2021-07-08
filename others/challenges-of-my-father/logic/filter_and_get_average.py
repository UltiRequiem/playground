from functools import reduce


class Student:
    def __init__(self, _name, _course, _grade):
        self.name = _name
        self.course = _course
        self.grade = _grade


STUDENTS = [
    Student("Sebas", "c#", 11),
    Student("Tilsa", "python", 15),
    Student("Sebas", "javascript", 16),
    Student("Tilsa", "go", 13),
    Student("Sebas", "Ruby", 12),
    Student("Miriam", "java", 17),
    Student("Miriam", "c++", 14),
    Student("Elias", "javascript", 19),
    Student("Tilsa", "javascript", 3),
]


def remove_duplicate_names(lst):
    return [item.name for item in lst]


def separate(name, lst):
    return [item for item in lst if item.name == name]


def get_average(lst):
    grades = 0
    for item in lst:
        grades += item.grade
    return grades / len(lst)


def calculate():
    for name in remove_duplicate_names(STUDENTS):
        print(f"El promedio de {name} es {get_average(separate(name,STUDENTS))}")


if __name__ == "__main__":
    calculate()
