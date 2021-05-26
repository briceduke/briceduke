---
title: 'Python, ASAP 🐍'
date: '2021-04-18'
pageTitle: 'Python, ASAP 🐍'
imgName: 'python-asap.png'
desc: 'This specific article will be targeted towards complete beginners, as I will be going over basic programming concepts; more advanced programmers are certainly welcome to peruse, though!'
---

Hello there! I've been a tech blog reader for a long time, but just recently I decided to start posting. I want to share what I know with everyone, and even if I'm able to help one person, that'd be amazing.

I've decided to start writing bite-sized articles that will provide you a crash course on the concept. I thought that if I start with the easier languages and concepts and move to more advanced ones, beginners could follow along with me!

This specific article will be targeted towards complete beginners, as I will be going over basic programming concepts; more advanced programmers are certainly welcome to peruse, though!

### So without further ado, I give you Python, as Soon as Possible!

Let's start by clearing something up:

#### Programming is just a set of rules!

All you're doing is telling a computer to do something, don't overthink it! You give it data and tell it what to do in what circumstances and it obediently does the work. That's all. It may be slightly different in different languages, but the concepts are the same. Alright, now that's off my chest, so here we go:

### Let's look at operators

The math things!

operators are "special symbols in Python that carry out arithmetic or logical computation."

Here is a list of operators:

- `+`, `-`, `*`, and `/` are self-explanatory
- `//` divides and rounds down (e.g. `7 // 4` will return `1`)
- `%` is the modulo operation, which is the remainder of a division (e.g. `7 % 4` will return `3`)
- `**` represents exponents (e.g. `7**2` will return `49`)
- `==` will compare two things and return `True` if they're equivalent (e.g. `7 == 4` returns `False`)
- `!=` will compare two things and return `True` if they're not equivalent (e.g. `7 != 4` returns `True`)
- `>` and `<` compare two things to see if they're greater or less than (`7 > 4` returns `True`, and `7 < 4` returns `False`)
- `>=` and `<=` are greater/less than OR equal to (`7 >= 7` is `True`, `4 <= 7` is also `True`)

These also follow "order of operations" (think PEMDAS, students), so do be careful. In order to prioritize a certain part of your math operation, you can surround that part in parenthesis (e.g. `(1 + 2) * 3` will add the two numbers first and then multiply the sum)

Alright, enough math (for now 😉).

### Variables and data types

If we want to store something for later, we can assign it to a variable. Let's look at an example:

```py
name = "Snek"
```

We just made a variable called `name` and gave it a value of Snek (by the way, words and letters are represented as **strings** and can be in **double quotes or single quotes**). We can now access `name` later in our code.

A benefit of this is that if we need to access `name` multiple times, we'll only need to change its value (Snek) once 😎

The best part is, variables don't even only have to be strings, they can be numbers, **floats** (these are just decimals like 3.14), **booleans** (these are just `True` or `False`, be sure to capitalize these!), or **lists**.

What's a list, you say? Well, it's in the name. Lists are a way of storing multiple values. Let's say we need to store our favorite drinks:

```py
favorite_drinks = ["coffee", "more coffee", "wHoLe MiLk"]
```

Just add brackets and separate by a comma!

If we want to look at items in a list, we can do so by accessing its **index**. We'll use the `favorite_drinks` example to illustrate this. Let's display "more coffee" from the list.

```py
favorite_drinks = ["coffee", "more coffee", "wHoLe MiLk"]

print(favorite_drinks[1])
```

"Woah, Brice! You told it to access 1, but it got the second item on the list! What's up with that?" Yeah, programmers decided to break all known laws of sanity and **made counting start at zero**. The 0th position in `favorite_drinks` would be "coffee"!

We also saw a new thing called `print` in that example. `print` will take everything in its parenthesis (they can be variables like `name`, data types, and more stuff we'll learn later) and display it for us!

_One thing to note:_ variable names in Python can only start with a letter or underscore, and typically multi-word names are separated by an underscore (e.g. `awesome_name`)

Easy enough, right?

### Conditionals

If we only want something to happen in certain circumstances, we can use **conditionals**.

Let's say we want to print "caffeine addict" ONLY IF the first element in the list is "coffee":

```py
favorite_drinks = ["coffee", "more coffee", "wHoLe MiLk"]

if favorite_drinks[0] == "coffee":
   print("caffeine addict")
```

This would of course print caffeine addict because the first element (remember, it's in the 0th position) is in fact coffee!

Let's look at an example and see if you can figure out what's going on:

```py
favorite_drinks = ["coffee", "more coffee", "wHoLe MiLk"]

if favorite_drinks[0] == "more coffee":
   print("caffeine addict")
elif favorite_drinks[0] == "coffee":
   print("slight caffeine addict")
else:
   print("not a caffeine addict")
```

Here it is in English: if the first element of favorite_drinks is more coffee, print "caffeine addict". Elsewise, if (**elif**) the 0th element is coffee, print "slight caffeine addict". Elsewise (**else**) print "not a caffeine addict".

Cool! 👍

### Looping

There are a few ways we can loop through things like lists.

**For Loops** will loop through a specific amount that we define at the beginning of the loop. Let's look at two examples:

```py
favorite_drinks = ["coffee", "more coffee", "wHoLe MiLk"]

for drink in favorite_drinks:
   print(drink)
```

_Here, we will have access to each `drink` in our list (we called it a `drink` in the for loop) and we will print each drink._

We define the name of each element at the beginning of the for loop. This is perfectly valid:

```py
for i in favorite_drink:
   print(i)
```

_This will still print each element in the list, even though the element is technically called `i` (short for index)... You can name this whatever you want!_

For loops can also be ranges. Let's say we wanted to print "wassup" 5 times:

```py
for i in range(5):
   print("wassup")
```

Easy peasy, we just supply a range (5 is the range in this case) and it loops through the code 5 times! 😮

Let's look at **While Loops**! These will run while a condition is met, for example:

```py
while 1 == 1:
   print("Math is not broken")
```

This will print "Math is not broken" infinitely. Watch out though, even if math isn't broken, that infinite loop could break your computer... 💔

### Whew, that's a lot! Keep this fireplace on your screen while you get a snack or stretch.

![cozy af fireplace](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/agc84n2jn8by9rzvtmwb.gif)

Alrighty, back to the fun!

### Exceptions

If we want to handle any errors that occur, we can use an exception. It's pretty easy, have a look:

```py
favorite_numbers = [12, 9, 7, 21]

try:
   print(favorite_numbers[4])
except IndexError:
   print("Item is not in the list!")
```

See what I did there? All I did was tell it to try and find the 5th element in the `favorite_numbers` array (which obviously doesn't exist 😋). I then told it to catch any index errors via an exception, and tell the user that the item isn't in the list! Wow!

Okay, all of this stuff is nice, but how can I reuse it?

Well, dear reader, I give you **functions**.

### Functions

What do they do? They represent a function (amazing right?). Let's take a look:

```py
def print_a_word():
   print("a word")

print_a_word()
```

We start off by **defining** the function (_def_), then we give it a name (like variables, function names can start with letters and underscores and typically use underscores to separate words). The parenthesis at the end will come in handy later. 🕑
Then we tell the function what to do (in this case we tell it to print "a word")
Finally, we "call" the function (we had defined it but now we're putting it to use) by writing the function name and the parenthesis after it.

Cool, but what if we want to pass in different things, similar to variables? Answer: **parameters**.
Allow me to shed some light 💡 on the subject:

```py
def print_a_word(word):
   print(word)

print_a_word("Borborygm")
```

Here, we're passing a parameter called `word` into the function definition. This will allow us to use whatever the user passes in later throughout the function. When we go to call the function, we pass in "Borborygm" as the word, thus making the function print Borborygm. I could do this too:

```py
def print_a_word(word):
   print(word)

print_a_word("Borborygm")
print_a_word(3.14)
```

This would print Borborygm, then 3.14 on the line below it, since we changed the parameter and called the function again!

_`In case you were wondering, Borborygm is a much better word (imo) for "stomach growling"`_

#### Guess what? You've learned the absolute basics of Python (and programming for that matter) as soon as possible!!! 🎉

Before you go, I have a few things to say:

1. Thank you for reading this, it really makes my day! I really would love to hear your feedback, positive or negative!
2. I'll be pushing more programming language tutorials like this one, but stepping up to more challenging languages. I'll also be adding onto current languages by making more advanced tutorials (Python Pt. 2?)
3. Practice Practice Practice! Good programmers practice until they get it right, but _great_ programmers practice until they can't get it wrong! I'll list some practice resources below 😊
4. This is just a _basic_ introduction to Python and programming. We aren't even scratching the surface, but if this made you have even an inkling of interest in programming, I highly recommend you go further into Python. I'll be adding more Python tutorials soon though 😁

#### Practice Resources:

- [Programiz](https://www.programiz.com/python-programming/online-compiler/), a website where you can practice writing Python (they have a dark mode which is sick)
- [Python Tutorial for Beginners](https://www.youtube.com/watch?v=kqtD5dpn9C8), a 1 hour long Python crash course on YouTube where you'll learn more about the language
- [Edabit](https://edabit.com/challenges/python3), a cool platform where you can practice Python by doing nifty challenges

Hope y'all enjoyed it; catch you later! 👋
