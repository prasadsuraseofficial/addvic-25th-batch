// let a = document.getElementById("myDiv").innerHTML;
// console.log(a);

// let b = document.getElementsByClassName("heading")[0].innerText;
// console.log(b);

// let c = document.getElementsByClassName("heading");
// console.log(c[1].innerText);

// let d = document.getElementsByTagName("h1");
// console.log(d[0].innerText); 

// //print all using for loop
// for(let i = 0; i < d.length; i++){
//     console.log(d[i].innerText);
// }

// ========================querySelector========================

// let e = document.querySelector("h1"); //similar to getElementsByTagName
// console.log(e.textContent); // textContent is similar to innerText

// let f = document.querySelector("#myDiv"); //getElementById
// console.log(f.innerText);

// let g = document.querySelector(".heading"); // getElementsByClassName
// console.log(g.innerText);

// // ------------------------------------------------------------

// let h = document.querySelectorAll("#myDiv");
// console.log(h[0]);

// let i = document.querySelectorAll(".heading");
// console.log(i[1].innerText);

// ========================Accessing/Changing Value Of Inputs========================

// let fullNameInput = document.querySelector("#fullName"); //access input tag

// alert("Welcome, " + fullNameInput.value); //prin tinput value

// fullNameInput.value = "Hitesh Patil"; //set input value


// ========================JavaScript Events========================

// 1. handle button click event ->

// function printName(){
//     let fullName = document.querySelector("#fullName").value;
//     alert(fullName);
// }

// let submitBtn = document.querySelector("#submitForm");

// submitBtn.addEventListener("click", printName);

// ----------------------------------------------------
// Assignment #13: write down all the javascript events
// along with examples

// =================Changing CSS Using JavaScript====================

// // change background color of body using javascript
// const body = document.querySelector("body");

// console.log(body);

// body.style.backgroundColor = "red";
// body.style.border = "2px solid black";

// ==========================BOM=============================

// 1. WHAT IS BOM?
//  - BROWSER OBJECT MODEL
// Related to browser - displatying alerts, prompt, confirm

// 1. window.alert("hello alert");
// window.alert("hello alert, \nthis should be on new line \n1.Addition : + \n2. Subsctration: -");

// 2. let studentName = window.prompt("Enter Your Name: ");

// 3. let res = window.confirm("Are You Sure You Want to Proceed?");
// console.log(res);

// 4. window.history.back();
// window.history.forward();

// 5. window.screen
// console.log(window.screen.availHeight);
// console.log(window.screen.height);
// console.log(window.screen.availWidth);
// console.log(window.screen.width);
// alert(screen.availHeight + " " + screen.availWidth);

// 6. window.location
// console.log(window.location.hostname);
// console.log(window.location.origin);
// console.log(window.location.pathname);
// console.log(window.location.port);
// console.log(window.location.protocol);
// console.log(window.location.search);
// console.log(window.location.href);

// window.location.replace("https://facebook.com/");
// window.location.reload();
// window.location.href = "https://instagram.com";

// 7. window.setTimeout() ->

// let downloadFunction = () => {
//     console.log("downloading pushpa..!");
// }

// window.setTimeout(downloadFunction, 3000); //waiting for 3 seconds to run the function
// setTimeout(downloadFunction, 3000); //waiting for 3 seconds to run the function

// 8. window.setInterval() ->
// let i = 10;

// let downloadCountDown = () => {
//     console.log(`download will start in ${i} seconds..!`);
//     i--;
// }

// window.setInterval(downloadCountDown, 1000);
// setInterval(downloadCountDown, 1000);

// ================Arrow Function Revision===============

// regular/noraml function
// function addition(a, b) {
//     let c = a+b;
//     return c;
// }

// console.log(addition(10, 60)); //normal function

// anonymous function
// let addFunction = function (a, b) {
//     let c = a+b;
//     return c;
// }

// console.log(addFunction(2, 5));

// arrow function
// let addFunction = (a, b) => a+b;

// console.log(addFunction(2, 5));

// =============Nested Object Revision==================

// let friendsList = ["Vaibhav", "Sumit", "Prajwal"];

// let collegeDetails = {
//     collegeName: "SIMCA",
//     rollNo: 101,
//     year: "1st",
//     address: "Vadgaon, Pune - 411046"
// }

// let student1 = {
//     sname: "Ramu",
//     friends: friendsList,
//     collegeDetails: collegeDetails
// }

// // console.table(student1);
// console.log(student1);

// ================Nested For Loop Revision=============

// let numberOfLines = 5;

// for(let i = 1; i <= numberOfLines; i++){
    
//     for(let j = 1; j <= i; j++){
//         document.write("* ");
//     }

//     document.write("<br />");
// }
