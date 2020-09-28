const { addNewClient, topup, pay } = require("./utilities");

exports.login = function (name) {
  addNewClient(name);
};

exports.topup = function (name, balance) {
  topup(name, balance);
};

exports.pay = function (c1, c2, amt) {
  pay(c1, c2, amt);
};
