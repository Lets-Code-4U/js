//Date is object in js

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getDate());


// Another method to declare the time in js

let myTimeStamp=Date.now() //it returns the time in milli second since 1970 mid night
console.log(myTimeStamp);
