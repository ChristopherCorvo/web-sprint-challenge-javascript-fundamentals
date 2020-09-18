# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

Answer: These two methods have one fundamental difference. The forEach method is meant to display data from an array but not
mutate the original data set. The map method on the other hand returns a new array with the specific information you wanted to see. 

2. Explain the difference between a callback and a higher order function.

Answer: A callback function usually accomplishes one specific task i.e return a + b. Higher order functions solve more complex problems. 
Call back functions get passed into higher order functions where they are then used to help solve or accomplish more complex or abstract 
tasks. 

3. What is closure? 

Answer: Simply put closure describes how a child function has access to the parent function and its variables but not vice versa.


4. Describe the four rules of the 'this' keyword.

Answer: There are four rules that govern the context of the 'this' keyword. Each of these rules determines
where 'this' will begin to point. 

    1) window binding = if 'this' is attached to the global scope which means none of the below binding rules are in effect, then 'this' will refer or point to the larger window object. This is
    rarely if ever something you want to happen. If you see this taking effect then you have an error. 

    2) implicit binding = happens at function invocation. Look to the left of the dot to understand going forward where 'this' is now pointing. ie myObj.eat() -- this will be pointing to myObj

    3) explicit binding =  This happens because you are using either: .call(), .apply(), or .bind(). Each method has different use cases though .call() is probably the most widely used. Both .call() and .apply() invoke the function immediatly where .bind() returns a function that can be invoked later on. 

    4 new binding = an example of new binding is when you use the 'new' keyword when creating a new instance
    of an object. 'This' will now begin to point to the new obj that was created. 

5. Why do we need super() in an extended class?

Answer: When you employ extend() what you are doing is creating a subclass of a parent class. 
You then use super() to create a link between the parent and the child. super() is what allows the child to access, grab or call functions and variables within the parent class. 

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project
- [ ] Add your team lead as collaborator on Github
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [ ] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request


