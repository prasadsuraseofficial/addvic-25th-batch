"use strict";
let s = prompt('Enter a String');
var result = [...s].reduce((a, e) => 
{ a[e] = a[e] ? a[e] + 1 : 1; 
    return a 
}, {}); 
console.log(result); 
 const showResult = JSON.stringify(result);
document.write(`The no.of occurance of each letter in a string taken from the user is <br> ${showResult}`);

