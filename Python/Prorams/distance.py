import math

x1 = int(input('ENTER VALUE OF X1 = '))
x2 = int(input('ENTER VALUE OF X2 = '))
y1 = int(input('ENTER VALUE OF Y1 = '))
y2 = int(input('ENTER VALUE OF Y2 = '))
x = (x2-x1)**2
y = (y2-y1)**2
distance = math.sqrt(x+y)
print('distance between co-ordinate = ',distance)