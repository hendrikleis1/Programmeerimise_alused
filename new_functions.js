// callback = a function that is passed as an argument
// hello(goodbye);
// function hello(callback) {
//   console.log("Hello");
//   callback();
// }
// function wait() {
//   console.log("Waite");
// }
// function leave() {
//   console.log("Leave");
// }
// function goodbye() {
//   console.log("Goodbye");
// }
sum(displayPage, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementByIdById("myH1").textContent = result;
}
