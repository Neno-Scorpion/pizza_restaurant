const ToppingDecorator = require("./ToppingDecorator");

class Mushrooms extends ToppingDecorator {
  getDescription() {
    return `${this.pizza.getDescription()}, Mushrooms`;
  }

  getCost() {
    return this.pizza.getCost() + 0.7;
  }
}

module.exports = Mushrooms;
