n = int(input('enter the length for fibonacci series : '))
# if n == 0:
#     print('Error')
# elif n == 1:
#     print('Fibonacci Series : 0')
# elif n == 2:
#     print('Fibonacci Series : 0 1')
# else:
temp = 0
series = [0,1]
for i in range(1,n):
    temp = series[i-1]+series[i]
    series.append(temp)
print(series)
