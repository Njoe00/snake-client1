let connection;

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "w") {
    console.log("Move: up");
    connection.write("Move: up");
  }
  if (data === "d") {
    console.log("Move: right");
    connection.write("Move: right");
  }
  if (data === "s") {
    console.log("Move: down");
    connection.write("Move: down");
  }
  if (data === "a") {
    console.log("Move: left");
    connection.write("Move: left");
  }
  if (data === "q") {
    connection.write("Say: I love spam!");
  }
  if (data === "e") {
    connection.write("Say: dogs > cats");
  }
  if (data === "z") {
    connection.write("Say: ouroboros");
  }
};


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};



   
module.exports = {setupInput};
