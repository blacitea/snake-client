const net = require("net"); // get the net module to work with client/server

// Detail of the server
const PORT = 50541;
const HOST = '135.23.222.131';  // use 'localhost' if you are hosting the server in the same computer

// Get connected with the server
const connect = function () {
  const conn = net.createConnection({
    host: HOST, // put in the IP address of server
    port: PORT, // put in the port of the server
  });
  // Let the computer know how to interpret incoming data (i.e. as text)
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log("From server: " + data);
  });
  return conn;
};

console.log('Connecting...');
connect();

