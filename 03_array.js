/* DECLARATION AND ACCESSING OF ARRAYS */

const myarr = [1, 2, 3, 4, 5];
// console.log(myarr);
// console.log(myarr[3]); //accessing the elements by index (3)

const myarr2 = new Array(100, 300, 400, 500, 600); //Another method of declaring an array
// console.log(myarr2);
// console.log(myarr2[4]); // printing fourth element of myarray2

/* =========================================================================================== */

/* METHODS OF ARRAYS */

myarr.push(9); //appends element at the end
myarr.pop(); // removes element from the end
myarr.unshift(10); //appends element at the begning
myarr.shift(); // removes the element from the begning
// console.log(myarr.length); // returns the length of the array

// console.log(myarr.includes(5)); // checks the given element lies in array or not
// console.log(myarr.indexOf(7)); // checks the index of the given element

const new_arr = myarr.join(); // converts the array to string seprated by a comma
// console.log(typeof new_arr);
// console.log(new_arr);

// console.log(myarr);

// console.log(myarr.slice(1,3)); // returns the range of elements,not includes the last range
// console.log(myarr.splice(1,3)); // returns the range of elements including the last range
// console.log(myarr);

// console.log(Array.isArray("Mishra")); // checks whether it is array or not
// console.log(Array.from("Mishra")); // converts any datatype to array


/* =========================================================================================== */

/* CONCATENATION OF TWO ARRAYS */
const marvel = ["ironman", "thor", "spiderman", "strange"];
const religion = ["krishana", "rama", "arjuna", "karna"];

const all_heros1 = marvel.concat(religion); // can only concatenate two arrays
const all_heros2=[...marvel,...religion,...marvel] // can concatenate more arrays

// console.log(all_heros1);
// console.log(all_heros2);

