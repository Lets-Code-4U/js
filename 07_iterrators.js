/* LOOPS IN JS */

// FOR LOOP

for (let index = 0; index <= 10; index++) {
  const element = index;
  //   console.log(element);
}

for (let index = 0; index <= 10; index++) {
  if (index == 6) {
    // console.log(`6 is best number`);
  }
  //   console.log(index);
}

// printing a table

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i}*${j} = ${i * j}`);
  }
}

/* FOR looop in arrays */

let arr = ["rama", "krishana", "hanumana"];
size = arr.length;

for (let i = 0; i < size; i++) {
  //   console.log(arr[i]);
}

/* break and continue */

for (let i = 0; i <= 20; i++) {
  if (i == 4) {
    console.log("4 is the best number");
    break;
  }
  // console.log(`value of i is ${i}`);
}

for (let i = 0; i <= 20; i++) {
  if (i == 4) {
    console.log("4 is the best number");
    continue;
  }
  // console.log(`value of i is ${i}`);
}

/* ============================================================================= */

// WHILE AND DO WHILE LOOP

{
  let i = 0;
  while (i < 10) {
    // console.log(`value of i is ${i}`);
    i++; // updation of the var.
  }
}

// while loops on arrays

{
  let myarr = ["rama", "krishana", "keshava", "gopala", "mohana"];
  let j = 0;
  while (j < myarr.length) {
    // console.log(`Element of the array ${myarr[j]}`);
    j++;
  }
}

// do while loops
// even if the condition fails the loop will run once

{
  let score = 11;
  do {
    console.log(`score is ${score}`);
    score++;
  } while (score < 10); // codition check
}
/* ============================================================================ */

/* ARRAYS AND OBJECT SPECIFIC LOOPS */

// for of loop  (specifically used for arrays)

{
  const myarr = [1, 2, 3, 4, 5, 6];
  for (const item of myarr) {
    // console.log(item);
  }

  const greetins = "Hello sarvesh";
  for (const greet of greetins) {
    // console.log(`each char is ${greet}`);
  }
}

// for in loops (specifically used for objects)

{
  const myobj = {
    name: "sarvesh",
    age: 22,
    email: "mishrabgs@gmail.com",
    id: "1234dfgs",
  };

  for (const keys in myobj) {
    //  console.log(keys);  // only keys are printed
    //  console.log(myobj[keys]);   // only values are printed
    // console.log(`${keys} : ${myobj[keys]}`); // both keys and values are printed
  }
}

// forEach loop  (specifically used for arrays and objects inside the arrays)

const coding = ["java", "python", "javaScript", "cpp", "ruby"];
coding.forEach((val) => {
  // console.log(val);
});

// it takes a callback function and a parameter to return the elements of the array
// in the above example only one parameter is passed(val) it will only return the element of the array

coding.forEach((val, index, arr) => {
  // console.log(val, index, arr);
});

// first parameter(val) will return the element
// second paremeter(index) will return the index
// third parameter(arr) will return the whole array

// forEach loop on array that contains objects as elements

const codingLang = [
  {
    langName: "java",
    shortName: "jv",
  },
  {
    langName: "python",
    shortName: "py",
  },
  {
    langName: "javaScript",
    shortName: "js",
  },
  {
    langName: "cpp",
    shortName: "cp",
  },
  {
    langName: "ruby",
    shortName: "rb",
  },
];

codingLang.forEach((item) => {
  // console.log(item.shortName);
});

// all objects are treated as specific element
// we can access the keys and values of the object
// forEach loop does not return any to the user

/* =================================================================================== */

/* FILTER METHOD , MAP METHOD  AND REDUCE METHOD*/

// this method returns the function to user

// filter method is to filter items of array based on the condition returned
const myNums = [1, 2, 3, 4, 5, 6, 7];
const newNums = myNums.filter((item) => {
  return item >= 5;
});
// console.log(newNums);

// map method is to update each and every element and return it
const newSums = myNums.map((item) => {
  return item + 10;
});
// console.log(newSums);

// Chaining (using two or more methods in the same line)

const newNumsSums = myNums.filter((item) => item > 3).map((item) => item * 2);
// console.log(newNumsSums);

// REDUCE Method  (usually used to find the summation of the elements of the array)

const myTotal = myNums.reduce((accumulator, currentValue) => {     // initally the accumulator value is first value of array
  console.log(
    `Accumulator : ${accumulator} , Current Value : ${currentValue}`
  );
  return accumulator + currentValue;  // now accumulator value changes to returned value of the funciton
});
console.log(myTotal);   // sum of the elements of the array

