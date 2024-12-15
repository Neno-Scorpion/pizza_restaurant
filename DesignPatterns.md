# Design Patterns in the Pizza Ordering System

## Factory Pattern
- **Purpose**: creating pizza types (e.g., `Margherita`, `Pepperoni`) without exposing the creation logic.
- **Advantages**: simplifies object creation and centralizes pizza instantiation.

---

## Decorator Pattern
- **Purpose**: dynamically adds toppings (e.g., Cheese, Olives, Mushrooms) to a pizza.
- **Advantages**: avoids creating a separate class for every possible combination of toppings.
- **Example**:
    ```javascript
    let pizza = new Margherita();
    pizza = new Cheese(pizza);
    pizza = new Olives(pizza);

    console.log(pizza.getDescription());
    console.log(pizza.getCost());
    ```

---

## Singleton Pattern
- **Purpose**: make sure that only one instance of the `InventoryManager` exists to track ingredient usage across the system.
- **Advantages**: prevents conflicts in ingredient counts when multiple pizzas are processed.

---

## Strategy Pattern
- **Purpose**: used for payment methods. Each payment method (e.g., `PayPal`, `CreditCard`) implements the `Payment` interface.
- **Advantages**: allows the system to switch payment methods without altering the core code.

---

## Overengineering Discussion
- **Benefits**:
  - design patterns enhance extensibility and maintainability.
- **Drawbacks**:
  - **Complexity**: adding a new topping requires creating a new decorator class, which might feel excessive.
  - **Performance**: decorators involve nested function calls, which could be simplified for smaller projects.
  - **needed in real world**: a database system might replace the need for a Singleton inventory manager.

---

## Command Pattern
- **Purpose**: can manage user actions (e.g., ordering, adding toppings) as a sequence of commands.
- **Advantages**: enables undo/redo functionality.
- **Current Use**: not implemented, as it might be unnecessary for the current setup.

---

## Observer Pattern
- **Purpose**: useful for notifications (e.g., sending updates when inventory is low).
- **Advantages**: handles real-time updates in a growing system.
- **Current Use**: not implemented but could be added in the future.

---

## Builder Pattern
- **Purpose**: simplifies the construction of complex pizza objects (with multiple toppings) via a step-by-step creation process.
- **Advantages**: streamlines topping selection and inventory checks.
- **Example**:  `PizzaBuilder` class could simplify the customization process.
