// OBJECTS DECLARATION AND ACCESSING THE OBJECT //

const Employee = {
  name: "Sarvesh",
  "full name": "Sarvesh Mishra", // key that has white spaces is declared as a string
  age: 22,
  isLoggedin: false,
  location: "bangalore",
};
// console.log(Employee); //prints the whole object
// console.log(Employee.location); // prints the specific key of the object
// console.log(Employee["full name"]); // accessing the key with white spaces

/* ============================================================================================= */

// DECLARING SYMBOL AS A KEY OF OBJ //

const mySym = Symbol("key1"); //syntax to declare symbol
const user = {
  name: "Sarvesh",
  [mySym]: "myUserKey1", // syntax to declare a symbol as obj. key
};
// console.log(user[mySym]);  // to print symbol key

/* ============================================================================================ */

// CHANGING VALUES OF THE KEYS //

Employee.name = "Keshav";
// console.log(Employee.name);

// Object.freeze(Employee); // freezing the object, modification will not be accepted
Employee.location = "mumbai";
// Employee.name = "Naveen";
// console.log(Employee);

/* ============================================================================================= */

// ADDING FUNCTION AS KEY IN OBJECT //

//declarint a function as key of an object
Employee.greeting = function () {
  console.log("Hello user");
};

Employee.greetingTwo = function () {
  console.log(`Hello user, ${this.name}`);
  console.log(`Hello user, ${this["full name"]}`);
};
// console.log(Employee.greeting());
// console.log(Employee.greetingTwo());

/* ============================================================================================== */

// NESTING OBJECTS (object as key inside an object) //

const staff = {
  name: "gagan",
  email: "gagan@gmail.com",
  fullName: {
    firstName: "Gagan",
    lastName: "Mishra",
  },
};

// console.log(staff.fullName.firstName);

/* ============================================================================================== */

// MERGING OBJECTS //

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj5 = Object.assign({}, obj1, obj2, obj3); // first paremeter is the target object where the objects are going to merged
const obj4 = { ...obj1, ...obj2, ...obj3 }; // Another method to combine the objects
// console.log(obj4);
// console.log(obj5);

/* ============================================================================================== */

// IMPORTANT METHODS OF OBJECTS //

const user2 = {
  name: "Chikki",
  id: "123abc",
  email: "chikkimishra@gmail.com",
  isLoggedin: false,
};

// console.log(Object.keys(user2)); //returns the keys of obj in array format
// console.log(Object.values(user2)); // returns the values of the obj in array format
// console.log(Object.entries(user2)); // returns the keys and values of the obj in array format
// console.log(user2.hasOwnProperty("fullname")); // checks the prop is there in obj or not

/* ============================================================================================== */

// DE-STRUCTURING AN OBJECT  //

// if a key is ferquently used and its name is too long then it is used 
const { isLoggedin: login } = user2; 
console.log(login); //same as console.log(user2.isLoggedin)
