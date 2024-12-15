const Pizza = require("../Pizza");

class Pepperoni extends Pizza {
  constructor() {
    super();
    this.description = "Pepperoni Pizza";
    this.cost = 10.0;
  }
}

module.exports = Pepperoni;
