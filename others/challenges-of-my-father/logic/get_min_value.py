import numpy as np

def run():
    numbers = [70,2, 5 ,4,3,5,9,0,-9999999999,9999999,9877]
    print(get_min_number_numpy(numbers))

def get_min_number(numbers):
    value = 0
    for index, number in enumerate(numbers):
        if index == 0:
            value = number
        else:
            value = number if number < value else value
    return value

def get_min_number_numpy(numbers):
    sorted_numbers = np.sort(numbers)
    return sorted_numbers[0]
    

if __name__ == '__main__':
    run()
