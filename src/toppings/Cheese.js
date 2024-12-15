const ToppingDecorator = require("./ToppingDecorator");

class Cheese extends ToppingDecorator {
  getDescription() {
    return `${this.pizza.getDescription()}, Cheese`;
  }

  getCost() {
    return this.pizza.getCost() + 1.0;
  }
}

module.exports = Cheese;
