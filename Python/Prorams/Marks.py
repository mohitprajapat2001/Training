print("max marks is 100")
math = int(input("enter maths"))
phy = int(input("enter physics"))
chem = int(input("entrr chem"))
if math<101 and phy<101 and chem<101 and math>-1 and phy>-1 and chem>-1:
    total = math+phy+chem
    percent = (300*100)/total
    if percent > 33:
        print("pass")
        print(percent)
else:
    print("invalid input marks between 0 to 100")