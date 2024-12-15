const readline = require("readline-sync");
const Margherita = require("./src/pizza/Margherita");
const Pepperoni = require("./src/pizza/Pepperoni");
const Cheese = require("./src/toppings/Cheese");
const Olives = require("./src/toppings/Olives");
const Mushrooms = require("./src/toppings/Mushrooms");
const InventoryManager = require("./src/inventory/InventoryManager");
const PayPal = require("./src/payment/PayPal");
const CreditCard = require("./src/payment/CreditCard");

function main() {
  console.log("Welcome to the Pizza Ordering System!");

  // Select Pizza
  const pizzaChoice = readline.question("Choose a pizza (1. Margherita, 2. Pepperoni): ");
  let pizza = pizzaChoice === "1" ? new Margherita() : new Pepperoni();

  // Add Toppings
  const inventory = new InventoryManager();
  let addMore = true;

  while (addMore) {
    console.log("Available toppings: 1. Cheese, 2. Olives, 3. Mushrooms");
    const toppingChoice = readline.question("Choose a topping or press Enter to finish: ");

    if (toppingChoice === "1" && inventory.useIngredient("cheese")) pizza = new Cheese(pizza);
    else if (toppingChoice === "2" && inventory.useIngredient("olives")) pizza = new Olives(pizza);
    else if (toppingChoice === "3" && inventory.useIngredient("mushrooms")) pizza = new Mushrooms(pizza);
    else if (!toppingChoice) addMore = false;
    else console.log("Invalid choice or topping unavailable!");
  }

  // Payment
  console.log("Choose a payment method: 1. PayPal, 2. Credit Card");
  const paymentChoice = readline.question();
  const paymentMethod = paymentChoice === "1" ? new PayPal() : new CreditCard();

  // Output
  console.log(`\nYour order: ${pizza.getDescription()}`);
  console.log(`Total cost: $${pizza.getCost().toFixed(2)}`);
  paymentMethod.pay(pizza.getCost());
}

main();
