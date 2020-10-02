#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

// import function from constant

const { login, topup, payment } = require("../lib/order");
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./localData");
} else {
  localStorage.clear();
}

/*******************************************/

program
  .command("topup <balance>")
  .alias("tp")
  .description("top up balance")

  .action(function (balance) {
    const loginedClient = localStorage.getItem("lastlogin");
    topup(loginedClient, balance);
  })
  .argv;
// login as Client
program
  .command("login <clientName>")
  .alias("lg")
  .description("Login as a new client")

  .action(function (name) {
    login(name);
  }).argv;
// payment
program

.command("pay <client2> <amount>")
.alias("p")
.description("Make Payment")

.action(function (client2, amount) {
  const client1 = localStorage.getItem("lastlogin");
  payment(client1, client2, amount);
}).argv;
program.parse(process.argv);
