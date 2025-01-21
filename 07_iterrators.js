/* loops in  js */

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

/* looops in arrays */

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
