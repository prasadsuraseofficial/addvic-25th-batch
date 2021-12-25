// ---------------------------Arrays--------------------------------------
// let studentName = ["Rahul", "Nitin", 1, true, 7+3];
// console.log(studentName[4]);

// let friendList = ["Rahul", "Nitin", "Bhagyashree"];
// console.log(friendList[4]);

let studentName = "Dayanand";

const studentDetails = [
    101,
    studentName,
    "MCA",
    ["TCS", "INFOSYS", "WIPRO"]
];

console.log(studentDetails);

// access name of student
console.log(studentDetails[1]);

// access name of first company student was working.
console.log(studentDetails[3][0]);

// changing roll no even if the array is declared with const.
studentDetails[0] = 201;

console.log(studentDetails);
