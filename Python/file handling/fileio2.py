f = open('mohit.txt')
print(f.tell())
print(f.readline())
print(f.tell())
print(f.readline())
f.seek(5)
print(f.readline())
