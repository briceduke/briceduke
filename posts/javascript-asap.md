---
title: 'Javascript, ASAP 🌐'
date: '2021-04-19'
pageTitle: 'Javascript, ASAP 🌐'
imgName: 'javascript-asap.png'
desc: 'Today I will be giving you a snappy rundown of Javascript. It is my favorite language, and I think that it is extremely useful; everyone should know it!'
---

👋 _Oh hello, didn't see you there!_ Today I'll be giving you a snappy rundown of Javascript. It's my favorite language, and I think that it's extremely useful; everyone should know it!

#### Why do I love it so much?

Simply put, Javascript can be used for so many different things, from game development to web development and even machine learning; we'll be focusing on Javascript that's run in the browser for now, though.

_Note: This course is intended for complete coding beginners, although more experienced coders are more than welcome to take a gander!_

#### What you'll learn

You will learn the basic fundamentals of Javascript - hopefully enough to determine whether you'd like to dig deeper into the language. Big paragraphs are boring though, so I thought it'd be fun to learn it by building mini-projects! 🏗

### Let's get started with Javascript, as Soon as Possible!

If you're on anything with a keyboard, you'll be able to follow along with the projects. Here's how to get set up:

Do ctrl + shift + J (cmd + shift + J on Mac) to open up your browser console; that'll be our workspace for this crash course! Feel free to resize the console window by dragging on the edges of it.

Let's begin with the basics:

### Operators

In your console, go ahead and try typing in your favorite number, followed by a `+`, and lastly, type `10`. Now hit enter, and voila, you added 10 to your favorite number! That's how easy math operations are in Javascript. Here's a list of the main operators:

- +, -, \*, and / are self-explanatory
- % is the modulo operation, which is the remainder of a division; type in 7 % 4 and see for yourself!
- ** represents exponents... Typing in 7**2 will return 49
- === will compare two things and return true if they're equivalent. If you type in 7 === 4, what happens?
- !== will compare two things and return True if they're not equivalent, so 7 !== 4 should be true!
- > and < compare two things to see if they're greater or less than (7 > 4 returns true, and 7 < 4 returns false)
- > = and <= are greater/less than OR equal to (7 >= 7 is true, 4 <= 7 is also true - but don't take my word for it, try it out!)
- || compares two things and returns true if one condition is met (think of it like "or")
- && compares two things and returns true if both conditions are met (think of it like "and")

Typing in (1 + 2) \* 3 will give us 9. **Operators follow the order of operations**, so Javascript would evaluate math in the parenthesis first!

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/av0y5iy6glrnt5q2bqxc.gif)

What a stud 💪, let's keep going! Clear your console by clicking the little 🚫 icon in the console window.

---

### Variables and data types

What's your favorite number? Mine is 7. Let's store our favorite number in our console so we can change it later. Type this in:

```js
const favoriteNumber = 7; // Replace 7 with your fav!
```

Our favorite number is special, so we don't want it to be changed in the code later on. To prevent this, we can make the variable a **constant** by writing `const`. If we do want to change it later, we can replace `const` with `let`.

Notice the variable name's format, `favoriteNumber`. That's called camel-casing 🐫, where the first word is lowercase, and the rest of the words after it are capitalized - no spaces in between, of course. This is how variable names should be formatted in JS!

We give `favoriteNumber` a value of 7, which is a `number`. Variables don't have to be numbers, though. They can be `strings` (letters wrapped in **single or double quotes**), booleans (`true` or `false`), or even `undefined` (exactly what you think it is).

The two slashes followed by words are comments, by the way. Nothing in comments gets run, so it's great for explaining what code does or even writing steamy romances, depending on the mood 🥰.

Let's say we want to make a list of my favorite pizza toppings (in no particular order.) How would we go about that in JS? Answer: arrays. Let's see one in action:

```js
let favoriteToppings = ['green olives', 'pepperoni', 'onions'];
```

Do the same with your favorite toppings (list as many as you like!) 🍕

If we want to access the first element in the array, we can do:

```js
// console.log outputs stuff in its () to the console
console.log(favoriteToppings[0]);
```

Notice how we type 0 to get the first element - you aren't going insane, counting just starts from zero with programming 🙃

Cool beans!

---

### Conditionals

If we want to find out whether or not your favorite number is between 20 and 30, we can use conditionals. Let's take a look:

```js
if (favoriteNumber < 30 && favoriteNumber > 20) {
  /* this code is executed if favoriteNumber is in between 20
       and 30 */
  console.log('Your number is in between 20 and 30!');
} else if (favoriteNumber > 30) {
  // this code is executed if favoriteNumber is greater than 30
  console.log('Your number is greater than 30!');
} else {
  /* this code is executed if favoriteNumber is not in between 20
      and 30 and not greater than 30 */
  console.log('Your number is less than 20!');
}
```

We're using **if/else statements** to check if conditions are met! If our favorite number is less than 30 **and** our favorite number is greater than 20, let us know! Elsewise, if (**else if**) our favorite number is greater than 30, let us know. Elsewise (**else**), our number must be less than 20, so tell us.

Heck yeah! 😎

---

### Looping

There are oodles of ways to loop through things like lists, so we'll focus on the two most essential methods:

**For loops** can iterate through arrays like so:

```js
for (const topping of favoriteToppings) {
  console.log(topping);
}
```

Here, we are saying that for each _topping_ (we can call this whatever we want, but topping makes the most sense) in our list of favorite toppings, we want to log that topping. Try it with your list of favorite toppings!

**While loops** will run its code while a condition is met. It won't stop until the condition becomes false or until the world ends! 😁

```js
while (true) {
  console.log('1 Doge = 1 Doge');
}
```

_Disclaimer: I highly advise against running the above code, it's an infinite loop and could potentially open a black hole if left to run long enough._

---

**Here, you need a break. Let this lava lamp hypnotize you for a bit.**
![Woahhhhh](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4e3g2d0oxfgcw7nwaxap.gif)
Lava lamps are almost as cool as JS, amirite?

---

### Functions

Functions are the backbone of Javascript. They allow us to reuse code and clearly label what is what. Let's make a really cool math trick:

```js
function amazeMe(favoriteNumber) {
  let prediction = 2;
  let answer = (favoriteNumber * 3 + 6) / 3 - favoriteNumber;
  console.log('Prediction: ' + prediction);
  console.log('Answer: ' + answer);
}
```

Go ahead and paste that into your console, then I'll explain what's going on here:

1. First, we **define** the function by using `function`
2. We give it a name (`amazeMe` in this case)
3. We pass in **parameters** (these are like variables that can only be used inside the function - parameters are optional though, so if you don't need any you can just write empty parenthesis)
4. Inside the function, we define our prediction, as well as our magic algorithm
5. We log our prediction, then log our answer

_No matter what our favorite number is, the answer will always be 2! Crazy!_ 😮

We just defined our function, now we can put it to use! Let's **call** our function:

```js
amazeMe(favoriteNumber);
```

When we call our function, we **pass in** our `favoriteNumber` variable that we defined a while back. The function now has access to that variable in its code! We can pass in any number though, which would look like this:

```js
amazeMe(8);
```

Try it with different numbers; the answer is always 2!

#### Hey, you! You're done! 🎉

If you like Javascript so far, I really recommend you learn some more and maybe build some cool things with it. Stay tuned to this series though; I plan on making more Javascript tutorials in the future!

**Before you leave, read this:**

1. I'd like to thank you for giving this post a view, it really means a lot to me! Let me know how I'm doing too.
2. Like I said, stay tuned because there are a lot more articles coming for every type of programmer!
3. Never stop learning, never stop practicing. There's always something you can do to improve, so get out there and keep going! I believe in you 😇

**Practice Resources:**

- [Modern JavaScript Tutorial](https://youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc) is a great playlist made by my hero, The Net Ninja. If you're into Javascript, check it out!
- [JSChallenger](https://www.jschallenger.com/) gives awesome challenges for you to practice and expand upon your JS skillz!
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is great for looking up random Javascript things if you're in a pinch; it's like the JS dictionary!
