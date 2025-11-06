// object = a collection of related data and or methods

// const person1 = {
//     firstName : "Spongebob",
//     lastName : "Squarepants",
//     age : 30,
//     isEmployed : true,
//     sayHello: function(){console.log("Hi! I am Spongebob!")},
//     eat: function(){console.log("I am eating a Crabby Patty!")},
// }

// const person2 = {
//     firstName : "Patrick",
//     lastName : "Star",
//     age : 37,
//     isEmployed : false,
//     sayHello: function(){console.log("Hi! I am Patrick!")},
//     eat: function(){console.log("I am eating roast beef!")},
// }
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
// person1.sayHello();
// person1.eat();

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);
// person2.sayHello();
// person2.eat();


// this = refrence to the object where the this keyword is used

const person1 = {
    firstName : "Spongebob",
    lastName : "Squarepants",
    favFood : "hamburgers",
    age : 30,
    isEmployed : true,
    sayHello: function(){console.log(`Hi! I am eating ${this.favFood}!`)},
    eat: () => {console.log(`I am eating ${this.favFood}!`)},
}
person1.sayHello();
person1.eat();