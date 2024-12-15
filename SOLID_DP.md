# SOLID Design Principles
=====================================

## Single Responsibility Principle (SRP)

Each class in the system has a single, well-defined responsibility:

### Pizza Classes

* `Margherita`: Represents a Margherita pizza
* `Pepperoni`: Represents a Pepperoni pizza

### Topping Decorators

* `Cheese`: Adds cheese to a pizza
* `Olives`: Adds olives to a pizza
* `Mushrooms`: Adds mushrooms to a pizza

### InventoryManager

* Manages the stock of ingredients

### Payment Classes

* `PayPal`: processes payments using PayPal
* `CreditCard`: processes payments using credit card

## Open/Closed Principle (OCP)

the system is open for extension but closed for modification:

* new toppings or pizza types can be added by creating new classes without modifying the existing ones.
* adding a new payment method requires implementing the `Payment` interface, leaving existing code unchanged.

## Liskov Substitution Principle (LSP)

subtypes can replace their parent types:

* any `Pizza` subclass (e.g., `Margherita`, `Pepperoni`) can be used wherever a `Pizza` is expected.
* `ToppingDecorator` subclasses (e.g., `Cheese`, `Olives`, `Mushrooms`) dynamically wrap `Pizza` objects seamlessly.

## Interface Segregation Principle (ISP)

the system avoids forcing classes to implement unnecessary methods:

* `Payment` methods implement only the `pay(amount)` method from the `Payment` interface.
* Decorators extend functionality through composition without altering interfaces.

## Dependency Inversion Principle (DIP)
high-level modules depend on abstractions, not concrete implementations:

* Payment processing relies on the `Payment` interface, not specific classes like `PayPal` or `CreditCard`.
* toppings depend on the `ToppingDecorator` abstraction rather than specific implementations.

