let connection;
let {W,A,S,D} = require("./constants");

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "w") {
    console.log(W);
    connection.write(W);
  }
  if (data === "d") {
    console.log(D);
    connection.write(D);
  }
  if (data === "s") {
    console.log(S);
    connection.write(S);
  }
  if (data === "a") {
    console.log(A);
    connection.write(A);
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
