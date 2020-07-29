const stdin = process.stdin;
let connection;

// This let us listen for user input by checking for stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(conn);
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
    if (key === 'w') {            // if the input(key) is w, exec the print
      connection.write('Move: up');
    }
    if (key === 's') {            // if the input(key) is s, exec the print
      console.log('down');
    }
    if (key === 'a') {            // if the input(key) is a, exec the print
      console.log('left');
    }
    if (key === 'd') {            // if the input(key) is d, exec the print
      console.log('right');
    }
  });
};

let userInput = {
  setupInput,
};

module.exports = userInput;