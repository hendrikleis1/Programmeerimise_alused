// arrays = a variable like structure that can hold more than one value

// let fruits = ["apple", "orange", "banana"];

// fruits.push("coconut");
// fruits.pop();
// // fruits.unshift("mango");
// // fruits.shift();

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOfFruits = fruits.length; //length counts all the elements and does not use parantheses
// let index = fruits.indexOf("banana");

// console.log(index);

// let fruits = ["apple", "orange", "banana", "coconut"];
// // Prints the array backwards
// // for (let i = fruits.length - 1; i >= 0; i--) {
// //   console.log(fruits[i]);
// // }
// fruits.sort().reverse();
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// spread operator = ... allows allows an iterable like array or string to be spread into different elements

// let numbers = [1, 2, 3, 4];

// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(minimum);

// let username = "Hendrik Leis";
// let letters = [...username].join("-");
// // ... is an only array operator
// console.log(letters);

// let fruits = ["apple", "orange", "coconut"];
// let vegetables = ["carrot", "celery", "potatoes"];

// let foods = [...fruits, ...vegetables, "eggs", "milk"];

// console.log(foods);

// rest parameters = (...rest) allow a function to work with variable number of arguments by bundling them together

// function openFridge(...foods) {
//   console.log(foods);
// }
// function getFood(...foods) {
//   return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// // openFridge(food1, food2, food3, food4, food5);
// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// // const total = sum(1, 2, 3, 4, 5);
// // console.log(`Your total is $${total}.`);

// function getAverage(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }
// const total = getAverage(75, 100, 85, 90, 68);
// console.log(total);

// function combineStrings(...strings) {
//   return strings.join(" ");
// }
// const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
// console.log(fullName);
