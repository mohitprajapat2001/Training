# Pattern Print star pattern
pattern = int(input('Enter the pattern Size : '))
boolean = input('Enter True for Upside down otherwise  false : ')
if boolean == "true":
    for i in range(1, pattern + 1):
        print('*' * i)
elif boolean == "false":
    for i in range(1, pattern + 1):
        i = pattern
        print('*' * i)
        pattern = pattern - 1
else:
    print('Error')
