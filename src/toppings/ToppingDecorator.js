const Pizza = require(".../pizza/Pizza");

class ToppingDecorator extends Pizza {
  constructor(pizza) {
    super();
    this.pizza = pizza;
  }

  getDescription() {
    return this.pizza.getDescription();
  }

  getCost() {
    return this.pizza.getCost();
  }
}

module.exports = ToppingDecorator;
