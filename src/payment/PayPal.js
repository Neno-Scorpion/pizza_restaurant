const Payment = require("./Payment");

class PayPal extends Payment {
  pay(amount) {
    console.log(`Paid $${amount} using PayPal.`);
  }
}

module.exports = PayPal;
