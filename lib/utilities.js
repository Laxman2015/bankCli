
exports.addNewClient = function (name, balance = 0) {
  if (localStorage.getItem(name)) {
    console.log("Client is allready exist");
    return false;
  }
  localStorage.setItem(name, JSON.stringify({ balance: balance }));
  localStorage.setItem('lastlogin',  name);
  console.log(`Hello ${name}`);
  console.log(`your balance is ${balance}`);
};

exports.topup = function (name, balance = 0) {
  const client = JSON.parse(localStorage.getItem(name));
  if (client) {
    const newBalance = parseInt(client.balance, 10) + parseInt(balance, 10);
    localStorage.setItem(name, JSON.stringify({ balance: newBalance }));
    console.log(`Hello ${name}`);
    console.log(`your balance is ${JSON.parse(localStorage.getItem(name)).balance}`);
  }
};


exports.pay = function (clint1, clint2, amount) {
    const client1 = JSON.parse(localStorage.getItem(client1));
    const client2 = JSON.parse(localStorage.getItem(client2));
    console.log('client1', client1);
    const client1Ammount = client1.balance - amount;
    const client2Ammount = client2.balance + amount;
    localStorage.setItem(client1, JSON.stringify({ balance: client1Ammount }));
    localStorage.setItem(client2, JSON.stringify({ balance: client2Ammount }));
    console.log('client1-', client1);

    // if (client) {
    //   const newBalance = client.balance + balance;
    //   localStorage.setItem(name, { balance: newBalance });
    //   console.log(`Hello ${name}`);
    //   console.log(`your balance is ${localStorage.getItem(name).balance}`);
    // }
  };