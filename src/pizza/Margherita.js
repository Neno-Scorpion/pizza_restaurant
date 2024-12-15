const Pizza = require("../Pizza");

class Margherita extends Pizza {
  constructor() {
    super();
    this.description = "Margherita Pizza";
    this.cost = 8.0;
  }
}

module.exports = Margherita;
