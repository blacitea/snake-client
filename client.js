const net = require('net');

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
  // Listen to data from server, and execute callback when event (data from server) happens
  conn.on('data', (data) => {
    console.log("From server: " + data);
  });
  return conn;
};

module.exports = {
  connect,
};