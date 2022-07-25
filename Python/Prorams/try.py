num1 = input('ener number ; ')
num2 = input('ener number ; ')
try:
    print('sum: ',int(num1)+int(num2))
except Exception as e:
    print(e)
print('this line is after try')