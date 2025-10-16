// console.log("Hello");
// console.log("I like pizza");

// window.alert(`This is an alert!`);
// window.alert(`I like pizza!`);

// This is a comment

// document.getElementById("myH1").textContent = `Hello`;
// Variable is a container to store values.
let fullname = "Brocode";
let agenum = 25;
let isStudent = false;
// You can check a variables type by console.log(typeof "variable")
document.getElementById("p1").textcontent = `Your name is ${fullname}.`;
document.getElementById("p2").textcontent = `You are ${agenum} years old.`;
document.getElementById("p3").textcontent = `Enrolled: ${isStudent}.`;

/* this is 
    a
    comment
*/

// let x;
// x = 100;

// console.log(x);

// let age1 = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(gpa);
// console.log(`You are ${age1} years old.`);

// Arithmetic operators are operands (variables, values, ...)
//                      operators (+ - * /)
let students = 30;

//students = students + 1;
// students = students -1;
// students = students * 4;
// students = students / 6;
// students = students ** 2
//students = students % 2;

//students += 1;
// students -=1;
// students * =4;
// students / =6;
// students **= 2
// students %= 2;

console.log(students);

/* Operator precedence
    Parantheses ()
    Exponents
    Multiplication, division, modulo
    Adding and subtraction
*/

// How to accept user input
// 1. Easy way (window prompt)
// 2. Hard way (HTML textbox)

// let username;

// // username = window.prompt("What is you username?");
// // console.log(username);

// document.getElementById("mySubmit").onclick = function () {
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textcontent = `Hello ${username}`;
// };

// Type conversion means changing the datatype of a value to another
// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = string(y);
// z = boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const is a variable, that can not be changed
const pi = 3.14;
let radius;
let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2 * pi * radius;

// console.log(circumference);

document.getElementById("mySubmit1").onclick = function () {
  document.getElementById("myText1").value;
  radius = Number(radius);
  circumference = 2 * pi * radius;
  document.getElementById("myH12").textcontent = circumference + "cm";
};
