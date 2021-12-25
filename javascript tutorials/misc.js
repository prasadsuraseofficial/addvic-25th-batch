// #Type Conversion vs Type Coercion -->

// 1. Type Conversion ->

// "123" -> 123
// let a = Number("123");
// console.log(a);

// let b = String(true);
// console.log(typeof(b));
// console.log(typeof b);

// let c = Boolean("false");
// console.log(c);

// let d = parseInt(123.50);
// console.log(d);

// let e = parseFloat("123.560");
// console.log(e);

// ------------------------------------------

// 2. Type Coercion ->

// let a = "5";
// let b = 3;

// console.log(typeof a, typeof b);

// b = true;

// console.log(typeof a, typeof b);

// =============================Ternary Operators================================
// 1. ++a, i++ - unary operators
// 2. a + b - binary operators
// 3. a===b ? console.log(true) : console.log(false) - ternary operators

// let a = 5, b = 5;

// if(a===b){
//     console.log(true);
// }else{
//     console.log(false);
// }

// a===b ? console.log(true) : console.log(false);
// a===b ? console.log(true) : "";
// a===b ? (a!==b) ? "" : "" : "";
// a===b ? (a!==b) ? "" : "" : a>b ? "" : "";


// bonus:
// a===b && console.log(true);

// =============================Object Dot vs Bracket Notation================================
// creating an object ->

// let empIdInput = prompt("Enter Employee Id: ");    

//     let employee = {
//         empId: empIdInput,
//         empName: prompt("Enter Employee Name: "),
//         salary: 20000,
//         isPermenent: true
//     };

//     console.log(employee);
// -------------------------------------------------

//     let employee = {
//         empId: 101,
//         empName: "Rinku",
//         salary: 20000,
//         isPermenent: true
//     };

//     console.log(employee);


// // 1. Dot Notation (.) ->
//     console.log(employee.empName);

// // 2. Bracket Notation ([]) ->
//     console.log(employee["empName"]);

// =============================Object Methods (Functions)================================

// 1. create object methods ->

// let employee1 = {
//     empId: 101,
//     empName: "Rinku",
//     netSalary: 20000,
//     bonus: 10000,
//     isPermenent: true,

//     getTotalSalary: (netSalary, bonus) => {
//         return netSalary + bonus;
//     }


// };

// console.log(employee1.getTotalSalary(employee1.netSalary, employee1.bonus));

// --------------------------------------------------------
// // 2. use of this keyword ->

// // object
// let employee2 = {
//     // properties of object
//     empId: 101,
//     empName: "Rinku",
//     netSalary: 20000,
//     bonus: 10000,
//     isPermenent: true,

//     // method of object
//     getTotalSalary: function(){
//         return this.netSalary + this.bonus;
//     }
// };

// let employee3 = {
//     empId: 101,
//     empName: "Omkar",
//     netSalary: 30000,
//     bonus: 10000,
//     // isPermenent: 10 > 20 ? true : false,

//     getTotalSalary: function(){
//         return this.netSalary + this.bonus;
//     }
// };

// console.log(employee2.getTotalSalary()); // dot notation
// console.log(employee3["empName"]);
// console.log(employee3["getTotalSalary"]()); //bracket notation


// =============================Foor Loop Keywords & tactics================================

// 1. continue - skip that 1 record.
// for(let i = 1; i <= 10; i++){
//     if(i === 5){
//         continue; //skip the record
//     }
//     console.log(i);
// }

// 2. break -

// let num = parseInt(prompt("Enter the Number to Search"));

// for(let i = 1; i <= 100000; i++){
//     if(i === num){
//         alert("number found between 1 to 100000");
//         break; //stop the for loop immediately
//     }
//     console.log(i);
// }

// 3. How to loop reverse in for loop ->

// let names = ["John", "Tony", "Sudhir", "Hitakshi"];

// for(let i = names.length - 1; i >= 0; i--){
//     console.log(i, names[i]);
// }

// 4. print exercise name and do print 10 repetations for 
// each exercise using for loop. (HINT - use nested for loop)

// const exercises = ["Pushups", "Pullups", "Bench Press", "Chest Press"];

// for(let i = 0; i < exercises.length; i++){

//     console.log("Exercise Name : " + exercises[i]);

//     for(let j = 1; j <= 10; j++){
//         console.log("Repetation " + j);
//     }
// }

// =========================Console Types===========================

// let student = {
//     firstName: "Prajkta",
//     lastName: "Saluke",
//     std: "10th",
//     age: 15,
//     subjects: ["Maths", "Science"]
// }

// // 1. console.log() ->
//     console.log(student);

// // 2. console.warn() ->
//     console.warn("I will kill you!");
//     console.warn("Just Kidding, This is how we give warnings in the code");

// // 3. console.error() ->
//     console.error("Your Phone Is Not Working, Change It!");

// // 4. console.table() ->
//     console.table(student);

// =========================Debugging In JS===========================
// 1. how to set breakpoints (how to use debugger)

// bug?? - any unwanted behaviour in our program.

// de-bug?? - correcting or removing or identifying or fixing the bug.

// e. g. 

// const exercises = ["Pushups", "Pullups", "Bench Press", "Chest Press"];

// for(let i = 0; i < exercises.length; i++){

//     console.log("Exercise Name : " + exercises[i]);

//     const a = 5;

//     a = 6;

//     for(let j = 1; j <= 10; j++){
//         console.log("Repetation " + j);
//     }
// }