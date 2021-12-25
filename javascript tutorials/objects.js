// control structures
// variables, constants, comments, scope...
// functions
// loops
// arrays

// ___________________________________________________
// #objects-
// key => value
// e.g. studentName => Suraj

// // student list by using array =>
// let student4 = ["vaibhav", "A", "SIOM"];
// // name, div, college
// const studentsList = [
//         ["jay", "A", "SIOM"],
//         ["jayesh", "B", "SIMCA"],
//         ["Swati", "A", "SIOM"],
//         student4
//     ];
    
    // console.log(studentsList);
    // console.log(student4);
    
    // console.log(studentsList[0][0]);
    // console.log(studentsList[1][1]);
    // console.log(studentsList[2][0]);
    

// simple object example =>
// const studentDetails = {
//     name: "Sujay",
//     div: "B",
//     college: "SIOM"
// }

// console.log(studentDetails)

// #student list by using objects =>

// let student4 = ["vaibhav", "A", "SIOM"];

// const studentList = {
    
// };
    
// -----------------------------------------------------
// DOM - [DOCUMENT OBJECT MODEL]
// -----------------------------------------------------
// // #Reading Entire HTML Element By Using It's ID -
// let mainHeading = document.getElementById("heading");

// console.log(mainHeading); // <h1 id="heading">JAVASCRIPT ESSENTIALS..!</h1>

// // ------------------------------------------
// // #Reading Text Inside An HTML Element
// let mainHeadingText = document.getElementById("heading").innerHTML;
// console.log(mainHeadingText); // JAVASCRIPT ESSENTIALS..!

// let mainHeadingText1 = mainHeading.innerHTML;
// console.log(mainHeadingText); // JAVASCRIPT ESSENTIALS..!

// console.log(mainHeading.innerHTML);

// -------------------------------------------------------
// // #Read Inside Elements/Child Elements Of A HTML Tag/Element
// let body = document.getElementById("body").innerHTML;
// console.log(body);

// -----------------------------------------------------------
// // #Change HTML Element Text
// let mainHeading = document.getElementById("heading");

// mainHeading.innerText = "Advanced JavaScript..!";
// --------------------------------------------------------
// #Add/Update HTML Elements (Remove previous HTML & Add New One)
// document.getElementById("heading").innerHTML = "<p style='color: yellow'>I'm Just Added!</p><hr />";
// -------------------------------------------------------
// #Create an HTML Element
let h2 = document.createElement("h2");

// console.log(h2);

h2.innerText = "Just Borned..!";

// console.log(h2);

// document.body.appendChild(h2);

// --------------------------------------------------
// Assignment #12: Perform the following operations using DOM.
// 1. create html element and show/append it on page.
// 2. read the element using dom and print it in alert.
// 3. read the text of an html element and show it in alert.
// 4. update the css of an html element using js/DOM.
// 5. Read Inside Elements/Child Elements Of A HTML Tag/Element



