# simple way to add elements of list
# append funtion
number = []
size = int(input('enter the size of array : '))
for i in range(0,size):
    temp = int(input())
    number.append(temp)
print(number)
number2 = number.copy()
print(number2)
number2.reverse()
print(number2)
# print('\ninsertion using insert function')
# fruits = []
# size = int(input('enter the number of fruits in list : '))
# for i in range(0,size):
#     tmp = input()
#     fruits.insert(i,tmp)
# print(fruits)
#
# print('list function')
# number.sort()
# print(number)
# number.reverse()
# print(number)
# number.pop()
# print(number)