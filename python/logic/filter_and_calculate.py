class Traveler():
    def __init__(self,_name, _place,_count):
        self.name = _name
        self.place = _place
        self.count = _count

list = [Traveler("Elias","Lachay",3),
              Traveler("Sebas","Lachay",3),
              Traveler("Myriam","Lachay",2),
              Traveler("Myriam","Albuferas",1),
              Traveler("Myriam","Chiclayo",1),
              Traveler("Tilsa","Lachay",1),
              Traveler("Sebas","Kawai",2),
              Traveler("Sebas","Albuferas",2)
              ]

def remove_duplicate_places():
    setOfElems = []
    for elem in list:
        if elem.place in setOfElems:
            continue
        else:
            setOfElems.append(elem.place)         
    return setOfElems

def get_total_visits_place(place):
    items = []

    for item in list:
        if item.place == place:
            items.append(item)
    
    return items

def get_toal_visits(place_list):
    total = 0
    props = ""
    for item in place_list:
        total += item.count
        if props == "":
            props = item.name
        else:
            props = props+", "+item.name

    return total, props


def run():
    places = remove_duplicate_places()
    for place in places:
        var = get_total_visits_place(place)
        var_2,var_3 = get_toal_visits(var)
        print(var_3,"han ido a",place, var_2,"veces.")

if __name__ == '__main__':
    run()