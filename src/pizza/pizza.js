class Pizza {
  constructor() {
    this.description = "Unknown Pizza";
    this.cost = 0;
  }

  getDescription() {
    return this.description;
  }

  getCost() {
    return this.cost;
  }
}

module.exports = Pizza;
