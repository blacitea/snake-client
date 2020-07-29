const net = require("net"); // get the net module to work with client/server
const { stdin } = require("process");
const connect = require("./client").connect;
const setupInput = require("./input").setupInput;




console.log('Connecting...');
connect();
setupInput();
