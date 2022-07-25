n = int(input('enter the factorial Num : '))
temp = 1
for i in range(1, n+1):
    # print(type(i))
    temp = temp * i
print('Factorial: ',temp)