const ToppingDecorator = require("./ToppingDecorator");

class Olives extends ToppingDecorator {
  getDescription() {
    return `${this.pizza.getDescription()}, Olives`;
  }

  getCost() {
    return this.pizza.getCost() + 0.5;
  }
}

module.exports = Olives;
