const net = require("net"); // get the net module to work with client/server
const { stdin } = require("process");
const connect = require("./client").connect;


// This let us listen for user input by checking for stdin
const setupInput = function (input) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(input);
  return stdin;
};

// This let us take what is inputed , and do something in response to it
const handleUserInput = function (key) {
  stdin.on('data', (key) => { // if a 'data' event happens, this listener catches it, and exec the callback
  //                           //**** This is inside the callback function, with key as input ****/
    
    if (key === '\u0003') {       // if the input(key) is Ctrl + C, exec process.exit()
      process.exit();
    }
    //process.stdout.write(`Move: ${key}`);
  });
};

console.log('Connecting...');
connect();
setupInput();
