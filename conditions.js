// Conditional sentences

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function () {
//   age = myText.value;
//   age = Number(age);

//   if (age >= 100) {
//     resultElement.textContent = "You are TOO OLD to enter this site";
//   } else if (age >= 18) {
//     resultElement.textContent = "You are old enough to enter this site";
//   } else if (age == 0) {
//     resultElement.textContent = "You can not enter. You were just born";
//   } else if (age < 0) {
//     resultElement.textContent = "Your age can not be below 0";
//   } else {
//     resultElement.textContent = "You must be 18+ to enter this site";
//   }
// };

// let time = 13;

// if (time < 12) {
//   console.log("Good morning");
// } else {
//   console.log("Good afternoon");
// }

// let isStudent = true;

// if (isStudent) {
//   console.log("You are a student");
// } else {
//   console.log("You are NOT a student");
// }

// let age = 15;
// let hasLicense = false;

// if (age >= 16) {
//   console.log("You are old enough to drive");

//   if (hasLicense) {
//     console.log("You have your license");
//   } else {
//     console.log("You do not have your license yet");
//   }
// } else {
//   console.log("You must be 16+ to have a license");
// }

// Radio button and checkbox
// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function () {
//   if (myCheckBox.checked) {
//     subResult.textContent = "You are subscribed.";
//   } else {
//     subResult.textContent = "You are not subscribed.";
//   }
//   if (visaBtn.checked) {
//     paymentResult.textContent = "You are paying with Visa.";
//   } else if (masterCardBtn.checked) {
//     paymentResult.textContent = "You are paying with Mastercard.";
//   } else if (payPalBtn.checked) {
//     paymentResult.textContent = "You are paying with PayPal.";
//   } else {
//     paymentResult.textContent = "You have not picked a payment method.";
//   }
// };

// ternary operator = a shortcut to if and else statements
//                  helps to assign a variable based on a condition
//                  condition ? codeif true : codeiffalse;

// let age = 21;
// let Message = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(Message);

// let purchaseAmount = 100;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(
//   `Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`
// );

// SWITCH = can be efficient replacement for if else statements

// let day = "pizza";

// switch (day) {
//   case 1:
//     console.log("It is Monday.");
//     break;
//   case 2:
//     console.log("It is Tuesday.");
//     break;
//   case 3:
//     console.log("It is Wednesday.");
//     break;
//   case 4:
//     console.log("It is Thursday.");
//     break;
//   case 5:
//     console.log("It is Fryday.");
//     break;
//   case 6:
//     console.log("It is Saturday.");
//     break;
//   case 7:
//     console.log("It is Sunday.");
//     break;
//   default:
//     console.log(`${day.toUpperCase()} is not a day.`);
// }

// let testScore = 60;
// let letterGrade;

// switch (true) {
//   case testScore >= 91:
//     letterGrade = "A";
//     break;
//   case testScore >= 81:
//     letterGrade = "B";
//     break;
//   case testScore >= 71:
//     letterGrade = "C";
//     break;
//   case testScore >= 61:
//     letterGrade = "D";
//     break;
//   case testScore >= 51:
//     letterGrade = "E";
//     break;
//   case testScore < 51:
//     letterGrade = "F";
//     break;
//   default:
//     letterGrade = `${testScore} is not a score.`;
// }
// console.log(letterGrade);

// string methods

// let userName = "    Hendrik, Leis    ";
// // It takes a character at the index which was given
// console.log(userName.charAt(13));
// // No parantheses, returns the total length of the string
// console.log(userName.length);
// //Slice method takes a pice of the string = first number is the start number and second is the end number
// console.log(userName.slice(4, 7));
// // Trim method removes all of the white space in the string
// // trimStart and trimEnd do it in the beginning and end
// console.log(userName.trimEnd());
// // Split creates a list of items from the original string and they were splitted from the object written in the parentheses
// console.log(userName.split(","));
// // toUpperCase and toLowerCase turns an entire string to a lower or upper case
// console.log(userName.toLowerCase());
// console.log(userName.toUpperCase());
// // Repeat just repeats a string as many times that you want it
// console.log(userName.repeat(7));
// // At returns the letter in a string from the index that was given
// console.log(userName.at(6));
// //
// console.log(userName.replaceAll("Hendrik", "jaanus"));

// String slicing = creating a substring from an existing one

// const fullName = "Hendrik Leis";

// let firstName = fullName.slice(0, 7);
// let lastName = fullName.slice(8, 12);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(lastName);
// console.log(firstName);

// const email = "leishendrik@gmail.com";

// let userName = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1, email.length);

// console.log(userName);
// console.log(extension);

// Method chaining = calling one method after another

// let userName = window.prompt("Enter your email: ");

// userName = userName.trim();
// let upper = userName.charAt(0);
// upper = upper.toUpperCase();
// let lower = userName.slice(1);
// lower = lower.toLowerCase();

// userName = upper.concat(lower);

// console.log(userName);

// userName =
//   userName.trim().charAt(0).toUpperCase() +
//   userName.trim().slice(1).toLowerCase();

// console.log(userName);

//Logical operators = used to combine or manipulate boolean values

// const temp = -67;

// if (temp > 0 && temp <= 30) {
//   console.log("The weather is good.");
// } else {
//   console.log("The weather is bad");
// }

// if (temp <= 0 || temp > 30) {
//   console.log("The weather is bad.");
// } else {
//   console.log("The weather is good");
// }

// const isSunny = false;

// if (!isSunny) {
//   console.log("It is Cloudy.");
// } else {
//   console.log("It is Sunny.");
// }

// Equality operators

// const PI = "3.14";

// if (PI === 3.14) {
//   console.log("That is PI");
// } else {
//   console.log("That is not PI");
// }
