#!/usr/bin/env node

const program = require('commander');

// import function from constant

const { login, topup, pay} = require('../lib/order');
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./localData");
  }
else{
    localStorage.clear();
}

/*******************************************/

program
    .command('topup <balance>') // sub-command name
    .alias('tp') // alternative sub-command is `al`
    .description('top up balance') // command description

    // function to execute when command is uses
    .action(function (balance) {
        const loginedClient = localStorage.getItem('lastlogin');
        topup(loginedClient, balance);
    });


// login as Client
program
    .command('login <clientName>') // sub-command name
    .alias('lg') // alternative sub-command is `lg`
    .description('Login as a new client') // command description

    // function to execute when command is uses
    .action(function (name) {
        login(name);
    });

    // payment
program
.command('<client1> pay <client2> <amount>') // sub-command name
.alias('p') // alternative sub-command is `p`
.description('Login as a new client') // command description

// function to execute when command is uses
.action(function (name) {
    console.log(name)
    login(name);
});


// allow commander to parse `process.argv`
program.parse(process.argv);