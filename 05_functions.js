// SYNTAX AND DEFINITION //

function myName() {
  console.log("Sarvesh Mishar");
  console.log("Hii this is sarvesh mishra");
}

myName; // this is called function reference
// myName() // this is called function call

/* =========================================================================================== */

// PARAMETERS AND ARGUMENTS //

function addNum(num1, num2) {
  // passing parameter to a function
  console.log(`The sum of numbers is, ${num1 + num2}`);
}

// addNum(4, 5); // passing arguments to a function

/* ========================================================================================== */

// RETURN STATEMENT IN FUNCTIONS //

function addNum1(num1, num2) {
  let result = num1 + num2;
  return result;
}
// console.log(addNum1(3, 9));

/* =========================================================================================== */

// PASSING VALUE TO THE PARAMETER //

function login(user = "Sarvesh") {
  // passsin default value to the function
  return `${user}, is logged in.`;
}
// console.log(login("mishra")); // if no argument is passed then default value will be considered

/* =========================================================================================== */

// REST OPERATOR IN FUNCTION//

function price(...num) {
  // rest operator is used to accept more than one no of arguments
  return num;
}
// console.log(price(23,43,4,5)); // it will the array of passed arguments

/* ========================================================================================== */

// PASSING OBJECT AS PARAMETER ADN ARGUMETN //

const user = {
  username: "Sarvesh",
  password: "123sar",
};
function handleObj(anyObj) {
  console.log(
    `Username is ${anyObj.username} and password is ${anyObj.password}`
  );
}
// handleObj(user);  // passing declared object as argument
// handleObj({  // passing object directly as argument
//   username: "Misrha",
//   password: "546mishra",
// });

/* ============================================================================================ */

// PASSING ARRAY IN THE FUNCTION //

function handleArray(anyArr) {
  console.log(anyArr);
}
// handleArray([29, 39, 46, 57]);  //directly passing array as an argument
const arr = [57, 568, 68, 578, 47, 58];
// handleArray(arr); // passing declared array to the funciton

/* ============================================================================================ */

// DECLARING THE FUNCTION AS A VARIABLE //

const toAdd = function (num1, num2) {
  console.log(`This function will add two numbers ${num1 + num2}`);
};

// toAdd(2, 6);

/* ========================================================================================== */

// ARROW FUCTIONS //

const chai = () => {
  // this is an arrow function
  console.log("chai is ready");
};
// chai();

const add = (num1, num2) => {
  // passing paremeters to arrow function
  return num1 + num2; // explicit return function
};
// console.log(add(4, 7));

const add2 = (num1, num2) => num1 + num2; // implicit return arrow function
// console.log(add2(7, 12));

/* ========================================================================================== */

// Immediately Invoked Function Expression (IIFE) //

(function chai2() {  // named IIFE
  console.log(`This is named iife`);
})(); // callin funciton directly

// OR
(() => {   // arrow IIFE
  console.log(`This is a arrow iife`);
})();

((name) => {  // passing paremeter to IIFE function
  console.log(`${name}, your chai is ready.`); 
})("sarvesh");

/* ========================================================================================== */
