class All:
    def __init__(self, _name, _course, _grade):
        self.name = _name
        self.course = _course
        self.grade = _grade

arr_all = [All("Sebas", "c#", 11),
               All("Tilsa", "python", 15),
               All("Sebas", "javascript", 16),
               All("Tilsa", "go", 13),
               All("Sebas", "Ruby", 12),
               All("Miriam", "java", 17),
               All("Miriam", "c++", 14),
               All("Elias", "javascript", 19),
               All("Tilsa", "javascript", 3)]

def remove_duplicate_names():
    setOfElems = []
    for elem in arr_all:
        if elem.name in setOfElems:
            continue
        else:
            setOfElems.append(elem.name)         
    return setOfElems

def separate(name):
    lista = []
    final= list(filter(lambda item: lista.append(item) if name == item.name else False,arr_all))
    return final

def get_average(list):
    grades = 0
    for item in list:
        grades += item.grade
    return grades / len(list)


def calculate():
    names = remove_duplicate_names()
    for name in names:
        items = separate(name)
        print("El promedio de "+name+" es:",get_average(items))

        

if __name__ == '__main__':
    calculate()
