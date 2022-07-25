spam = ["make a lot of money",
        "buy now",
        "subscribe this",
        "click this"]
user = input(" the comment :")
if user == spam[0]:
    print("spam comment")
elif user == spam[1]:
    print("spam comment")
elif user == spam[2]:
    print("spam comment")
elif user == spam[3]:
    print("spam comment")
else:
    print("your comment",user)