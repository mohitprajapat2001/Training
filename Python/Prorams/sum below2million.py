# program to find sum of all prime number below 2 million.
from math import sqrt
print('lets begin')
def add(a,b):
    return a+b
def isPrime(n):
        if (n <= 1):
            return 0
        for i in range(2, int(sqrt(n)) + 1):
            if (n % i == 0):
                return 0
        return 1
for i in range(4,2000000):
    if isPrime(i)==1:
        sum = add(5,i)
print('Sum of prime below 2 million',sum)