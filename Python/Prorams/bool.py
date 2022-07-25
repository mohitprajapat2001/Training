try:
    h = input('Help /h : ')
    if h == "/h":
        print('0000 for sum\n0001for Subtract\n0010 for mulitply\n0011 for division : ')
except Exception as e:
    print(e)
help = input()
num1=int(input('Enter the number 1 : '))
num2=int(input('Enter the Number 2 : '))
if help == "0000":
    print('SUM',num1+num2)
elif help == "0001":
    print('Subtract', num1 + num2)
elif help == "0010":
    print('Multiply', num1 + num2)
elif help == "0011":
    print('DIV', num1 + num2)
else:
    print('Incorrect:-(')