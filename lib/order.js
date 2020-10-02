const { addNewClient, topup, payment } = require("./utilities");

exports.login = function (name) {
  addNewClient(name);
};

exports.topup = function (name, balance) {
  topup(name, balance);
};

exports.payment = function (c1, c2, amt) {
  payment(c1, c2, amt);
};
