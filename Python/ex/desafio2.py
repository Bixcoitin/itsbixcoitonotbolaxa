"""
Do a program that ask for the user to input one int number and
says if this number is even or odd. If the user does not type an int
number, inform that is not a one.
"""

n = input('Type a number: ')

try:
    n = int(n)
    nEO = n % 2

    if nEO != 0:
        print('The number is odd')
    else:
        print('The number is even')
except:
    print('It needs to be a number')

"""
Do a program that asks the hour to the user and, based on that,
shows a proper greetings. Ex:
Good day: 0-11, Good Afternoon: 12-17 and Good Night: 18-23
"""
h = int(input('What\'s the time? '))

if h == 0 and h <= 11:
    print('Good day\'o!')
elif 12 <= h <= 17:
    print('Good Afternoon!')
else:
    print('Good night!')

"""
Do a program that asks for the first name of the user. If the name
has 4 letters or less writes "Your name is short as f"; If it has
between 5 and 6 letters, writes "Your name is normal"; higher than
6 then writes "Wow, that's big (That's what she said)
"""
name = input('What\'s your name? ')

if len(name) <= 4:
    print('Your name is short as fuck')
elif len(name) <= 6:
    print('Your name is normal, normie')
else:
    print('Wow! That\'s big (That\'s what she said) ')
