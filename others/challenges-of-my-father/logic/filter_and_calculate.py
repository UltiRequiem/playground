class Traveler:
    def __init__(self, name, place, count):
        self.name = name
        self.place = place
        self.count = count


TRAVELERS = [
    Traveler("Elias", "Lachay", 3),
    Traveler("Sebas", "Lachay", 3),
    Traveler("Myriam", "Lachay", 2),
    Traveler("Myriam", "Albuferas", 1),
    Traveler("Myriam", "Chiclayo", 1),
    Traveler("Tilsa", "Lachay", 1),
    Traveler("Sebas", "Kawai", 2),
    Traveler("Sebas", "Albuferas", 2),
]


def remove_duplicate_places(lst):
    return set([elem.place for elem in lst])


def get_total_visits_place(place):
    return [traveler for traveler in TRAVELERS if traveler.place == place]


def get_toal_visits(place_list):
    total = 0
    props = ""
    for item in place_list:
        total += item.count
        if props == "":
            props = item.name
        else:
            props = props + ", " + item.name

    return total, props


def run():
    for place in remove_duplicate_places(TRAVELERS):
        total_visits = get_total_visits_place(place)
        total, name = get_toal_visits(total_visits)
        print(name, "han ido a", place, total, "veces.")


if __name__ == "__main__":
    run()
