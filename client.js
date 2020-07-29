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
  // Event handler!! listening for data
  // Listen to data from server, and execute callback when event(data from server) happens
  conn.on('data', (data) => {
    console.log("From server: " + data);
  });
  // Event handler!! listening for connection
  // when client connected with server, callback will be executed
  conn.on('connect', () => {
    console.log("You are connected"); // print on client end
    // conn.write let you send data (string) to server
    conn.write('Name: BLA'); // send your name to the server
    conn.write('Move: up'); // send a movement 'up' to the server as soon as connected
  });


  return conn;
};

// Export using ES6 object shorthand
module.exports = {
  connect,
};