
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


exports.payment = function (clint1, clint2, amount) {
    const client1 = JSON.parse(localStorage.getItem(clint1));
    const client2 = JSON.parse(localStorage.getItem(clint2));
    const client1Ammount = parseInt(client1.balance) - parseInt(amount);
    const client2Ammount = parseInt(client2.balance) + parseInt(amount);
    localStorage.setItem(clint1, JSON.stringify({ balance: client1Ammount }));
    localStorage.setItem(clint2, JSON.stringify({ balance: client2Ammount }));
    let label = ''
    if(client1Ammount >= client2Ammount){
      label = ''
    }else if(
      label = `with ${clint1} woing ${parseInt(amount) - client1Ammount}`
    )
    console.log(`(${client1Ammount}, ${client2Ammount})`, label);
  };