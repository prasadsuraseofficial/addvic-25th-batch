// console.log(a); //not accessible
// console.log(b); 
// console.log(c); //3

// let a = 1;
// const b = 2;
// var c = 3;

// sayHello();
// // function declaration
// function sayHello(){
//     console.log("Hello");
// }


// sayHello();
// // arrow function
// const sayHello = () => {
//     console.log("Hello");
// }

// sayHello();
// // anonymous function
// const sayHello = function () {
//     console.log("Hello");
// }

// TDZ - Temporal Dead Zone
// this is the place/zone where the variable is not accessible or
//  set to undefined


// // TDZ start for variable a
// console.log(a);

// // console.log(b);

// var a = 5; // TDZ end for variable a

// console.log(a);


// // variables declared using var keyword creates an property on window
// //  global object
// if(a === window.a){
//     console.log("equal");
// }