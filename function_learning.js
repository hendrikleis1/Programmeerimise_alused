// forEach() = method used to iterate over the elements of an array.

// let numbers = [1, 2, 3, 4, 5];


// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }


// function square(element, index, array){
//     array[index] = Math.pow(element, 2);

// }
// function display(element){
//     console.log(element);
// }

// let fruits = ["apple", "banana", "cherry", "date"];

// fruits.forEach(upperCase);
// fruits.forEach(display);
// fruits.forEach(lowerCase);
// fruits.forEach(display);
// fruits.forEach(capitalize);
// fruits.forEach(display);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }
// function lowerCase(element, index, array){
//     array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(element){
//     console.log(element);
// }


// .map() = method used to create a new array by applying a function to each element of the original array.

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);

// console.log(squares);

// function square(element){
//     return Math.pow(element, 2);
// }
// function cube(element){
//     return Math.pow(element, 3);
// }

// const students = ["spongebob", "patrick", "sandy", "squidward"];
// const studentsUpperCase = students.map(upperCase);

// console.log(studentsUpperCase);

// function upperCase(element){
//     return element.toUpperCase();
// }

// const dates = ["2023-01-15", "2022-12-31", "2023-07-04", "2022-11-25"];
// //const formattedDates = dates.map(formatDates);

// //console.log(formattedDates);
// console.log(dates.map(formatDates));

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[2]}.${parts[1]}.${parts[0]}`;
// }

// .filter() = method used to create a new array with all elements that pass the test implemented by the provided function.

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(oddNums);
// console.log(evenNums);

// function isEven(element){
//     return element % 2 === 0;
// }
// function isOdd(element){
//     return element % 2 !== 0;
// }

// const ages = [12, 17, 18, 18, 21, 20, 45];
// const adults = ages.filter(isAdult);
// const minors = ages.filter(isMinor);

// console.log(minors);

// console.log(adults);

// function isAdult(element){
//     return element >= 18 && !isNaN(element);
// }
// function isMinor(element){
//     return element < 18 && !isNaN(element);
// }

// const words = ["apple", "banana", "cherry", "date", "pomegranate", "kiwi"];
// const longWords = words.filter(isLong);
// const shortWords = words.filter(isShort);

// console.log(longWords);
// console.log(shortWords);

// function isLong(element){
//     return element.length >= 6;
// }
// function isShort(element){
//     return element.length < 6;
// }

// .reduce() = method used to execute a reducer function on each element of the array, resulting in a single output value.

// const prices = [5, 86, 23, 45, 28];

// const total = prices.reduce(sum);

// console.log(`$${total}`)

// function sum(accumulator, element){
//     return accumulator + element;
// }

// const grades = [85, 92, 78, 90, 88];

// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);

// console.log(`The lowest grade is ${minimum}`)

// console.log(`The highest grade is ${maximum}`)

// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }
// function getMin(accumulator, element){
//     return Math.min(accumulator, element);
// }

// function expressions = functions defined using the function keyword and assigned to a variable.

// const hello = function(){
//     console.log("hello");
// }

// hello();

// setTimeout(function(){
//     console.log("Hello");
// }, 3000);

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });

// console.log(squares);

// const cubes = numbers.map(function(element){
//     return Math.pow(element, 3);
// });

// console.log(cubes);

// const evenNums = numbers.filter(function(element){
//     return element % 2 === 0;
// });

// console.log(evenNums);

// arrow functions = a shorter syntax for writing function expressions using the "=>" syntax.

// const hello = (name) => {console.log(`Hello, ${name}!`);
//  console.log("You are old");}

// hello("Hendrik");

// setTimeout(() => console.log("hello"), 3000);

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map((element) => Math.pow(element, 2));

// console.log(squares);