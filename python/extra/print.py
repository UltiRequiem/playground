# Initial Though
print(*(i for i in range(1, 101)))

# Better Approach
print(*range(1, 101))

# Normal
def print_100():
    for i in range(1, 100):
        print(i)

# for i in range(10): print(i)
