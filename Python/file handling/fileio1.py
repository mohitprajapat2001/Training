file = open("mohit.txt")
# content = file.read()
# print(content)
# file.close()
# try:
#     content = file.read()
#     print(content)
# except Exception as e:
#     print(e)
h = 0
for line in file:
    h = h+1
    print(line,end="")

# print(h)
