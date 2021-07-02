import functools


class Traveler:
    def __init__(self, _name, _place, _count):
        self.name = _name
        self.place = _place
        self.count = _count


lista = [
    Traveler("Elias", "Lachay", 3),
    Traveler("Sebas", "Lachay", 3),
    Traveler("Myriam", "Lachay", 2),
    Traveler("Myriam", "Albuferas", 1),
    Traveler("Myriam", "Chiclayo", 1),
    Traveler("Tilsa", "Lachay", 1),
    Traveler("Sebas", "Kawai", 2),
    Traveler("Sebas", "Albuferas", 2),
]


def remove_duplicate_places():
    seen = []
    return list(
        filter(
            lambda x: seen.append(x.place) is None if x.place not in seen else False,
            lista,
        )
    )


def get_total_visits_place(place):
    return list(filter(lambda item: item.place == place, lista))


def get_total(a, b):
    try:
        return a.count + b.count
    except:
        return a + b.count


def get_names(a, b):
    try:
        return a.name + ", " + b.name
    except:
        return a + ", " + b.name


def run():
    places = remove_duplicate_places()
    for place in places:
        var = get_total_visits_place(place.place)
        total = var[0].count if len(var) == 1 else functools.reduce(get_total, var)
        names = var[0].name if len(var) == 1 else functools.reduce(get_names, var)
        print(names, "han ido a", place.place, total, "veces.")


if __name__ == "__main__":
    run()
