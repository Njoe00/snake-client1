const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541   
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write("Name: NJJ");
    setInterval( () => {
    }, 100)
    });

    conn.on("data", (data) => {
        console.log("data", data);
    })



  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};