const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  // socket.emit("message", "Welcome!");
  socket.broadcast.emit("message", "A user has joined the chat");
  socket.on("disconnect", () => {
    io.emit("message", "A user has left the chat");
  });
  socket.on("chatMessage", (msg) => {
    io.emit("message", msg);
    console.log(msg);
  });
});

app.use(express.static(path.join(__dirname)));

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`server listening on port ${PORT}`));
