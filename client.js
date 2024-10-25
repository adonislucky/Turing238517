const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", function open() {
  console.log("Connected to WebSocket server");
});

ws.on("message", function incoming(message) {
  console.log("received: %s", message);
  // Send acknowledgement back to the server (which will forward it to the browser)
  ws.send("Acknowledgement: " + message);
});

ws.on("close", function close() {
  console.log("Disconnected from WebSocket server");
});
