// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. **DONE** */ 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// Answer: In this case nestedFunction() is the child to myFunction(), the child function has access to the variables stored within the parent function's scope.

/* Task 2: Counter **DONE**

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param){
  let counter = 0;
  
  for (let i = 0; i < param + 1; i++) {
    counter = counter + i;
  }
  return counter;
};

console.log(summation(4));