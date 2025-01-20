/* if condition */

if (true) {
  //   console.log("this must be executed");
}

//if else condition
const price = 100;
if (price <= 80) {
  //   console.log("price less than 80");
} else {
  //   console.log("price more than 80");
}

//else if condition

const val1 = 10;
const val2 = 20;

if (val1 >= 20) {
  //   console.log("value is less or equal to 20");
} else if (val2 >= 20) {
  //  console.log("value is greater or equal to 20");
} else {
  // console.log("value not found");
}



/* ========================================================================= */

//operators in condition

const isLoggedin = true;
const emailFound = false;

if (isLoggedin && emailFound) {
  //logical and operator
  //   console.log("user is verified ");
} else console.log("user is not verified");

if (isLoggedin || emailFound) {
  // logical or operator
  console.log("user is verified");
} else console.log("user is not verified");


/* ======================================================================= */

// Nullish Coalescing Operator
num1 = 5 ?? 10;
// console.log(num1);

num2 = null ?? 3;
// console.log(num2);

num3 = undefined ?? 12;
// console.log(num3);

num4 = null ?? undefined ?? 4;
// console.log(num4);


/* ======================================================================= */


/* Terniary operator */

// condition ? true : flase

const iceCreamPrice = 200;

iceCreamPrice > 300
  ? console.log("more than 300")
  : console.log("less than 300");


/* ========================================================================= */
/* Switch */

const day = 3;

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thrusday");
    break;
  default:
    console.log("not a valid choice");
}
