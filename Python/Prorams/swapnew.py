a = 1
b = 2
temp = a
a = b
b = temp
print("temp",a,b)

a = 3
b = 4
a = a+b
b = a-b
a = a-b
print("arithmetic",a,b)
print("power",a**b)
a = 5
b = 6
a = a^b
b = a^b
a = a^b
print("explonential",a,b)

a = 7
b = 8
a,b = b,a
print("oneline",a,b)