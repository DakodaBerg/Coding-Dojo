function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["bacon",]);
console.log(pizza3);

var pizza4 = pizzaOven("thin and cripsy", "white sauce", ["mozzarella"]);
console.log(pizza4);

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",

];

var sauceTypes = [
    "traditional",
    "marinara",
    "white sauce",

];

var cheeses = [
    "mozzarella",
    "feta",
    "swiss cheese",
    "parmesan",

];

var toppings = [
    "pepperoni",
    "sausage",
    "bacon",
    "olives",
    "bannana peppers",
    "onions",
    "mushrooms",
];