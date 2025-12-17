// event listeners for buttons

// const mybox = document.getElementById("myBox");

// // function changeColor(event){
// //     event.target.style.backgroundColor = "blue";
// //     event.target.textContent = "Ouch!";
// // }

// const myButton = document.getElementById("myButton");

// myButton.addEventListener("click", function(event) {
//     mybox.style.backgroundColor = "blue";
//     mybox.textContent = "Ouch!";
// });

// myButton.addEventListener("mouseover", event => {
//     mybox.style.backgroundColor = "yellow";
//     mybox.textContent = "Do not do it!";
// })

// myButton.addEventListener("mouseout", event => {
//     mybox.style.backgroundColor = "red";
//     mybox.textContent = "Click Me";
// });



// eventListener = listen for specific events to create interactive web pages

// document.addEventListener("keyup", event => {
//     mybox.textContent = `You pressed`;
//     mybox.style.backgroundColor = "yellow";
// })

// document.addEventListener("keydown", event => {
//     mybox.textContent = `You pressed`;
//     mybox.style.backgroundColor = "green";
// })



// const myBox = document.getElementById("myBox");
// const moveAmount = 10;
// let X = 0;
// let Y = 0;

// document.addEventListener("keydown", event => {
//     if(event.key.startsWidth("Arrow")){
//         switch(event.key){
//             case "ArrowUp":
//                 Y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 Y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 X -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 X += moveAmount;
//                 break;
//         }
//         myBox.style.top = `${Y}px`;
//         myBox.style.left = `${X}px`;
//     }
// });

// const myButton = document.getElementById("myButton");
// const myBox = document.getElementById("myBox");

// myButton.addEventListener("click", event => {
// if (myBox.style.display === "none"){
//     myBox.style.display = "block";
// }
// else{
//     myBox.style.display = "none";
//     myButton.style.display = "show";
// }
// });

//NodeList = static collection of HTML elements by (ID, class, element)

let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent = "I'm green";
// });

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "green";
//     })
// })

// buttons.forEach(buttons =>{
//     buttons.addEventListener("click", event =>{
//         event.target.style.backgroundColor = "green";
//     })
    
// })

// const newButton = document.createElement("button");
// newButton.textContent = "New Button";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);

// buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// classList = list of classes of an HTML element
// const myH1 = document.getElementById("myH1");
// const myButton = document.getElementById("myButton");

// myH1.classList.add("enabled");
// myButton.classList.add("enabled");

// myH1.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "Enabled";}
//     else{

//     event.target.classList.replace("enabled", "disabled");}
// })

// myButton.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "Enabled";}
//     else{

//     event.target.classList.replace("enabled", "disabled");}
// })


