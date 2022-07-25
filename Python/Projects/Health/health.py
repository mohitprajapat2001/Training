# Health Management System
def getdate():
    import datetime
    return datetime.datetime.now()


def datapapa():
    print('Choose Which Log to Edit : ')
    log = ['sugar', 'blood pressure']
    print(log)
    choose = input('Enter the Log Name To Edit : ')
    if choose == "sugar":
        print('sugar Data')
        f = open('papa_sugar.txt', "r+")
        temp = input('Enter The Sugar Data : ')
        data = str(getdate())+" : "+temp+"\n"
        print(data)
        print(f.read())
        f.write(data)
    elif choose == "blood pressure":
        print('Blood Pressure Data')
        f = open('papa_bp.txt', "r+")
        temp = input('Enter The Blood Pressure Data : ')
        data = str(getdate())+" : "+temp+"\n"
        print(data)
        print(f.read())
        f.write(data)
    else:
        print('Error Wrong Input:-(')

def datamom():
    print('Choose Which Log to Edit : ')
    log = ['sugar', 'blood pressure']
    print(log)
    choose = input('Enter the Log Name To Edit : ')
    if choose == "sugar":
        print('sugar Data')
        f = open('mom_sugar.txt', "r+")
        temp = input('Enter The Sugar Data : ')
        data = str(getdate())+" : "+temp+"\n"
        print(data)
        print(f.read())
        f.write(data)
    elif choose == "blood pressure":
        print('Blood Pressure Data')
        f = open('mom_bp.txt', "r+")
        temp = input('Enter The Blood Pressure Data : ')
        data = str(getdate())+" : "+temp+"\n"
        print(data)
        print(f.read())
        f.write(data)
    else:
        print('Error Wrong Input:-(')

print('Which Data To Interact :')
name = ['papa', 'mom']
print('Available Data', name, "\n")
data = input('Enter Whose Data to Choose')
# print(data)
if data == 'papa':
    # print("Papa")
    datapapa()
elif data == 'mom':
    # print("MOM")
    datamom()
else:
    print('\nMember Not Available:-(')
