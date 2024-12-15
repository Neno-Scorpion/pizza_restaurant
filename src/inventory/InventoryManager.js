class InventoryManager {
  constructor() {
    if (InventoryManager.instance) {
      return InventoryManager.instance;
    }

    this.ingredients = {
      cheese: 10,
      olives: 10,
      mushrooms: 10
    };

    InventoryManager.instance = this;
  }

  checkIngredient(topping) {
    return this.ingredients[topping] > 0;
  }

  useIngredient(topping) {
    if (this.checkIngredient(topping)) {
      this.ingredients[topping]--;
      return true;
    }
    return false;
  }
}

module.exports = InventoryManager;
