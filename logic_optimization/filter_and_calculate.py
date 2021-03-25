from functools import reduce

class Traveler():
    def __init__(self,_name, _place,_count):
        self.name = _name
        self.place = _place
        self.count = _count

lista = [Traveler("Elias","Lachay",3),
              Traveler("Sebas","Lachay",3),
              Traveler("Myriam","Lachay",2),
              Traveler("Myriam","Albuferas",1),
              Traveler("Myriam","Chiclayo",1),
              Traveler("Tilsa","Lachay",1),
              Traveler("Sebas","Kawai",2),
              Traveler("Sebas","Albuferas",2)
              ]

def remove_duplicate_places():
    seen = []
    return list(filter(lambda x: seen.append(x.place) is None if x.place not in seen else False, lista))

def get_total_visits_place_two(place):
    return list(filter(lambda item: item.place == place, lista))

build_total = lambda x, y: x + y.count
 

def get_toal_visits(place_list):
    total = reduce(build_total, place_list)
    props = ""
    for item in place_list:
      #  total += item.count
        if props == "":
            props = item.name
        else:
            props = props+", "+item.name

    return total, props


def run():
    places = remove_duplicate_places()
    for place in places:
        var = get_total_visits_place_two(place.place)
        var_2,var_3 = get_toal_visits(var)
        print(var_3,"han ido a",place.place, var_2,"veces.")

if __name__ == '__main__':
    run()
