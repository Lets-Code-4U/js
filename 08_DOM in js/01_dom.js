// Methods for getting element
document.getElementById("title");
const title = document.getElementById("title");
title.getAttribute("class"); // retruns the specificd attrigbute as class or spam
title.setAttribute("class", "main"); // used to set new attribute value

// above method will overwrite the attribute class with new value main

/*===================================*/

// styling in js

title.style.backgroundColor = "orange";

// getting inner tags and texts

const innerHtml = title.innerHTML;
const innerText = title.innerText;

console.log(innerHtml); // it will show tags and text in the title tag
console.log(innerText);  // it will only show the text in the tag

// inner text can be manipulated by assining new value
// title.innerText="hello world"    



