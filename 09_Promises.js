// Creatin Promises

const promiseOne = new Promise(function (response, reject) {
  setTimeout(() => {
    console.log("Async Task 1 request");
    response();
  }, 1000);
});

//  consuming the promises

promiseOne.then(() => {
  console.log("Asycn Task 1 request completed");
});

//      Another method to create promises

new Promise((response, reject) => {
  setTimeout(() => {
    console.log("Async Task 2 request");
    response();
  }, 1000);
}).then(() => {
  console.log("Async Task 2 request completed");
});

//  Passing Data through Promises response

const promiseThree = new Promise((response, reject) => {
  setTimeout(() => {
    console.log("Async Task 3 requested");
    response({
      // data can be an array , obj , function or anything
      username: "Sarvesh",
      email: "mishra@sarvesh.com",
      pass: "1234",
    });
  }, 1000);
});

promiseThree.then((data) => {
  console.log(data);
});

//  Error or rejection of promises  (then and catch is uesd)

const promiseFour = new Promise((response, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      console.log("Async task 4 requested");
      response();
    } else {
      reject("ERROR : Request 4 is rejected");
    }
  }, 1000);
});

promiseFour
  .then(() => {
    console.log("Request resolved");
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // this is executed either the request is accepted or rejected
    console.log("The request is either accepted or rejected");
  });

//    fetch() in js

fetch("https://catfact.ninja/fact")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//   Consuming promises using async and await

const promiseFive = new Promise((response, reject) => {
  setTimeout(() => {
    console.log("Async Task 5 is requested");
    response();
  }, 1000);
});

async function consumePromiseFive() {
  try {
    console.log("Async Task 5 is resolved");
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// consuming fetch using async and await

async function consumeFetchRequest() {
  try {
    const response = await (await fetch("https://catfact.ninja/fact")).json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumeFetchRequest();

