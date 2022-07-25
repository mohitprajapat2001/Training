import random
max = 10
use = 0
for i in range(1,10):
    use = use+1
    var = random.randint(1.0, 10.0)
    print('Your available guesses are :',max)
    guess = int(input('Enter the Guess Between 1 to 10 :'))
    if guess==var:
        print('weldone \nYour Guess is',guess,'is equals to random number',var)
        break
    elif guess!=var:
        print('You guessed Wrong number',guess,'Random Number is',var)
        max = max-1
    elif max == 0:
        print('You r out of Guesses Try Again')
print('It Takes',use,'Chance to win the game')