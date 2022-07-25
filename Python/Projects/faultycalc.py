# Program For Faulty Calculator
task = input('Enter The Task To Perform /*+-  : ')
var1 = int(input('enter the variable 1 :'))
var2 = int(input('enter the variable 2 :'))
div = var1/var2
mul = var1*var2
add = var1+var2
sub = var1-var2
# 2*9=46,2+5=23,56-35=52,2+2=9,2*2=5,2-2=552,2+1=5,1+2=577
if task == '/':
    print('result: ',div)
elif task == '*':
    print('result: ',mul)
elif task == '+':
     print('result: ',add)
elif task == '-':
     print('result: ',sub)
else:
    print('are u sure !;-(')