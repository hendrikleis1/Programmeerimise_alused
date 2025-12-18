// PROMISE = an object that manages asynchronus operations.

// CHORES
// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog(){
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = true;
//             if(dogWalked){
//                 resolve("You walk the dog");
//             }
//             else{
//                 reject("Dog was not walked!");
//             }
//     }, 1500);
// });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const kitchenCleaned = true;
//             if(kitchenCleaned){
//                 resolve("You clean the kitchen");
//             }
//             else{
//                 reject("Kitchen was not cleaned!");
//             }
        
//     }, 2500);
// });
// }
// function takeOutTrash(c){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const trashTakenOut = true;
//             if(trashTakenOut){
//                 resolve("You take out the trash");
//             }
//             else{
//                 reject("Trash was not taken out!");
//             }
        
//     }, 500);
// });
// }

// walkDog().then(value => {console.log(value); return cleanKitchen();})
// .then(value => {console.log(value); return takeOutTrash();})
// .then(value => {console.log(value); console.log("All chores are done!");})
// .catch(error => {console.log(error);});


// Async/Await

// function walkDog(){
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = true;
//             if(dogWalked){
//                 resolve("You walk the dog");
//             }
//             else{
//                 reject("Dog was not walked!");
//             }
//     }, 1500);
// });
// }
// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const kitchenCleaned = true;
//             if(kitchenCleaned){
//                 resolve("You clean the kitchen");
//             }
//             else{
//                 reject("Kitchen was not cleaned!");
//             }
        
//     }, 2500);
// });
// }

// function takeOutTrash(c){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const trashTakenOut = true;
//             if(trashTakenOut){
//                 resolve("You take out the trash");
//             }
//             else{
//                 reject("Trash was not taken out!");
//             }
        
//     }, 500);
// });
// }

// async function doChores(){
//     try {
//     const walk = await walkDog();
//     console.log(walk);

//     const clean = await cleanKitchen();
//     console.log(clean);

//     const trash = await takeOutTrash();
//     console.log(trash);

//     console.log("All chores are done!");
//     }
//     catch (error) {
//         console.error(error);
//     }
// }

// doChores();


// JSON = JavaScript Object Notation
// lightweight data-interchange format
// easy for humans to read and write
// easy for machines to parse and generate
// text format that is completely language independent
// used to transmit data between a server and a web application

// const names = ["Spongebob", "Patrick", "Squidward"];
// const person = {
//     "name": "Spongebob",
//     "age": 20,
//     "isEmployed": true,
//     "hobbies": ["jellyfishing", "blowing bubbles", "krabby patties"]
// };
// const people = [{
//     "name": "Spongebob",
//     "age": 20,
//     "isEmployed": true
// },
// {
//     "name": "Patrick",
//     "age": 33,
//     "isEmployed": false
// },
// {
//     "name": "Sandy",
//     "age": 27,
//     "isEmployed": false
// }
// ];




// fetch("people.json")
// .then(response => response.json())
// .then(values => values.forEach(value => console.log(value.age)))




// FETCH = function used for making HTTP requests to fetch resources.

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//     if(!response.ok){
//         throw new Error("Could not fetch resource")
//     }
//     return response.json();
// })
// .then(data => console.log(data.height))
// .catch(error => console.error(error));
fetchData();
async function fetchData() {
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
        throw new Error("Could not fetch resource")
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}