const Payment = require("./Payment");

class CreditCard extends Payment {
  pay(amount) {
    console.log(`Paid $${amount} using Credit Card.`);
  }
}

module.exports = CreditCard;
