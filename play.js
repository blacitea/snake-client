const net = require("net"); // get the net module to work with client/server
const { stdin } = require("process");
const connect = require("./client").connect;

const setupInput = function (input) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(input);
  return stdin;
};

const handleUserInput = function (key) {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    //process.stdout.write(`Move: ${key}`);
  });
};

console.log('Connecting...');
connect();
setupInput();
