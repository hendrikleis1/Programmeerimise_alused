// TOIDUKORVI ÜLESANNE

let shoppingCart = [{name: "apple", quantity: 4}, {name: "banana", quantity: 2}, {name: "orange", quantity: 5}, {name: "milk", quantity: 1}, {name: "bread", quantity: 2}];

const total = shoppingCart.reduce(function(accumulator, item){
            return accumulator + item.quantity;
}, 0);

console.log(`The total number of items in the shoppingcart is ${total}.`);

shoppingCart.push({name: "yogurt", quantity: 3});
console.log(shoppingCart);

const newShoppingCart = shoppingCart.find((item) => item.name === "apple");
if (newShoppingCart) {
    newShoppingCart.quantity += 3;
} else {
    shoppingCart.push({name: "apple", quantity: 3});
}
console.log(newShoppingCart);



