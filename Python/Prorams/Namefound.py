name = ["yash","mohit","parth"]
user = input("enter the name to check ")
if (user in name):
    print("yes")
else:
    print("not found")
    name.append(user)
    print(user)