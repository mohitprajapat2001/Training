num1 = int(input("num 1:"))
num2 = int(input("num 2:"))
num3 = int(input("num 3:"))
num4 = int(input("num 4:"))
print("AllNumber",num1,num2,num3,num4)
if(num1 > num2 and num1 > num4) :
    print("User 1's number  is greater")  
elif(num2 > num3) :
    print("User 2's number  is greater")
elif(num3 > num4) :
    print("User 3's number  is greater")
elif(num4 > num2) :
    print("User 4's number  is greater")
else :
    print("done")