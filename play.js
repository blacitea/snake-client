const connect = require("./client").connect;
const setupInput = require("./input").setupInput;




console.log('Connecting...');
let connObj = connect();
setupInput(connObj);
//console.log(connObj);