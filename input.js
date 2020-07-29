let connection;

// This let us listen for user input by checking for stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // listen here, exec handlerUserInput when it happens,
  // what ever data triggered this, will pass on to the callback
  stdin.on('data', handleUserInput);
  return stdin;
};

const { KEY_BINDING } = require("./constants");

// The callback function to exec, when an input of data from stdin happens (event of stdin)
const handleUserInput = function (key) {
//**** This is inside the callback function, with key as input ****/
// if the input(key) is Ctrl + C, exec process.exit()
  if (key === '\u0003') process.exit();
  if (KEY_BINDING[key]) connection.write(KEY_BINDING[key]);
};

let userInput = {
  setupInput,
};

module.exports = userInput;