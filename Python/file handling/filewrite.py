# f = open("mohitnew.txt","w")
# a = f.write("hello bhai kaisa Hai!\n")
# print(a)
# f.close()
# f = open("mohitappend.txt","w")
# a = f.write("hello bhai kaisa Hai!\n")
# print(a)
# f.close()
f = open("mohitadvance.txt","r+")
print(f.read())
temp = "\n"+'hello'
f.write(temp)